const isPerfectSquare = (x) => {
    let s = parseInt(Math.sqrt(x));
    return (s * s === x);
}

const isFibonacciNum = (n) => {
    if(n <= 0) {
        return new Error(`The integer must be greater than 0.`);
    }
    if(isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4)) {
       return `${n} is a Fibonacci number`; 
    }
    return `${n} is not a Fibonacci number`;
}

export default isFibonacciNum;