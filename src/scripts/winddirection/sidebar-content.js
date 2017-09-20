const content = `
<h1>Grid Data Pt. 2</h1>
<p>
  The concept of how the grid data is transmitted and the point features are
  generated is explained in <a href="minimap.html">Part 1</a> of the demo.
</p>
<p>
  This time the data source isn't a simple binary image, but a grey scale one.
  Actually it's two grey scale images: We encode a two-dimensional vector (u, v)
  as grey values. This vector describes the direction the wind blows at a given
  point (x, y). So each image encodes one component of this vector.
</p>
<p>
  Now every time the map is moved, both images a sampled and point features
  generated. Based on the vector a rotation is calculated, the vector's length is
  used to select an icon to render and the color to display it in.
</p>
<hr />
<p>
  Zoom in to see some fancy wind patterns. Try the Caribbean or Mediterranean
  sea.
</p>
`;

export default content;
