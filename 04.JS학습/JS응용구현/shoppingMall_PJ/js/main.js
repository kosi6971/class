// 쇼핑몰 배너 JS - 01.가로방향 배너 슬라이드 //

// HTML태그 로딩후 loadFn함수 호출! ///
window.addEventListener("DOMContentLoaded", loadFn);

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(#slide)
    4. 기능 설계:

        (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 left값을
            -100%로 변경시킨다.
            -> 슬라이드 이동후!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 left값을 0으로 변경한다!

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 left값을
            -100%로 변경한다.
            그 후 left값을 0으로 애니메이션하여
            슬라이드가 왼쪽에서 들어온다.

        (3) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {

    // 1. 호출확인
    console.log("로딩완료!");

    // 광클 금지 변수
    iet = prot = 0; //0은 허용, 1은 불허용

    // 2. 대상 선정
    // 2-1. 이벤트 대상 : .abtn
    const abtn = document.querySelectorAll(".abtn");
    // 2-2. 변경 대상 : #slide
    const slide = document.querySelector("#slide");
    // 2-3 블릿 변경 대상 : indic li
    const indic = document.querySelectorAll(".indic li");

    abtn[1].onclick = ()=>{
        // 광클 금지
        if(prot) return;
        prot=1;
        setTimeout(() => prot=0, 800);

        slide.style.left="-100%";
        slide.style.transition=".8s";
        // 0.8초 후 맨 앞 div를 잘라서 맨 뒤로 이동
        setTimeout(() => {
            slide.appendChild(slide.querySelectorAll("li")[0]);
            // left값 초기화
            slide.style.left="0";
            // left값 초기화하는 과정에서 문제가 생기지 않게끔 transition 제거
            slide.style.transition="none";
        }, 800);

        // 블릿 변경 함수 호출
        // -> 오른쪽 버튼은 두번째 슬라이드가 주인공이다
        chgIndic(1);

        // 자동 넘김 함수 호출
        clearAuto();
    };

    abtn[0].onclick = ()=>{
        // 광클 금지
        if(prot) return;
        prot=1;
        setTimeout(() => prot=0, 800);

        let cli = slide.querySelectorAll("li");

        // 0.8초 후 맨 뒤 div를 잘라서 맨 앞으로 이동
        slide.insertBefore(cli[cli.length-1], cli[0]);
        // 왼쪽 바깥에 -100% left값 주기
        slide.style.left="-100%";
        slide.style.transition="none";
        
        setTimeout(() => {
            // left값을 0으로 트렌지션 애니메이션하기
            slide.style.left="0";
            slide.style.transition=".8s";
        }, 0);

        // 블릿 변경 함수 호출
        // -> 왼쪽 버튼은 첫번째 슬라이드가 주인공이다
        chgIndic(0);

        // 자동 넘김 함수 호출
        clearAuto();
    };
    
    // 슬라이드가 이동될 때 순서를 알려줄 고유 순번용 속성 만들기
    // w3c에서 허용한 사용자 지정속성명은 반드시 data- 로 시작해야한다
    // data-seq 사용
    // 대상 : #slide li
    // 사용메서드 : setAttribute(속성명, 값)
    slide.querySelectorAll("li").forEach((ele, idx)=>{
        ele.setAttribute("data-seq", idx);
    });

    // 블릿변경 함수
    // 버튼을 클릭할 때 블릿을 해당순번의 슬라이드에 같은 순번의 블릿의 li에 on클래스를 넣고 나머지는 제거
    const chgIndic = idx=>{ // idx - 대상 슬라이드 순번
        // 현재 슬라이드 순번 알아오기
        let cseq = slide.querySelectorAll("li")[idx].getAttribute("data-seq");

        console.log("순번", cseq);

        // 슬라이드 li 클래스 초기화
        for(let x of indic) x.classList.remove("on");

        // 슬라이드 순번과 동일한 블릿에 on클래스 넣기
        indic[cseq].classList.add("on");
    }

    // 인터발 함수 변수
    let autoI;

    // 타임아웃용 변수
    let autoT;

    // 자동 넘기기
    function slideAuto(){
        // 인터발함수를 지우려면 변수에 넣고 clearInterval(변수) 해야함
        autoI = setInterval(() => {
            // 오른쪽 버튼 클릭 이동 코드와 동일
            slide.style.left="-100%";
            slide.style.transition=".8s";
            // 0.8초 후 맨 앞 div를 잘라서 맨 뒤로 이동
            setTimeout(() => {
                slide.appendChild(slide.querySelectorAll("li")[0]);
                // left값 초기화
                slide.style.left="0";
                // left값 초기화하는 과정에서 문제가 생기지 않게끔 transition 제거
                slide.style.transition="none";
            }, 800);

            // 블릿 변경 함수 호출
            // -> 오른쪽 버튼은 두번째 슬라이드가 주인공이다
            chgIndic(1);
        }, 2000);
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

} //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////

