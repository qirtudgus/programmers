// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
  if (s.length % 2 === 0) {
    console.log("짝수다");
    console.log(
      `가운데 글자는 ${s[Math.ceil(s.length / 2) - 1]},${
        s[Math.ceil(s.length / 2)]
      } 입니다.`,
    );
    let result = [
      s[Math.ceil(s.length / 2) - 1],
      s[Math.ceil(s.length / 2)],
    ].join("");
    return result;
  }
  if (s.length % 2 === 1) {
    console.log("홀수다");
    console.log(`가운데 글자는 ${s[Math.ceil(s.length / 2) - 1]} 입니다.`);
    let result = s[Math.ceil(s.length / 2) - 1];
    return result;
  }
}

solution("fjisdsoafdsj");
