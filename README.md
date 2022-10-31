## Airbnb clone

This is an airbnb clone, built with Next.js, Tailwind CSS (which I'm a huge fan of).

The site is fully responsive as I've used Tailwind breakpoints.

I've used the Next.js Image tag

I've used a variety of icons from [heroicons](https://heroicons.com/)

I used static site generation for the small cards inside the 'Explore Nearby' section.

I used Flexbox and Grid for page layout.

I used [tailwind-scrollbar-hide](https://www.npmjs.com/package/tailwind-scrollbar-hide) to hide the scrollbar in the 'Live Anywhere' section.

As soon as something is typed into the search field, a date ranger picker pops up. This comes from [react-date-range](https://www.npmjs.com/package/react-date-range).

The data for search page comes in through server-side rendering. It's coming in from a dummy endpoint/ mock API so the results are always the same: something I'll look to change in the future.

I've used useRouter to route clicking the airbnb logo to the home page, and routing to the search page with the date picker info in the query params.

I used [date-fns](https://www.npmjs.com/package/date-fns) for date formatting.

I used [bar-of-progress](https://www.npmjs.com/package/@badrap/bar-of-progress) to indicate to the user that the page is loading after they've clicked the search bar.

I've deployed the project on Vercel and it can be viewed [here](https://air-pav-clone.vercel.app/)
