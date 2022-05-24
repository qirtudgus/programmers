// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
// [1,2,3,4,6,7,8,0]	14
// 5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.
let arr1 = [1, 2, 3, 4, 6, 7, 8, 0];

function solution(arr1) {
  let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return arr2
    .filter((x) => !arr1.includes(x))
    .reduce((i, index) => {
      return i + index;
    });
}
solution(arr1);
