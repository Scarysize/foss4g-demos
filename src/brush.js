import createMap from './util/create-map';
import colorSelector from './lib/color-selector';
import * as colorTexture from './lib/raster/color-texture';
import valueMap from './lib/raster/value-map';

class TempDisplay {
  constructor() {
    this.element = document.createElement('div');

    this.element.classList.add('temp-display');
    document.querySelector('.container').appendChild(this.element);
  }

  update(min, max) {
    this.element.textContent = `${min}°C - ${max}°C`;
  }
}

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
  if (value === 0) return 'transparent';

  const scaled = Math.round((value + 50) / 100 * 360);

  return `hsla(${360 - scaled}, 100%, 50%, 1)`;
}

createMap(map => {
  const texture = colorTexture.create(createValueMap(0, 255), colorFunction);
  map.addSource('raster-source', {
    type: 'data-driven-raster',
    tiles: [
      'https://storage.googleapis.com/storage.ubidev.net/meteogroup/dWU5OHd6Zmg4NzI5cmZjMDh6/tiles/temperature-data/18/{z}/{x}/{y}.png'
    ],
    scheme: 'tms',
    tileSize: 256,
    minzoom: 0,
    maxzoom: 4
  });
  map.addLayer({
    id: 'layer',
    source: 'raster-source',
    type: 'data-driven-raster',
    paint: {'raster-lookup-texture': texture}
  });
  const tempDisplay = new TempDisplay();

  colorSelector((min, max) => {
    console.log(valueMap.length);
    console.log(valueMap[min], valueMap[max]);
    const filterMap = createValueMap(min, max);
    const texture = colorTexture.create(filterMap, colorFunction);
    const layer = map.getLayer('layer');
    if (!layer) return;

    layer.setGradientTexture(texture);
    map.resize();
    tempDisplay.update(valueMap[min], valueMap[max]);
  });
});
