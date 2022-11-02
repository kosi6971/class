// 쇼핑몰 배너 JS - 03.페이드효과 //

/******************************************** 
 * 
    [ 페이드 효과 슬라이드 기능정의 ]
    -> 슬라이드 순번에 대한 전역변수를 사용한다!

    1. 오른쪽 버튼클릭시 다음 순번슬라이드에
    클래스 "on"을 줘서 opacity:1, z-index:1
    로 보이며 맨위로 설정해준다!(트랜지션적용)
    ->나머지 li는 모두 "on"을 지워서 초기화!

    2. 왼쪽버튼은 이전순번이 나오며 위와 동일

    3. 끝번호에 가서는 처음은 마지막으로 
    마지막은 처음으로 슬라이드가 다시 반복된다.

    4. 블릿은 현재 슬라이드와 일치된 순번표시

********************************************/

$(()=>{
    // 1. 호출확인
    console.log("로딩완료!");

    // 2. 변경 대상
    // 슬라이드 li : #slide li
    const slide = $("#slide li");
    // 블릿 li : .indic li
    const indic = $(".indic li")

    // 3. 변수 셋팅
    // 순번 변수 : 슬라이드 순번 + 블릿 순번
    let sno = 0; // 첫 순번은 0
    // 광클 금지 변수 : 0-허용, 1-불허용
    let prot = 0;

    // 4. 이벤트 대상 : .abtn(2개)
    $(".abtn").click(function(){
        // 광클 금지
        if(prot) return;
        prot =  1; // 잠금
        setTimeout(()=>{
            prot = 0; // 해제
        }, 600);

        clearAuto();

        // 오른쪽 버튼 여부
        // is(선택자) : 선택자인지 여부(true/false)
        let isR = $(this).is(".ab2");
        console.log(isR);

        // 분기하기
        // 오른쪽 일 때
        if(isR){
            // 순번 증가
            sno++;
            // 한계값 체크(순번 초기화)
            if(sno === slide.length) sno = 0;
        }
        // 왼쪽 일 때
        else{
            // 순번 감소
            sno--;
            // 한계값 체크(순번 초기화)
            if(sno === -1) sno=slide.length-1;
        }
        // 슬라이드 클래스 넣기 + 그 외는 클래스 빼기
        slide.eq(sno).addClass("on").siblings().removeClass("on");

        // 블릿 클래스 넣기 그 외는 클래스 빼기
        indic.eq(sno).addClass("on").siblings().removeClass("on");
    });

    // 자동 넘기기
    // 인터발 함수 변수
    let autoI;
    // 타임아웃용 변수
    let autoT;

    // 넘기기 함수
    function slideAuto(){
        // 인터발함수를 지우려면 변수에 넣고 clearInterval(변수) 해야함
            autoI = setInterval(() => {
                // 순번 증가
                sno++;
                // 한계값 체크(순번 초기화)
                if(sno === slide.length) sno = 0;
                slide.eq(sno).addClass("on").siblings().removeClass("on");
                indic.eq(sno).addClass("on").siblings().removeClass("on");
            }, 800);
        }

    // 인터발함수 최초호출!
    slideAuto();

    // 인터발 지우기 함수
    function clearAuto(){
        console.log("인터발 삭제")
        clearInterval(autoI);
        // 타임 아웃 지우기(실행쓰나미 방지)
        clearTimeout(autoT);
        // 일정 시간이 지나면 다시 시작
        autoT = setTimeout(slideAuto, 3000);
    }


});
