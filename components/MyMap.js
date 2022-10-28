import Map from 'react-map-gl';
import { useState } from 'react';

function MyMap() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });
  return (
    <Map
      mapStyle="mapbox://styles/pav0107/cl9slx4sp001915o4fnrcuieo"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
    />
  );
}

export default MyMap;
