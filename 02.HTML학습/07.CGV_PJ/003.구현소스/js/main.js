// CGV PJ 메인 페이지 JS - main.js

// 예고편 선택 메뉴 a요소 -> movlink 변수
var movlink = document.querySelectorAll(".mlist a");
// html요소를 변수에 담으면 여러 개의 요소일 경우 querySelectorAll()을 사용하여 html 컬렉션에 저장
// 여러 개의 내부 주소가 있고 번호로 되어있다(0부터 시작)
// 순번의 요소를 선택하는 방법은 item 또는 []를 사용
var len = movlink.length;

// for문을 이용하여 링크 설정
for (var i = 0; i < len; i++) {

    // 순서대로 a요소에 click 이벤트 설정하기
    // 대상: movlink변수
    movlink.item(i).onclick = function(){chgMV(this)};
    // onclick은 a요소의 이벤트 속성
    // 이퀄 오른쪽에 할당
    // 이때 chgMV() 함수를 직접쓰면 함수가 바로 실행된다
    // 따라서 이벤트 발생 시 호출할려면 익명함수 안에 써야함
    // 이것은 마치 <a href="" onclick="chgMV()">라고 설정한 것과 같다

    // 이벤트에 할당한 익명함수 안의 함수에 this를 보내면
    // 이벤트가 걸린 요소자신이 함수에 전달
}

/*
    함수명 : chgMV
    기능 : 영화 예고편 변경
*/ 
function chgMV(ele){ // ele -> 전달되는 a요소
    // 전달되는 a요소의 "data-mv" 속성값을 읽어오가
    var minfo = ele.getAttribute("data-mv");
    // getAttribute(속성명) -> 요소의 속성값 읽어오는 내장 함수
    // setAttribute(속성명, 값) -> 요소값 셋팅 내장 함수

    console.log(minfo);
    var tg = document.querySelector("#screen iframe");

    // 변경 내용 : 대상요소의 src속성을 변경함
    // src값 중 동영상 ID만 변수에 담긴 것으로 변경하여 반영
    tg.src = `https://www.youtube.com/embed/${minfo}?autoplay=1`;
}

/*
    [ 익명 함수란? ]
    코드를 실행하지 않고 저장하는 메모리 공간
    단, 이름이 없다
    즉, 주소지가 없다
    왜? 호출하는 방법을 응용할 수 있도록 하기 위해

    호출법
    1. 변수에 할당하는 방법 -> 변수명이 함수명이 된다
    2. 이벤트와 연결하는 방법 -> 이벤트가 발생 시 함수 실행
*/ 



var myFn = function(){
    console.log("안");
}

console.log("밖");
myFn();