const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AssetsPlugin = require('html-webpack-include-assets-plugin');

const babelPresets = [
  'flow',
  [
    'env',
    {
      targets: {
        browsers: ['last 1 version']
      }
    }
  ]
];

module.exports = {
  entry: {
    minimap: './src/minimap.js',
    brush: './src/brush.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  devtool: 'source-map',
  devServer: {port: 3000},
  externals: {
    'mapbox-gl': 'mapboxgl'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: babelPresets,
          plugins: ['transform-object-rest-spread']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['minimap'],
      filename: 'minimap.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['brush'],
      filename: 'brush.html'
    }),
    new AssetsPlugin({
      append: false,
      assets: ['mapbox-gl.js', 'mapbox-gl.css', 'index.css']
    })
  ]
};
