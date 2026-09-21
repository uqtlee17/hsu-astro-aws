# Interactive World Map Implementation Tracker

- `[x]` **1. Map Infrastructure**
  - `[x]` Remove ECharts library and configuration from `src/pages/publications.astro`.
  - `[x]` Inject Leaflet.js CSS and JS via CDN.
  - `[x]` Add the Map DOM container and configure initial tile layer (OpenStreetMap).
- `[x]` **2. Statistics Strip**
  - `[x]` Build the 3-column stats strip UI (Countries, Collaborations, Publications).
  - `[x]` Write Astro/JS logic to dynamically calculate these counts from `publications.json`.
- `[x]` **3. Data & Markers**
  - `[x]` Build the Geo-Dictionary mapping University names to Lat/Lng coordinates and Country names.
  - `[x]` Render interactive Leaflet circle markers with HTML popups showing publication counts.
