const subfactorial = (n, memo = {}) => {
    if (n === 0) {
        return 1;
    }
    if (n === 1) {
        return 0;
    }
    if (memo[n]) {
        return memo[n];
    }
    memo[n] = (n - 1) * (subfactorial(n - 1, memo) + subfactorial(n - 2, memo));
    return memo[n];
}

export default subfactorial;