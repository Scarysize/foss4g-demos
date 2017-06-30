const fs = require('fs');

function randomCoord() {
  return [Math.random() * 360 - 180, 90 - Math.random() * 180];
}

const WIDTH = 1441;
const HEIGHT = 721;

const features = [];

for (let y = 0; y < HEIGHT; y++) {
  for (let x = 0; x < WIDTH; x++) {
    const feature = {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: randomCoord()
      },
      properties: {
        value: Math.floor(Math.random() * 100)
      }
    };
    features.push(feature);
  }
}

const geoJson = {
  type: 'FeatureCollection',
  features
};

fs.writeFileSync('tools/output/out.json', JSON.stringify(geoJson));
