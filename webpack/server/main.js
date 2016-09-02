import webpack from 'webpack';
import webpackDev from 'webpack-dev-middleware';
import webpackHot from 'webpack-hot-middleware';
import makeWebpackConfig from '../createConfig';
import express from 'express';

const app = express();

const webpackConfig = makeWebpackConfig({ isDevelopment: true });
const compiler = webpack(webpackConfig);

app.use(webpackDev(compiler, {
  headers: { 'Access-Control-Allow-Origin': '*' },
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.use(webpackHot(compiler));

app.listen(webpackConfig.hotPort);

console.log(`Boundles url: ${webpackConfig.output.publicPath}`)
