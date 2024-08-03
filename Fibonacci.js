const Fibonacci = (n) => {
    if(n < 0n) {
        return -1n;
    }
    const table = [0n,1n];
    for(let i = 2n;i <= n; i++) {
        table.push(table[i-1n] + table[i-2n]);
    }
    return table[n];
}

export default Fibonacci;