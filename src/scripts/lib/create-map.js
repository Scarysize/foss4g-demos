export default function(onLoad, mapboxgl = window.mapboxgl, options) {
  const container = document.createElement('div');
  container.classList.add('map', 'container');

  document.body.appendChild(container);

  mapboxgl.accessToken =
    'pk.eyJ1Ijoic2NhcnlzaXplIiwiYSI6ImNpcjR2ZWs4ODAwNDZoc25xMmRzM2JlcnQifQ.XmRVjMqDm9jUWw3eMYrrUw';

  const map = new mapboxgl.Map({
    container,
    center: [0, 0],
    zoom: 1,
    style: 'mapbox://styles/scarysize/cj318x12u00002qnqcawqy98r',
    ...options
  });

  map.on('load', () => onLoad(map));
}
