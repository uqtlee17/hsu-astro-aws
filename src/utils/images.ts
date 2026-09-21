import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import type { MetaDataOpenGraph } from '~/types';

// Lazy-loaded glob of local images. The glob runs once and is cached.
let _localImages: Record<string, () => Promise<unknown>> | undefined;

const loadLocalImages = () => {
  if (_localImages) return _localImages;
  try {
    _localImages = import.meta.glob(['~/assets/images/**/*', '/src/assets/images/**/*']);
  } catch {
    _localImages = {};
  }
  return _localImages;
};

/**
 * Resolve an image reference to either ImageMetadata (local) or a string URL (remote/public).
 * Accepts:
 *   - `null` / `undefined`         → returned as-is
 *   - `ImageMetadata`              → returned as-is (already imported)
 *   - `"http(s)://…"`              → returned as-is (external)
 *   - `"/path"` (public folder)    → returned as-is (public/)
 *   - `"~/assets/images/…"` or `"src/assets/images/…"` → resolved to ImageMetadata
 */
export const findImage = async (
  imagePath?: string | ImageMetadata | null
): Promise<string | ImageMetadata | undefined | null> => {
  if (typeof imagePath !== 'string') return imagePath;
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) return imagePath;
  if (imagePath.startsWith('/') && !imagePath.startsWith('/src/assets/images')) return imagePath;

  const images = loadLocalImages();
  const normalizedKey = imagePath.replace(/^~\//, '/src/').replace(/^src\//, '/src/');
  const tildeKey = imagePath.startsWith('~/') ? imagePath : imagePath.replace(/^\/?src\//, '~/');
  const relativeKey = normalizedKey.replace(/^\//, '');

  const filename = imagePath
    .replace(/^~\/assets\/images\//, '')
    .replace(/^src\/assets\/images\//, '')
    .replace(/^\/src\/assets\/images\//, '');

  const loader =
    images[normalizedKey] ||
    images[tildeKey] ||
    images[relativeKey] ||
    images[imagePath] ||
    Object.entries(images).find(([k]) => k.toLowerCase().endsWith(`/${filename.toLowerCase()}`))?.[1];

  if (typeof loader !== 'function') return null;
  return ((await loader()) as { default: ImageMetadata }).default;
};

const OG_WIDTH = 1200;
const OG_HEIGHT = 626;

/**
 * Adapt OpenGraph images to absolute, optimized URLs.
 * Used by Metadata.astro to produce social-card-ready URLs.
 */
export const adaptOpenGraphImages = async (
  openGraph: MetaDataOpenGraph = {},
  astroSite: URL | undefined = new URL('')
): Promise<MetaDataOpenGraph> => {
  if (!openGraph?.images?.length) return openGraph;

  const adaptedImages = await Promise.all(
    openGraph.images.map(async (image) => {
      if (!image?.url) return { url: '' };

      const resolved = await findImage(image.url);
      if (!resolved) return { url: '' };

      // Generate an optimized JPG via Astro's image service (Sharp by default).
      const optimized = await getImage({
        src: resolved,
        width: OG_WIDTH,
        height: OG_HEIGHT,
        format: 'jpg',
      });

      return {
        url: String(new URL(optimized.src, astroSite)),
        width: Number(optimized.attributes.width) || OG_WIDTH,
        height: Number(optimized.attributes.height) || OG_HEIGHT,
      };
    })
  );

  return { ...openGraph, images: adaptedImages };
};
