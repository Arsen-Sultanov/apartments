const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');

const PostCSSLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        [
          'autoprefixer',
          {
            Browserslist: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
          }
        ]
      ]
    }
  }
};


const client = (env, argv) => {
  const styleLoader = MiniCssExtractPlugin.loader;
  return {
    name: 'client',
    entry: './client/src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build/client')
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
      hot: true,
      proxy: {
        '/api': {
          target: 'http://localhost:8000'
        }
      }
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './client/public/index.html',
        filename: './index.html'
      }),
      new MiniCssExtractPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(woff|woff2|ttf|eot|jpe?g|png|gif|svg|mp4$|ogv$|webm$)$/i,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'src/'
          }
        },
        {
          test: /\.css$/i,
          use: [
            styleLoader,
            'css-loader',
            'scoped-css-loader',
            PostCSSLoader
          ]
        }
      ]
    }
  };
};

const server = (env, argv) => {
  return {
    name: 'server',
    entry: './server/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build/server')
    },
    target: 'node',
    externals: [nodeExternals()],
    node: {
      __dirname: false,
      __filename: false
    },
    plugins: [
      new NodemonPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    }
  };
};

module.exports = [client, server];
