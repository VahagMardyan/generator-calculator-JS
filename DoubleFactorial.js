const doubleFactorial = (n, memo = {}) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    if (memo[n]) {
        return memo[n];
    }
    memo[n] = n * doubleFactorial(n - 2, memo);
    console.log(memo);
    return memo[n];
}

export default doubleFactorial;