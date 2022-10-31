## Airbnb clone

This is an airbnb clone, which is deployed [here](https://air-pav-clone.vercel.app/) on Vercel.

I built it with Next.js and Tailwind CSS (which I'm a huge fan of) and it's fully responsive as I've used Tailwind breakpoints.

I used Flexbox and Grid for page layout.

Static site generation is used for the small cards inside the 'Explore Nearby' section.

The data for search page comes in through server-side rendering. It's coming in from a dummy endpoint/ mock API so the results are always the same: something I'll look to change in the future.

I've used useRouter to route clicking the airbnb logo to the home page, and routing to the search page with the date picker info in the query params.

## Dependencies used

- icons from [heroicons](https://heroicons.com/)

- [tailwind-scrollbar-hide](https://www.npmjs.com/package/tailwind-scrollbar-hide) to hide the scrollbar in the 'Live Anywhere' section.

- As soon as something is typed into the search field, a date ranger picker pops up. This comes from [react-date-range](https://www.npmjs.com/package/react-date-range).

- [date-fns](https://www.npmjs.com/package/date-fns) for date formatting.

- [bar-of-progress](https://www.npmjs.com/package/@badrap/bar-of-progress) to indicate to the user that the page is loading after they've clicked the search bar.

- [mapbox](https://www.mapbox.com/) for the map.

- [react-map-gl](https://visgl.github.io/react-map-gl/) as a wrapper for mapbox.

- [geolib](https://www.npmjs.com/package/geolib) to center the map.
