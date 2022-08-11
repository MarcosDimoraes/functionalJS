const range = (...p) => {
    const result = [];
    const n1 = (p[1] === undefined) ? 1 : p[0];
    const n2 = (p[1] === undefined) ? p[0] : p[1];
    const step = (p[2] === undefined) ? ((n1 <= n2) ? 1 : -1) : ((n1 <= n2) ? Math.abs(p[2]) : - Math.abs(p[2]));
    for (let i = n1; (step > 0) ? i <= n2 : i >= n2; i += step) {
        result.push(i);
    }
    return result;
};
console.log(range(5));
console.log(range(6, 11));
console.log(range(6, 2));
console.log(range(10, 19, 2));
console.log(range(8, -3, 4));
