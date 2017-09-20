import '../../styles/index.styl';

import createMap from '../lib/create-map';
import * as colorTexture from '../lib/color-texture';
import sidebar from '../lib/sidebar';

import valueMap from './value-map.json';
import content from './sidebar-content';

sidebar(content);

const VALUE_RANGE = [0, 100];
const TILE_URL =
  'https://storage.googleapis.com/storage.ubidev.net/meteogroup/' +
  'dWU5OHd6Zmg4NzI5cmZjMDh6/tiles/temperature-data/18/{z}/{x}/{y}.png';

function createValueMap(min, max) {
  const map = [...valueMap];

  for (let i = 0; i < 256; i++) {
    if (i <= min || i >= max) {
      map[i] = 0;
    }
  }
  return map;
}

function colorFunction(value, step = 0) {
  const scaled = Math.round((value + 50) / VALUE_RANGE[1] * 360);
  const finalValue = (scaled + step) % 360;
  return `hsla(${finalValue}, 100%, 50%, 0.5)`;
}

createMap(
  map => {
    const vMap = createValueMap(...VALUE_RANGE);
    map.addSource('raster-source', {
      type: 'data-driven-raster',
      tiles: [TILE_URL],
      scheme: 'tms',
      tileSize: 256,
      minzoom: 0,
      maxzoom: 4
    });
    map.addLayer({
      id: 'layer',
      source: 'raster-source',
      type: 'data-driven-raster',
      paint: {
        'raster-lookup-texture': colorTexture.create(vMap, colorFunction)
      }
    });

    let step = 0;
    const layer = map.getLayer('layer');
    const animate = () => {
      requestAnimationFrame(animate);
      step++;

      const texture = colorTexture.create(vMap, value =>
        colorFunction(value, step)
      );
      layer.setGradientTexture(texture);
      map.resize();
    };

    animate();
  },
  window.mapboxgl,
  {zoom: 2}
);
