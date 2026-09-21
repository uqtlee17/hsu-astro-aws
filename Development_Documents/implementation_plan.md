# Interactive World Map Implementation Plan

You are absolutely right. While network graphs look cool, a World Map instantly communicates _global scale_ and is exactly what high-end research portals use. We will rip out the Network Graph and replace it with a professional Interactive World Map!

## User Review Required

> [!IMPORTANT]
> Please review the technical approach below. I will use **Leaflet.js** (the industry standard for interactive web maps) instead of ECharts to build this. Let me know if you approve!

## Open Questions

None! If you approve, I will begin building this immediately.

## Proposed Changes

### 1. The Interactive World Map (Leaflet.js)

I will remove the ECharts script and replace it with **Leaflet.js**.

- The map will center on Australia (HSU).
- **Country Markers**: I will place interactive circle markers on the map corresponding to your collaborator universities.
- **Popups**: Clicking a marker will open a clean popup showing the Institution Name, Country, and the total Publication Count.
- _Note on Logos/Links_: To keep the JSON manageable, we will stick to text-based popups with publication counts initially. If you want specific logos for specific universities later, you can easily add them to the popup HTML!

### 2. The Statistics Strip

Right below the map, I will add the 3-column stats strip you requested:

- **12 Countries**
- **34 Collaborations**
- **150+ Publications**
  _(Note: I will wire these numbers to update dynamically based on the actual publications in your JSON file, so you never have to manually edit them!)_

### 3. Data Dictionary

To make this easy for you to manage, you won't need to enter GPS coordinates into your `publications.json` file. You just keep typing `"collaborators": ["Harvard"]`.
I will build a hidden "dictionary" inside the map script that automatically knows the GPS coordinates of major universities (Oxford, Harvard, QIMR, etc.). If you ever add an unknown university, you can simply add its GPS coordinates to the dictionary.

## Verification Plan

1. Remove ECharts logic from `publications.astro`.
2. Inject Leaflet.js CSS and JS via CDN.
3. Build the Map container and the Stats Strip below it.
4. Write the JavaScript logic to parse `publications.json`, calculate the real stats, and place the Leaflet markers.
