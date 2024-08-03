const isPrime = (n) => {
    if(n<2) {
        return new Error(`The number must be greater or equal than 2.`);
    }
    for(let i=2;i<=Math.sqrt(n);i++) {
        if(n%i==0) {
            return `${n} isn't a Prime Number: It's divided into ${i}.`;
        }
    }
    return `${n} is a Prime Number.`;
}

export default isPrime;