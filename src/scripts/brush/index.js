import '../../styles/index.styl';

import createMap from '../lib/create-map';
import colorSelector from './color-selector';
import * as colorTexture from './color-texture';
import TempDisplay from './temp-display';
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

function colorFunction(value, valueRange = VALUE_RANGE) {
  if (value === 0) return 'transparent';
  const scaled = Math.round((value + 50) / valueRange[1] * 360);
  return `hsla(${360 - scaled}, 100%, 50%, 1)`;
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
  // const tempDisplay = new TempDisplay();

  colorSelector(
    (min, max) => {
      const layer = map.getLayer('layer');
      if (!layer) return;

      const filterMap = createValueMap(min, max);

      layer.setGradientTexture(colorTexture.create(filterMap, colorFunction));
      map.resize();
      // tempDisplay.update(valueMap[min], valueMap[max - 1]);
    },
    VALUE_RANGE,
    colorFunction
  );
});
