const assert = require('assert');

module.exports = function assertEquals(actualValue, expectedValue) {
	try {
		assert.deepEqual(actualValue, expectedValue);
		console.log(
			"\x1b[32m",
			`  \u2713 TEST PASSED!: expected [${expectedValue}] and got [${actualValue}]`
		);
	} catch (e) {
		console.log(
			"\x1b[31m",
			`  \u00D7 TEST FAILED: expected "${e.expected}" but got "${e.actual}" instead`
		);
	};
}
