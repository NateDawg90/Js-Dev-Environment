import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';
/* eslint-disable no-console */

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Gnerating minified bundle for production. This could take a few seconds...'));

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }
  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map(w => console.log(chalk.yellow(w)));
  }

  console.log(`Webpack stats: ${stats}`);

  console.log(chalk.green('Your app has been built for production and written to /dist!'));

  return 0;
});
