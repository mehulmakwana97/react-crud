var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path')

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
]

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: /*{
    app:*/ [__dirname + '/src']/*,
  }*/,
  output: {
    /*path: __dirname + '/public',
    filename: 'bundle.js'*/
    filename: 'bundle.js',
    path: path.join(__dirname, './public'),
    publicPath: '/public'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        //exclude: /node_modules/,
        include: path.join(__dirname, './src'),
        loader: "babel-loader",
        query: {
          presets: ["es2015", "stage-2", "react"]
        }
      },
      {
        test: '/\.scss$/',
        //include: './src/sass',
        //loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))/*ExtractTextPlugin.extract({
          /*fallbackLoader: "style-loader",
          loader: sassLoaders.join('!')
        })*//*,
        query: {
          syntax: 'sass',
          paths: [path.resolve(__dirname, './src')]
        }*/
        loaders: ['style-loader', 'css-loader', 'sass-loader']
        //loader: ExtractTextPlugin.extract('style-loader!css-loader!sass-loader')
      },
      {
        test: /(\.eot|\.woff2|\.woff|\.ttf|\.svg)/,
        loader: 'file-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.scss', '.jsx']
  }/*,

  plugins: [
    new ExtractTextPlugin({
      disable: false,
      filename: "./src/style.css",
      allChunks: true
    })
  ]*/
}