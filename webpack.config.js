const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    'animated-lut': './src/scripts/animated-lut/index.js',
    brush: './src/scripts/brush/index.js',
    minimap: './src/scripts/minimap/index.js',
    winddirection: './src/scripts/winddirection/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
    contentBase: './build',
    port: 8000,
    disableHostCheck: true
  },
  devtool: isProduction ? false : 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [['env', {targets: {browsers: ['last 2 versions']}}]],
          plugins: ['transform-object-rest-spread']
        }
      },
      {
        test: /\.styl$/i,
        exclude: /node_modules/,
        // always extract the css into a file
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: isProduction ? [require('autoprefixer')] : null,
                sourceMap: !isProduction
              }
            },
            'stylus-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: 'src/templates/index.html',
      chunks: []
    }),
    new HtmlPlugin({
      filename: 'brush.html',
      template: 'src/templates/template.html',
      chunks: ['brush'],
      title: 'Fun with mapbox-gl - Filtering Raster Data'
    }),
    new HtmlPlugin({
      filename: 'minimap.html',
      template: 'src/templates/template.html',
      chunks: ['minimap'],
      title: 'Fun with mapbox-gl - Grid Data Pt. 1'
    }),
    new HtmlPlugin({
      filename: 'animated-lut.html',
      template: 'src/templates/template.html',
      chunks: ['animated-lut'],
      title: 'Fun with mapbox-gl - Animating Tiles'
    }),
    new HtmlPlugin({
      filename: 'winddirection.html',
      template: 'src/templates/template.html',
      chunks: ['winddirection'],
      title: 'Fun with mapbox-gl - Grid Data Pt. 2'
    }),
    new ExtractTextPlugin({
      filename: 'styles/main.css'
    })
  ]
};
