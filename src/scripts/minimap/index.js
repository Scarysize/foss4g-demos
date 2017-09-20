import '../../styles/index.styl';

import throttle from 'lodash.throttle';

import createMap from '../lib/create-map';
import GridDataLoader from '../lib/grid/GridDataLoader.js';
import Minimap from './minimap';
import sidebar from '../lib/sidebar';

import content from './sidebar-content';

sidebar(content);

const bbox = {
  northeast: {latitude: 52.05249047600099, longitude: 86.8359375},
  southwest: {latitude: -52.908902047770255, longitude: -39.0234375}
};
const url = 'static/heart.png';

createMap(init);

function convertBounds(mapboxBounds) {
  const sw = mapboxBounds.getSouthWest();
  const ne = mapboxBounds.getNorthEast();

  return {
    southwest: {lng: sw.lng, lat: sw.lat},
    northeast: {lng: ne.lng, lat: ne.lat}
  };
}

function init(map) {
  // eslint-disable-next-line
  const minimap = new Minimap(map, url, bbox);
  const loader = new GridDataLoader();

  map.addSource('circle-source', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: []
    }
  });
  map.addLayer({
    type: 'circle',
    source: 'circle-source',
    id: 'circle-layer',
    paint: {
      'circle-color': {
        type: 'identity',
        property: 'color'
      }
    }
  });

  const query = throttle(() => {
    const options = {
      bbox,
      bounds: convertBounds(map.getBounds()),
      samplingFactor: 8,
      zoom: Math.floor(map.getZoom())
    };

    loader
      .queryData([{url, weatherParameter: 'color'}], options)
      .then(geojson => {
        for (let i = 0; i < geojson.features.length; i++) {
          const feature = geojson.features[i];
          const {color} = feature.properties.weatherParameters;

          if (color > 0) {
            feature.properties.color = '#42f448';
          } else {
            feature.properties.color = '#000000';
          }
        }

        map.getSource('circle-source').setData(geojson);
      });
  }, 100);

  map.on('move', query);
  query();
}
