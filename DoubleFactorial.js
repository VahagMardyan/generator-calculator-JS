const doubleFactorial = (n) => {
    if(n < 0n) {
        return -1n;
    }
    if(n === 0n || n === 1n) {
        return 1n;
    }
    const table = Array(Number(n) + 1).fill(1n);
    for(let i = 2n; i <= n; i++) {
        table[Number(i)] = i * table[Number(i - 2n)];
    }
    return table[Number(n)];
}

export default doubleFactorial;