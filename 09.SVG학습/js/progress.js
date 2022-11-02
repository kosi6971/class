// 프로그레스 페이지 JS - progress.js

$(()=>{
    console.log("로딩 완료");

    // 변수 셋팅
    // 변경 대상 바 박스 : .lbar
    const lbar = $(".lbar");
    // 변경 대상 숫자 박스 : .ltxt b
    const ltxt = $(".ltxt b");

    // 팽수2 버튼 클릭 시, .lineper 박스의 .lbar width 크기를
    // %숫자 증가와 매칭하여 보여주기 
    // 클릭 대상 : .act button -> 마지막
    $(".act button").last().click(()=>{
        // 1. 숫자 데이터 증가하기
        chgPer();
    });

    // % 증가 숫자 변수
    let pernum = 0;

    /*
        함수명 : chgPer
        기능 : 숫자% 변경 및 바% 변경
    */
    function chgPer(){
        // 호출확인
        console.log("%변경 중");

        // 숫자% 변경
        // 대상 : ltxt b -> ltxt변수
        // % 증가 숫자 변수 1씩 증가
        pernum++;
        ltxt.text(pernum);

        // 바% 변경
        // 대상 : .lbar -> lbar변수
        lbar.css({width:pernum+"%"});

        // 재귀호출하기 -> 자기 자신 호출
        // 재귀호출의 한계를 if문으로 제어
        if(pernum < 100){
            setTimeout(()=>{
                chgPer();
            }, 30);
        }
        else{ // 100 이상이 되는 순간 실행
            // 오디오 플레이
            // 대상 : #myaud
            // 비디오, 오디오 재생 메서드 : play()
            // 비디오, 오디오 정지 메서드 : pause()
            // 미디어 요소는 제이쿼리에서 get() 메서드로 선택한다
            // 이 때 첫번째를 의미하는 get(0)을 사용, [0]도 사용 가능 
            $("#myaud").get(0).play();
            // $("#myaud")[0].play();
        }
    }


});