import createMap from '../lib/create-map';
import GridDataLoader from '../lib/grid/GridDataLoader.js';
import throttle from 'lodash.throttle';

createMap(init);

function convertBounds(mapboxBounds) {
  const sw = mapboxBounds.getSouthWest();
  const ne = mapboxBounds.getNorthEast();

  return {
    southwest: {lng: sw.lng, lat: sw.lat},
    northeast: {lng: ne.lng, lat: ne.lat}
  };
}

const bbox = {
  northeast: {
    latitude: 90,
    longitude: 180
  },
  southwest: {
    latitude: -90,
    longitude: -180
  }
};

const images = [
  {url: 'static/u-component.png', weatherParameter: 'u'},
  {url: 'static/v-component.png', weatherParameter: 'v'}
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
      samplingFactor: 15,
      zoom: Math.floor(map.getZoom())
    };
    loader.queryData(images, options).then(geojson => {
      for (let i = 0; i < geojson.features.length; i++) {
        const feature = geojson.features[i];
        const {u, v} = feature.properties.weatherParameters;
        const length = Math.floor(Math.sqrt(Math.pow(u, 2) + Math.pow(v, 2)));
        const scaled = length / 222 * 360;

        feature.properties.color = `hsla(${360 - scaled}, 100%, 50%, 1)`;
      }

      map.getSource('circle-source').setData(geojson);
    });
  }, 100);

  map.on('move', query);
}
