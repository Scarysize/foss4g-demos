const content = `
<h1>Grid Data</h1>
<p>
  This example demonstrates how point features aligned on a uniform grid can be
  efficiently transmitted using a PNG image. Each time the map is moved, the
  image in the corner (the black box with the <3) will be sampled based on the
  zoom level of the map. From each sample a point feature is generated, the
  sample's pixel color can be used to style the feature rendered on the map: For
  white pixels in the image we give the circles a green color.
</p>
<p>
  The red box represents the current viewport of the map in regards to the
  image. It kind of works like a minimap in a video game.
</p>
`;

export default content;
