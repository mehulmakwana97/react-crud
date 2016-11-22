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
    path: path.join(__dirname, './templates'),
    publicPath: '/templates'
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
      { test: /\.css$/, loader: "style-loader!css-loader?importLoaders=1" },
      {
        test: /\.(eot|woff2|woff|ttf|svg)$/,
        loader: 'file-loader?name=[name].[ext]'
      },{
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /node_modules/,
        loader:'url-loader?name=images/[name].[ext]'
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.css', '.jsx']
  }/*,

  plugins: [
    new ExtractTextPlugin({
      disable: false,
      filename: "./src/style.css",
      allChunks: true
    })
  ]*/
}