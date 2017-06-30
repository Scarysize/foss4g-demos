import '../../styles/index.styl';

import createMap from '../lib/create-map';
import * as colorTexture from './color-texture';
import valueMap from './value-map';

const VALUE_RANGE = [0, 100];
const TILE_URL =
  // eslint-disable-next-line
  'https://storage.googleapis.com/storage.ubidev.net/meteogroup/dWU5OHd6Zmg4NzI5cmZjMDh6/tiles/temperature-data/18/{z}/{x}/{y}.png';

function createValueMap(min, max) {
  const map = [...valueMap];

  for (let i = 0; i < 256; i++) {
    if (i <= min || i >= max) {
      map[i] = 0;
    }
  }
  return map;
}

function colorFunction(value, valueRange = VALUE_RANGE, step = 0) {
  if (value === 0) return 'transparent';
  const scaled = Math.round((value + 50) / valueRange[1] * 360);
  const finalValue = (scaled + step) % 360;
  return `hsla(${finalValue}, 100%, 50%, 1)`;
}

createMap(map => {
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
      'raster-lookup-texture': colorTexture.create(
        createValueMap(...VALUE_RANGE),
        colorFunction
      )
    }
  });

  let step = 0;
  const layer = map.getLayer('layer');
  const animate = () => {
    requestAnimationFrame(animate);
    step++;
    const cFunction = value => colorFunction(value, VALUE_RANGE, step);
    const vMap = createValueMap(...VALUE_RANGE);
    const texture = colorTexture.create(vMap, cFunction);
    layer.setGradientTexture(texture);
    map.resize();
  };

  requestAnimationFrame(animate);
});
