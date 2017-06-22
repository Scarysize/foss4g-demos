/**
 * Generates the raw image data from a given Image element.
 * @param  {Image} image  The image
 * @return {ImageData}  -
 */
function getImageData(image) {
  const canvas = document.createElement('canvas');
  canvas.height = image.height;
  canvas.width = image.width;

  const context = canvas.getContext('2d');

  context.drawImage(image, 0, 0);

  return context.getImageData(0, 0, image.width, image.height);
}

/**
 * Converts an Image to ImageData.
 * @param  {Image} image  The image
 * @return {ImageData}  The converted image
 */
export function imageToBitmap(image) {
  return Promise.resolve(getImageData(image));
}

/**
 * Retrieves the single grey scale values from image data.
 * @param  {ImageData} imageData  -
 * @return {Uint8Array}  Containing 1 grey value per pixel
 */
export function imageDataToPixels(imageData) {
  const {data} = imageData;
  const {height, width} = imageData;
  const pixels = new Uint8Array(height * width);

  for (let i = 0, len = data.length; i < len; i += 4) {
    pixels[i / 4] = data[i];
  }

  return pixels;
}
