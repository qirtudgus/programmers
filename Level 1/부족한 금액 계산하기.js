function solution(price, money, count) {
  let arr = [];
  for (let i = 1; count >= i; i++) {
    let won = price * i;
    arr.push(won);
  }

  const result = arr.reduce((sum, currValue) => {
    return sum + currValue;
  });

  return result < money ? 0 : result - money;
}
console.log(solution(3, 20, 4)); // 10
