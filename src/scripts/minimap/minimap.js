const MAX_LNG = 360;
const MAX_LAT = 180;
const MAX_X = 500;
const MAX_Y = 500;

function toRatio(lngLat) {
  const xRatio = (lngLat.lng + 180) / MAX_LNG;
  const yRatio = (90 - lngLat.lat) / MAX_LAT;

  return [
    Math.min(Math.max(xRatio, 0), 100),
    Math.min(Math.max(yRatio, 0), 100)
  ];
}

const cache = {};

export default class Minimap {
  constructor(map, imageUrl, imageBbox) {
    this.map = map;
    this.imageUrl = imageUrl;
    this.imageBbox = imageBbox;

    this.setupDom();
    this.map.on('move', () => {
      this.clear();
      this.calculateImage();
      this.calculateViewport();
    });

    this.calculateImage();
    this.calculateViewport();
  }

  setupDom() {
    this.container = document.createElement('div');
    this.canvas = document.createElement('canvas');
    this.canvas.width = MAX_X;
    this.canvas.height = MAX_Y;

    this.container.classList.add('container');
    this.container.appendChild(this.canvas);
    document.body.appendChild(this.container);
  }

  calculateImage() {
    const url = this.imageUrl;
    const bbox = this.imageBbox;
    const nw = {lng: bbox.southwest.longitude, lat: bbox.northeast.latitude};
    const se = {lng: bbox.northeast.longitude, lat: bbox.southwest.latitude};
    const [lngOrigin, latOrigin] = toRatio(nw);
    const [lngExpand, latExpand] = toRatio(se);
    const width = (lngExpand - lngOrigin) * MAX_X;
    const height = (latExpand - latOrigin) * MAX_Y;

    const draw = image =>
      this.drawImage(
        image,
        MAX_X * lngOrigin,
        MAX_Y * latOrigin,
        width,
        height
      );

    if (cache[url]) {
      draw(cache[url]);
      return;
    }

    const image = new Image(url);
    image.addEventListener('load', () => {
      cache[url] = image;
      draw(image);
    });

    image.src = url;
  }

  calculateViewport() {
    const bounds = this.map.getBounds();
    const northWest = bounds.getNorthWest();
    const southEast = bounds.getSouthEast();
    const [lngOrigin, latOrigin] = toRatio(northWest);
    const [lngExpand, latExpand] = toRatio(southEast);
    const width = (lngExpand - lngOrigin) * MAX_X;
    const height = (latExpand - latOrigin) * MAX_Y;

    this.drawOutline(MAX_X * lngOrigin, MAX_Y * latOrigin, width, height);
  }

  clear() {
    this.canvas.getContext('2d').clearRect(0, 0, MAX_X, MAX_Y);
  }

  drawImage(image, x, y, width, height) {
    const context = this.canvas.getContext('2d');

    context.drawImage(image, x, y, width, height);
  }

  drawOutline(x, y, width, height) {
    const context = this.canvas.getContext('2d');

    context.strokeStyle = 'rgba(255, 0, 0, 0.7)';
    context.lineWidth = 7;
    context.strokeRect(x, y, width, height);
  }
}
