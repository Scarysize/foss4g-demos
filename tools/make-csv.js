const fs = require('fs');

function randomCoord() {
  return [Math.random() * 360 - 180, 90 - Math.random() * 180];
}

const WIDTH = 1441;
const HEIGHT = 721;

const lines = [];

for (let y = 0; y < HEIGHT; y++) {
  for (let x = 0; x < WIDTH; x++) {
    const [lng, lat] = randomCoord();
    const value = Math.floor(Math.random() * 100);
    const line = `${lng},${lat},${value}`;
    lines.push(line);
  }
}

fs.writeFileSync('tools/output/out.csv', lines.join('\n'));
