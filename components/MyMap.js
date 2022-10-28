import Map from 'react-map-gl';
import { useState } from 'react';
import { getCenter } from 'geolib';

function MyMap({ searchResults }) {
  // Transform search results object into lat/long object
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // The latitude and longitude of the center of the location results
  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <Map
      mapStyle="mapbox://styles/pav0107/cl9slx4sp001915o4fnrcuieo"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewport)}
    />
  );
}

export default MyMap;
