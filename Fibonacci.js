const Fibonacci = (n, memo = {}) => {
    if (n <= 2) {
        return 1;
    }
    if (memo[n]) {
        return memo[n];
    }
    memo[n] = Fibonacci(n - 1, memo) + Fibonacci(n - 2, memo);
    return memo[n];
}

export default Fibonacci;