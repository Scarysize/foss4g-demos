import '../../styles/index.styl';

import createMap from '../lib/create-map';
import colorKey from './color-key';
import colorSelector from './color-selector';
import * as colorTexture from './color-texture';
import valueMap from './value-map';
import valueMapRadarEu from '../../static/value-map-radar-eu.json';

document.body.classList.add('brush', 'presets');

const validCategories = valueMapRadarEu.filter(item => item.category);
const categoryLUT = validCategories.reduce((grouping, item) => {
  return {
    ...grouping,
    [item.grayValue]: item.category
  };
}, {});
const categories = Array.from(new Set(Object.values(categoryLUT)));
const colorMap = window
  .palette('tol-rainbow', categories.length)
  .reduce((map, color, index) => {
    return {
      ...map,
      [categories[index]]: `#${color}`
    };
  }, {});

console.log(categoryLUT);

const VALUE_RANGE = [0, 256];
const TILE_URL =
  // eslint-disable-next-line
  'https://s3-eu-west-1.amazonaws.com/svc.mg.interactivemap-radardata-processing-prod.s3.mg/processed/fcst-radar.mg.eu.sh.s3.mg/4km/precipitationtype/20170630T100000Z/20170630T110000Z/20170630T101936Z/tiles/{z}/{x}/{y}.png';

function createValueMap(min, max) {
  const map = [...valueMap];

  for (let i = 0; i < 256; i++) {
    if (i <= min || i >= max) {
      map[i] = 0;
    }
  }
  return map;
}

function colorFunction(value) {
  const category = categoryLUT[value];

  if (!category) {
    // return `rgba(${value}, ${value}, ${value}, 0.1)`;
    return 'transparent';
  }

  return colorMap[category];
}

createMap(map => {
  map.addSource('raster-source', {
    type: 'data-driven-raster',
    tiles: [TILE_URL],
    tileSize: 512,
    minzoom: 0,
    maxzoom: 6
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

  colorSelector(
    (min, max) => {
      // map.resize();
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

  colorKey(colorMap);
});
