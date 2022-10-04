// 큐브 애니 js - cube.js

window.addEventListener("DOMContentLoaded", function(){
    console.log("로딩 완료");

    // 클릭 이벤트 대상 : .btns button
    const btns = document.querySelector(".btns button");

    // 변경 대상 : .cube
    const cube = document. querySelector(".cube");

    // 클릭 시 기능 구현 함수
    const aniFn = function(){
        console.log("aniFn 실행");

        // 대상 선정 : .cube -> cube변수

        // 변경 내용 : 변경대상요소에 클래스 넣기/빼기
        cube.classList.toggle("on");

        // 큐브 클래스 on여부에 따라 버튼 글자 변경
        cube.classList.contains("on") ? btns.innerText="멈춰!" : btns.innerText="돌아!"
        console.log(cube.classList.contains("on"));

        /*
            [ 클래스 컨트롤 객체 ]
            classList
            -> 하위 메서드
            1. add(클래스명) - 클래스 추가
            2. remove(클래스명) - 클래스 제거
            3. toggle(클래스명) - 클래스 유무에 따른 추가/제거
            4. contains(클래스명) - 지정한 클래스가 있으면 true, 없으면 false
        */ 
    }

    // 대상에 클릭 설정하기
    btns.onclick = aniFn;
    // 전달값이 없다면 소괄호 생략한 함수명만 이벤트 속성에
    // 할당하면 바로 실행되지 않고 이벤트가 발생할 때 실행된다
});