const factorial = (n) => {
    if(n < 0n) {
        return -1n;
    }
    if(n === 0n || n === 1n) {
        return 1n;
    }
    const table = [1n];
    for(let i = 1n;i <= n; i++) {
        table.push(i * table[i-1n]);
    }
    return table[n];
}

export default factorial;