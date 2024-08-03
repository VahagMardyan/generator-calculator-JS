const subfactorial = (n) => {
    if(n < 0n) {
        return -1n;
    }
    if(n === 0n) {
        return 1n;
    }
    if(n === 1n) {
        return 0n;
    }
    const table = [1n, 0n, ...Array(Number(n) - 1).fill(0n)];
    for(let i = 2n; i <= n; i++) {
        table[Number(i)] = (i - 1n) * ( table[Number(i - 1n)] + table[Number(i - 2n)] );
    }
    return table[Number(n)];
}

export default subfactorial;