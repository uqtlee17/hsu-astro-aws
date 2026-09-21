# Global Research Collaborations Map Now Live!

The ECharts network graph has been completely removed and replaced with a professional, interactive **Interactive World Map** built on Leaflet.js!

You can view it right now at: **[http://localhost:4321/publications](http://localhost:4321/publications)**
_(Be sure to do a hard refresh of the page!)_

## What was implemented:

### 1. Interactive World Map

The map automatically places geographic circle markers around the globe corresponding to your collaborators.

- You can pan the map freely, and click any of the blue markers.
- Clicking a marker opens a clean popup displaying the **University Name**, **Country**, and **Total Joint Publications**.

> [!TIP]
> **No Scroll Hijacking!**
> I specifically disabled "scroll wheel zooming" on the map. This guarantees that when a visitor is scrolling down your page to read your publications, their mouse wheel won't get "trapped" inside the map. They can still pan the map by clicking and dragging.

### 2. Dynamic Statistics Strip

Right below the map, you will see a beautiful 3-column statistics strip showing:

- **Countries**
- **Collaborations**
- **Publications**

**This strip is 100% automated.** It scans your `publications.json` file in real-time. If you add a new publication with a brand new university from a new country, all three numbers on the strip will instantly increment. You never have to manually update those numbers!

### 3. Frictionless Data Management

You do **not** need to look up GPS coordinates every time you add a publication!
I built a hidden dictionary inside the code. When you add `"Harvard Medical School"` to a publication in the JSON file, the code automatically knows its latitude and longitude and plots it on the map.

## Next Steps

Navigate to **[http://localhost:4321/publications](http://localhost:4321/publications)** and click the markers on the map! If this looks exactly like the premium visual you were envisioning, we can officially close out the Publications page.
