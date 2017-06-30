/**
 * Helper to create the texture canvas context.
 * @param  {number} [width=256]  The width of the canvas
 * @param  {number} [height=1]  The height of the canvas
 * @return {CanvasRenderingContext2D}  The canvas 2d context
 */
function createTextureContext(width = 256, height = 1) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  canvas.width = width;
  canvas.height = height;

  return context;
}

/**
 * Creates a color mapping texture for a given color function.
 * @param  {Array} valueMap An array with a maximum of 256 value entries
 * @param  {Function} colorFunction The color mapping function.
 *   This function should return a valid color string for every passed value.
 * @return {ImageData} An image object
 */
export function create(valueMap, colorFunction = () => 'transparent') {
  const width = 256; // number of possible pixel color values
  const height = 1;
  const context = createTextureContext();

  for (let i = 0; i < width; i++) {
    const value = valueMap[i];
    const valueIsValid = value !== undefined && value !== null; // eslint-disable-line no-undefined, max-len
    context.fillStyle = valueIsValid ? colorFunction(value) : 'transparent';
    context.fillRect(i, 0, 1, height);
  }

  return context.getImageData(0, 0, width, height);
}

/**
 * Updates the opacity of the color mapping texture.
 * @param  {ImageData} texture  The texture to update
 * @param  {number} opacity  The new opacity value
 * @return {ImageData}  The updated texture
 */
export function updateOpacity(texture, opacity) {
  const width = texture.width;
  const height = texture.height;
  const data = texture.data;
  const context = createTextureContext();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // index into the color array
      const index = (x + y * width) * 4;

      // look-up colors
      const r = data[index];
      const g = data[index + 1];
      const b = data[index + 2];
      const a = data[index + 3];

      // recalculate alpha value
      const newAlpha = a / 255 * opacity;

      // redraw with updated alpha value
      context.fillStyle = `rgba(${r}, ${g}, ${b}, ${newAlpha})`;
      context.fillRect(x, y, 1, 1);
    }
  }

  return context.getImageData(0, 0, width, height);
}
