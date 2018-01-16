module.exports = class TestReporter {
  onTestStart(path) {
    console.log('--- onTestStart');
  }

  onTestResult(test, testResult, results) {
    console.log('--- onTestResult');
    testResult.testResults.forEach(result => {
      console.log(result.title, result.status);
    });
  }

  onRunStart(results, options) {
    console.log('--- onRunStart');
  }

  onRunComplete(contexts, results) {
    console.log('--- onRunComplete');
  }
};
