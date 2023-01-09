function calc() {
  var currentYear = 2023; //올해 년도를 변수에 저장
  //사용자로부터 입력받은 값을 변수에 저장
  var birthYear = prompt("태어난 년도를 입력하세요.", "YYYY");
  var age = currentYear - birthYear + 1; //나이 계산
  document.querySelector("#result").innerHTML =
    "당신의 나이는" + age + "세입니다."; //document는 현재 웹브라우저의 페이지 의미
  //querySelectorf()는 id가 result인 웹 요소 의미
  //innerHTML은 대입한 값으로 div값인 html 문서 대체
}
