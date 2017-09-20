const content = `
<h1>Grid Data Pt. 1</h1>
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
<hr />
<p>
  Check out <a href="winddirection.html">Part 2</a> to see a actual use case.
</p>
`;

export default content;
