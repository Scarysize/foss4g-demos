export default function(onLoad, mapboxgl = window.mapboxgl, options) {
  const container = document.createElement('div');
  container.classList.add('map', 'container');

  document.body.appendChild(container);

  mapboxgl.accessToken =
    'pk.eyJ1Ijoic2NhcnlzaXplIiwiYSI6ImNrczA0cjhkNjA2bmQyd3BlYWl3djNzamQifQ.bRMUl7cIVMfad2UNjGIKoQ';

  const map = new mapboxgl.Map({
    container,
    center: [0, 0],
    zoom: 1,
    style: 'mapbox://styles/mapbox/dark-v9',
    ...options
  });

  map.on('load', () => onLoad(map));
}
