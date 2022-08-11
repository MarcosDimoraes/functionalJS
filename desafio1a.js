const f = (...p) => {
  const result = [];
  switch (p.length) {
    case 1:
      for (let i = 0; i != p[0]; i++) {
        result.push(i + 1);
      }
      break;
    case 2:
      if ((p[1] - p[0]) < 0) {
        for (let i = p[0]; i >= p[1]; i--) {
          result.push(i);
        }
      } else {
        for (let i = p[0]; i <= p[1]; i++) {
          result.push(i);
        }
      }
      break;
    case 3:
      if ((p[1] - p[0]) < 0) {
        for (let i = p[0]; i >= p[1]; i-=p[2]) {
          result.push(i);
        }
      } else {
        for (let i = p[0]; i <= p[1]; i+=p[2]) {
          result.push(i);
        }
      }
      break;
    default:
      break;
  }
  return result;
};
console.log(f(5));
console.log(f(6, 11));
console.log(f(6, 2));
console.log(f(10, 19, 2));
console.log(f(8, -3, 4));
