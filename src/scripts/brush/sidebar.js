const container = document.createElement('div');

container.classList.add('sidebar');
document.body.appendChild(container);

const mediumUrl =
  'https://medium.com/@Scarysize/data-driven-raster-' +
  'layer-with-mapbox-gl-bdb3b747ae22';

container.innerHTML = `
  <h1>Filtering Raster Data</h1>
  <p>
    Use the brush input at the bottom to filter the raster data rendered on
    the map.
  </p>
  <hr />
  <p>
    The raster layer uses a look-up texture to colorise the originally grey
    "data" tiles. So basically the texture encodes a color value for each
    possible grey value, a more indepth explanation can be found in this
    <a href="${mediumUrl}">Medium post</a>.
    <br />
    All the brush input does, is masking the look-up texture. Colors which are
    located outside of the location will be rendered transparent, whereas
    selected colors will be rendered as there given color value.
  </p>
`;

const toggleButton = document.createElement('button');
const icon = document.createElement('i');

icon.innerHTML = 'info_outline';

icon.classList.add('material-icons');
toggleButton.classList.add('toggle-button');

toggleButton.appendChild(icon);
document.body.appendChild(toggleButton);

let sidebarIsOpen = false;
toggleButton.addEventListener('click', () => {
  container.classList.toggle('sidebar--open');
  toggleButton.classList.toggle('toggle-button--toggled');

  if (sidebarIsOpen) {
    icon.innerHTML = 'info_outline';
  } else {
    icon.innerHTML = 'close';
  }

  sidebarIsOpen = !sidebarIsOpen;
});
