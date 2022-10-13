// 아이폰 회전 페이지 js - iPohine.js

window.addEventListener("DOMContentLoaded",()=>{
    console.log("로딩 완료");

    /* 
        [ 아이폰 영역 오버 시 화전 기능 ]
        1. 회전에 4등분된 투명 영역을 구현
        2. 이 영역이 이벤트 대상이 된다
        3. 오버 시 변경대상인 아이폰에 회전값 변경
        4. 트랜지션으로 애니메이션 설정 적용
        5. 애니메이션 후에 이벤트 박스를 보이게함
        (최초 width: 0; -> width: 100vw;)
    */

    // 애니메이션 후에 이벤트 박스 보이게하기
    // 일정 시간 후 실행 함수 - setTimeout(함수, 시간)
    // 함수는 실행 코드
    // 시간은 1/1000초(단위X -> 1000 = 1초)
    setTimeout(()=>{
        document.querySelector(".evt").style.width = "100vw";
    },5500); // 5.5초 후 이벤트 박스 실행

    // 대상 선정 - (1) 이벤트 대상 : .evt div -> 여러 개
    const evt = document.querySelectorAll(".evt div");
    // 대상 선정 - (2) 이벤트 대상 : .iphone
    const iphone = document.querySelector(".iphone");

    // 변경힐 값 배열에 셋팅
    const setdeg = [-60,-40,40,60];

    // 이벤트 셋팅
    evt.forEach((ele, idx)=>{
        // 각 요소에 마우스 오버 셋팅
        ele.onmouseover = ()=>{
            // 아이폰에 회전값 넣기
            iphone.style.transform = `rotateX(10deg) rotateY(${setdeg[idx]}deg)`;
            // 아이폰 트렌지션 넣시
            iphone.style.transition = ".4s ease-in-out";
        };
    });

});