let arr = [4, 3, 2, 1, 5];
let arr2 = [10];
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length ? arr : [-1];
}
console.log(solution(arr));
console.log(solution(arr2));
