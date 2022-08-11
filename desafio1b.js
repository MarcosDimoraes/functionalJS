const range = (a, b, c) => {
    const n1 = (b === undefined) ? 1 : a;
    const n2 = (b === undefined) ? a : b;
    const step = (c === undefined) ? ((n1 <= n2) ? 1 : -1) : ((n1 <= n2) ? Math.abs(c) : - Math.abs(c));
    console.log(n1, n2, step)
    const result = [];
    for (let i = n1; (step > 0) ? i <= n2 : i >= n2; i += step) {
        result.push(i);
    }

    return result;
}
console.log(range(5));
console.log(range(6, 11));
console.log(range(6, 2));
console.log(range(10, 19, 2));
console.log(range(8, -3, 4));
