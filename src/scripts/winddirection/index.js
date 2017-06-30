import mapboxgl from 'mapbox-gl';
import createMap from '../lib/create-map';
import GridDataLoader from '../lib/grid/GridDataLoader.js';
import throttle from 'lodash.throttle';

createMap(init, mapboxgl);

/*
TODO:
  - add json style with custom sprite sheet
  - add custom sprite sheet (json & png, default & @2x)
  - get color-mapping from SBT example
*/

function convertBounds(mapboxBounds) {
  const sw = mapboxBounds.getSouthWest();
  const ne = mapboxBounds.getNorthEast();

  return {
    southwest: {lng: sw.lng, lat: sw.lat},
    northeast: {lng: ne.lng, lat: ne.lat}
  };
}

const bbox = {
  southwest: {
    latitude: 32.959999084472656,
    longitude: -14.000000953674316
  },
  northeast: {
    latitude: 68,
    longitude: 37.000003814697266
  }
};

const images = [
  {
    url:
      'https://storage.googleapis.com/storage.ubidev.net/meteogroup/dWU5OHd6Zmg4NzI5cmZjMDh6/symbols/U-region.png',
    weatherParameter: 'u'
  },
  {
    url:
      'https://storage.googleapis.com/storage.ubidev.net/meteogroup/dWU5OHd6Zmg4NzI5cmZjMDh6/symbols/V-region.png',
    weatherParameter: 'v'
  }
];

function init(map) {
  const loader = new GridDataLoader();

  map.addSource('circle-source', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: []
    }
  });
  map.addLayer({
    type: 'symbol',
    source: 'circle-source',
    id: 'circle-layer',
    layout: {
      'icon-image': 'rocket-15',
      'icon-rotate': {
        type: 'identity',
        property: 'angle'
      },
      'icon-allow-overlap': true
    }
  });

  const query = throttle(() => {
    const options = {
      bbox,
      bounds: convertBounds(map.getBounds()),
      samplingFactor: 3,
      zoom: Math.floor(map.getZoom())
    };
    loader.queryData(images, options).then(geojson => {
      for (let i = 0; i < geojson.features.length; i++) {
        const feature = geojson.features[i];
        const {u, v} = feature.properties.weatherParameters;
        const length = Math.floor(Math.sqrt(Math.pow(u, 2) + Math.pow(v, 2)));

        let angle = Math.atan2(0, 1) - Math.atan2(v / length, u / length);
        if (angle < 0) {
          angle += 2 * Math.PI;
        }

        feature.properties.color = `hsla(${360 -
          length / 222 * 360}, 100%, 50%, 1)`;
        feature.properties.angle = Math.floor(angle * 180 / Math.PI);
      }

      map.getSource('circle-source').setData(geojson);
    });
  }, 100);

  map.on('move', query);
}
