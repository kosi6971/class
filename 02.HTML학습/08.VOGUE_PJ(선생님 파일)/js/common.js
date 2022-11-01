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
    // 변경 대상: .tbtn
    const tbtn = $(".tbtn");
    // 스크롤 위치 변수
    let scTop;
    // 마지막 스크롤 위치값
    let lastSc = 0;
    // 스큻ㄹ 액션 대상 위치값 배열 변수
    const scpos = [];
    // 각 등장 액션 요소 변수
    const scAct = $(".scAct");

    // 제이쿼리에서 for문대신 쓰는 each() 메서드
    // 요소.each((순번, 요소)=>{구현부})

    // 등장 액션 클래스 요소의 위치를 배열에 담기
    scAct.each((idx, ele)=>{
        scpos[idx] = $(ele).offset().top;
        // $(ele) 제이쿼리 선택 필수
        // offset().top -> 맨 위에서 부터 top위치값
    });

    console.log(scpos);
    
    // 스크롤 이벤트 함수
    $(window).scroll(function(){

        // 스크롤 방향 알아내기
        // if(scTop > lastSc){
        //    console.log("down");
        // }
        // else{
        //     console.log("up");
        // }

        // 스크롤 위치값(this는 window)
        scTop = $(this).scrollTop();
        // scrollTop() 메서드 : 세로 스크롤 위치값을 return하는 메서드

        console.log(scTop);

        // 슬림 메뉴 클래스 on 적용
        // 기준 위치 : 스크롤 100px 이상
        if(scTop>=100){ // 100 이상
            topA.addClass("on")
            // addClass(클래스명) - 클래스 넣기

            // 스크롤 방향에 따라 .up 추가 / 제거
            if(scTop > lastSc){ // 숨기기
                let temp = topA.innerHeight();

                topA.removeClass("up").css({top:-temp+"px"});
                // console.log(temp);
                // height() - 패딩이 빠진 순수 높이값
                // innerHeight - 패딩포함 내부 높이값
            }
            else{ // 보이기
                topA.addClass("up").css({top:"0"});
            }
        }
        else{ // 100 미만
            topA.removeClass("on up")
            // removeClass(클래스명) - 클래스 삭제
            // 클래스명에 띄어쓰기로 복수의 클래스 적용 가능
        }

        // 등장액션 적용하기
        // 조건 : 현재 스크롤 위치(scTop)가 등장 액션 요소 위치
        // - 상단영역 크기
        // - 윈도우 화면 높이값 절반
        // 보다 커지면
        // 해당 순번의 등작 핵션 요소 클래스 on을 추가
        // -> 위의 조건에서 뺀값을 미리 셋팅
        if(scTop > scpos[0]-206-$(window).height()/2){
            scAct.eq(0).addClass("on");
        }

        // 마지막 위치값 업데이트
        lastSc = scTop;


        // 버튼 보이기/숨기기
        if(scTop >= 300){
            tbtn.addClass("on");
        }
        else{
            tbtn.removeClass("on");
        }
    });

    // 버튼 클릭 설정
    tbtn.click(()=>{
        // 스크롤 최상단 이동
        // 애니메이션 스크롤 이동
        // -> html, body 두 최상위 요소를 대상으로 한다 -> 모든 브라우저에서 공통으로 작동하기 위해
        $("html,body").animate({
            scrollTop:"0"
        }, 1800, "easeOutBounce");
        // scrollTop 속성은 제이쿼리 전용
        // 세로 스크롤 위치값을 셋팅할 수 있다
        // 참고) 가로 스크롤은 scrollLeft
    });

});