// 보그 PJ 공통JS - common.js

// 제이쿼리 구역 길게 쓰기도 한다
// $(document).ready(function(){});

$(()=>{
    console.log("로딩완료");

    // 스크롤 이벤트 구역
    // 이벤트명 : scroll
    // 이벤트 대상 : window
    // 변경 대상 : #top
    const topA = $("#top");
    // 스크롤 위치 변수
    let scTop;
    // 마지막 스크롤 위치값
    let lastSc = 0;
    

    $(window).scroll(function(){

        // 스크롤 방향 알아내기
        if(scTop > lastSc){
           console.log("down");
        }
        else{
            console.log("up");
        }

        // 스크롤 위치값(this는 window)
        scTop = $(this).scrollTop();
        // scrollTop() 메서드 : 세로 스크롤 위치값을 return하는 메서드

        // 슬림 메뉴 클래스 on 적용
        // 기준 위치 : 스크롤 100px 이상
        if(scTop>=100){ // 100 이상
            topA.addClass("on")
            // addClass(클래스명) - 클래스 넣기

            // 스크롤 방향에 따라 .up 추가 / 제거
            if(scTop > lastSc){
                topA.addClass("up");
            }
            else{
                topA.removeClass("up");
            }
        }
        else{ // 100 미만
            topA.removeClass("on up")
            // removeClass(클래스명) - 클래스 삭제
            // 클래스명에 띄어쓰기로 복수의 클래스 적용 가능
        }

        // 마지막 위치값 업데이트
        lastSc = scTop;


    });
});