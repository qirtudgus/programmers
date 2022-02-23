const array = [1,2,3,4,5,10000,-1000,-100];

function solution(arr) {
    var answer = 0;

    const arrayChecked = arr.every( i => {
        return i >= -10000 && i <= 10000 // i가 -10000보다 크거나 같을경우 true, i가 10000보다 작거나 같을경우  true, 논리곱(&&)연산자로 두개의 조건이 모두 true이면 true 반환
    });

    if(arr.length <= 100 && arrayChecked ){ //제한조건들이 true면 실행
        
        for(let i = 0; i < arr.length; i++){
            answer += arr[i];
        }
         return answer / arr.length;
    } 
    else console.log ("arr의 원소의 길이가 100개가 넘거나, -10000보다 작거나, 10000보다 큽니다"); 
}
console.log(solution(array));
