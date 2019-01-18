import express from 'express';
import path from 'path';
import opn from 'opn';
import webpack from 'webpack';
import config from '../webpack.config.dev.js';
import middleware from 'webpack-dev-middleware';

/* eslint-disable no-console */
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(middleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.get('/users', (req, res) => {
  res.json([
    {"id": 1, "firstName": "Dan", "lastName": "Desotto", "email": "dandesotto@yahoo.com"},
    {"id": 2, "firstName": "Nate", "lastName": "Johnson", "email": "rnj@gmail.com"},
    {"id": 3, "firstName": "Creed", "lastName": "Johnson", "email": "creeddj@gmail.com"}
  ])
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    opn('http://localhost:' + port);
  }
});
