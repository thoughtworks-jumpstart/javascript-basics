module.exports = function test(actualValue, expectedValue) {
  if (Array.isArray(expectedValue)) {
    if (checkArrayEquality(expectedValue, actualValue) === false) {
      console.log(
        "\x1b[31m",
        `  \u00D7 TEST FAILED: expected [${expectedValue}] but got [${actualValue}] instead`
      );
    } else if (checkArrayEquality(expectedValue, actualValue) === true) {
      console.log(
        "\x1b[32m",
        `  \u2713 TEST PASSED!: expected [${expectedValue}] and got [${actualValue}]`
      );
    }
  } else {
    if (expectedValue !== actualValue) {
      console.log(
        "\x1b[31m",
        `  \u00D7 TEST FAILED: expected ${expectedValue} but got ${actualValue} instead`
      );
    } else if (expectedValue === actualValue) {
      console.log(
        "\x1b[32m",
        `  \u2713 TEST PASSED!: expected ${expectedValue} and got ${actualValue}`
      );
    }
  }
};

function checkArrayEquality(arr1, arr2) {
  var isEqual = false;
  if (arr1.length === arr2.length) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } else {
        isEqual = true;
      }
    }
  } else {
    return false;
  }
  return isEqual;
}
