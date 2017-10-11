/* global define */

    /**
     * @description Calculate any number in the Fibonacci sequence.
     * @param {Number} n The index of the sequence to calculate; zero-based.
     * @returns {Number} the nth element of the Fibonacci sequence.
     */
    // TODO: return definition of `fibonacci` function here

function fibonacci(number) {
	if (number<0) {
		return 0;
	 }
	if (number === 0 || number === 1) {
		return 1;
	}
	return fibonacci(number-1) + fibonacci(number-2);
}

module.exports = fibonacci;