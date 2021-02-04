const arr = [1, 0, 10, "0", "1", NaN, false, null, undefined, "false", "true"];
const truthy = [];

arr.forEach((i) => {
  if (i) {
    truthy.push(i);
  }
});
console.log(truthy);
