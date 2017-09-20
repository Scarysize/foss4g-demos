const mediumUrl =
  'https://medium.com/@Scarysize/data-driven-raster-' +
  'layer-with-mapbox-gl-bdb3b747ae22';

const content = `
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

export default content;
