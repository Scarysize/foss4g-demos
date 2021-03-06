import '../../styles/index.styl';

import createMap from '../lib/create-map';
import GridDataLoader from '../lib/grid/GridDataLoader.js';
import throttle from 'lodash.throttle';
import style from './basemap-light.json';
import sidebar from '../lib/sidebar';

import content from './sidebar-content';

sidebar(content);

createMap(init, window.mapboxgl, {
  style,
  center: [3.5708681554528994, 54.86588820438166],
  zoom: 5
});

function convertBounds(mapboxBounds) {
  const sw = mapboxBounds.getSouthWest();
  const ne = mapboxBounds.getNorthEast();

  return {
    southwest: {lng: sw.lng, lat: sw.lat},
    northeast: {lng: ne.lng, lat: ne.lat}
  };
}

function mapValue(value) {
  return value / 256 * 128 - 64;
}

function getIcon(u, v, feature) {
  const speed = Math.sqrt(Math.pow(u, 2) + Math.pow(v, 2));
  let iconImage = 'wind-arrow-calm-00';
  if (speed >= 2.5) {
    let arrowNumber = `${Math.round(speed / 5.0)}`;
    if (arrowNumber.length < 2) {
      arrowNumber = `0${arrowNumber}`;
    }
    if (feature.geometry.coordinates[1] > 0) {
      iconImage = `wind-arrow-nh-${arrowNumber}`;
    } else {
      iconImage = `wind-arrow-sh-${arrowNumber}`;
    }
  }

  return iconImage;
}

function getBearing(u, v) {
  let angle = Math.atan2(u, v);
  if (angle < 0) {
    angle += 2 * Math.PI;
  }
  return angle * 180 / Math.PI;
}

const bbox = {
  southwest: {
    latitude: -90,
    longitude: -180
  },
  northeast: {
    latitude: 90,
    longitude: 180
  }
};

const images = [
  {
    url: 'static/u-component.png',
    weatherParameter: 'u'
  },
  {
    url: 'static/v-component.png',
    weatherParameter: 'v'
  }
];

function init(map) {
  const loader = new GridDataLoader();

  map.addSource('source', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: []
    }
  });
  map.addLayer({
    type: 'symbol',
    source: 'source',
    id: 'arrow-layer',
    layout: {
      'icon-image': '{image}',
      'icon-rotate': {
        property: 'angle',
        type: 'identity'
      },
      'icon-size': 0.8
    },
    paint: {
      'icon-color': {
        property: 'color',
        type: 'identity'
      }
    }
  });

  const query = throttle(() => {
    const options = {
      bbox,
      bounds: convertBounds(map.getBounds()),
      samplingFactor: 6,
      zoom: Math.floor(map.getZoom())
    };

    loader.queryData(images, options).then(geojson => {
      for (let i = 0; i < geojson.features.length; i++) {
        const feature = geojson.features[i];
        let {u, v} = feature.properties.weatherParameters;
        u = mapValue(u);
        v = mapValue(v);

        const speed = Math.sqrt(Math.pow(u, 2) + Math.pow(v, 2));

        feature.properties.angle = getBearing(u, v);
        feature.properties.image = getIcon(u, v, feature);
        feature.properties.color = `hsla(${speed / 30 * 360}, 100%, 50%, 1)`;
      }

      map.getSource('source').setData(geojson);
    });
  }, 100);

  map.on('move', query);

  query();
}
