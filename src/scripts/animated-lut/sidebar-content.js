const mediumUrl =
  'https://medium.com/@Scarysize/data-driven-raster-' +
  'layer-with-mapbox-gl-bdb3b747ae22';

const content = `
  <h1>Animating Tiles</h1>
  <p>
    The raster layer uses a look-up texture to colorise the originally grey
    "data" tiles. So basically the texture encodes a color value for each
    possible grey value, a more indepth explanation can be found in this
    <a href="${mediumUrl}">Medium post</a>.
  </p>
    <hr />
  <p>
    All we have to do to achieve this psychedelic effect is to shift the colors
    of the look-up table 60 frames per second. We use the HSL color space for
    this: It lets us easily shift the hue value, which ranges from 0 to 360. The
    hue is just incremented by 1 each frame and wraps around once it reaches its
    maximum value.
  </p>
`;

export default content;
