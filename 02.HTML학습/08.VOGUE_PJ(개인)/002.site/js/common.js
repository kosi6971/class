// 보그 PJ 공통JS - common.js

// 현재 페이지명을 알아내어 제어에 활용한다
// 페이지명 변수
let pname = location.pathname;
// location.pathname 페이지명이 포함된 전체 경로
// split(자를 문자열) -> 배열에 담긴다
pname = pname.split("/");
pname = pname[pname.length-1];
pname = pname.split(".")[0];
console.log(pname);


// 제이쿼리 구역 길게 쓰기도 한다
// $(document).ready(function(){});

$(()=>{
    // console.log("로딩완료");

    // 부드러운 스크롤 호출(제이쿼리 아님)
    startSS();

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
    // 스크롤 액션 대상 위치값 배열 변수
    const scpos = [];
    // 각 등장 액션 요소 변수
    const scAct = $(".scAct");
    // 윈도우 높이 절반값
    const hw = $(window).height()/2;

    // 제이쿼리에서 for문대신 쓰는 each() 메서드
    // 요소.each((순번, 요소)=>{구현부})

    // 등장 액션 클래스 요소의 위치를 배열에 담기
    // 조건 : 현재 스크롤 위치(scTop)가 등장 액션 요소 위치(scpos[순번])
    // - 상단영역 크기(206)
    // - 윈도우 화면 높이값 절반(hw 변수)
    // 보다 커지면
    // 해당 순번의 등작 핵션 요소 클래스 on을 추가
    // -> 위의 조건에서 뺀값을 미리 셋팅
    scAct.each((idx, ele)=>{
        scpos[idx] = $(ele).offset().top-206-hw;
        // 시작 위치 보정 : 원래 위치 - 상단 높이 - 윈도우 절반

        // $(ele) 제이쿼리 선택 필수
        // offset().top -> 맨 위에서 부터 top위치값
    });

    // console.log(scpos);
    
    // 스크롤 이벤트 함수
    $(window).scroll(function(){

        // 슬림메뉴와 상단 이동 버튼 보이기 작동안할 페이지 셋팅
        if(pname === "login" || pname === "member" || pname === "gallery") return;

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

        // console.log(scTop);

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

        // 마지막 위치값 업데이트
        lastSc = scTop;


        // 버튼 보이기/숨기기
        if(scTop >= 300){
            tbtn.addClass("on");
        }
        else{
            tbtn.removeClass("on");
        }

        // 등장액션 적용하기
        // 스크롤 등장 액션 검사 함수 호출
        // 등장 요소 개수만큼 자동으로 돌아주면 호출
        scAct.each(idx=>scAction(idx));
    });

    /*
        함수명 : scAction
        기능 : 스크롤 등장 액션 주기
    */
    function scAction(n){ // n = 순번
        // 해당 영역일 경우 해당 요소에 클래스 on 넣기
        // 구간은 사이 구간으로 설정해야 다음 구간과 겹쳐지지 않는다
        if(scTop > scpos[n] && scTop < scpos[n]+200){
            scAct.eq(n).addClass("on");
        }
    }

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

        // 부드러운 스크롤 적용으로 스크롤위치값을 갱신해줘야 이동에 대한 싱크가 맞는다
        // 안할 경우, 위치 이동 후 부드러운 스크롤 위치로 이동
        // pos 전역 분수에 값 넣기
        pos = 0;
    });

});