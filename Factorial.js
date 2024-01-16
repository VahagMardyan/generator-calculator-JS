const factorial = (n, memo = {}) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    if (n in memo) {
        return memo[n];
    }
    memo[n] = n * factorial(n - 1, memo);
    return memo[n];
}

export default factorial;