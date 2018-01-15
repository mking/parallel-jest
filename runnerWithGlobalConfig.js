const runner = require('jest-jasmine2');

module.exports = async function(
  globalConfig,
  config,
  environment,
  runtime,
  testPath
) {
  environment.global.globalConfig = globalConfig;
  return await runner(globalConfig, config, environment, runtime, testPath);
};
