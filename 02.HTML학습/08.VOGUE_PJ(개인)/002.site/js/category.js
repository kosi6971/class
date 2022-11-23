// 보그 PJ 카테고리 페이지 JS - category.js

// Get방식으로 넘어온 값 받기!
// location.href로 받는다!!!
// 페이지이동 : location.href = url주소
// url값 읽기 : 변수 = location.href
let pm = location.href;

// 만약 물음표(?)가 없이 바로 페이지가 열린경우 걸러주기!
// 없다면 split에서 에러가 남!
// 에러방지위해 물음표 없으면 첫페이지로 돌려보내기!!!
// indexOf(문자열) -> 문자열의 위치를 알려주는 JS내장함수
// 만약 문자열이 없으면 -1을 리턴함!

if (pm.indexOf("?") === -1) {
    alert("비정상적인 접근입니다~!");
    location.href = "index.html";
    // 첫페이지로 돌아감!
} //////// if ///////////

// url에서 물음표로 값을 잘라오기 중 뒤엣값[1]
// split(자를기준문자열) -> 배열에 담긴다!
// 이퀄(=)로 잘라서 뒤엣값[1] -> (키=값) 중 (값)만!
// encodeURIComponent로 변환해서 보냈으므로
// decodeURIComponent로 재변환!
pm = decodeURIComponent(pm.split("?")[1].split("=")[1]);
// 카테고리명 확인!
console.log(pm);

/*
    [ 제이쿼리에서 json 다루기 ]
    1. json 가져오기 메서드 : $.getJSON(파일경로, 함수)
    -> 파일 경로 - JS에서는 json을 외부파일 부르기로 불렀으나
       제이쿼리 메서드는 자체적으로 호출할 수 있다.
    -> 함수 - json의 변환된 데이터를 처리하는 함수

    구체적으로
    $.getJSON(파일경로, (전달변수)=>{코드})
    -> 함수의 전달변수는 json 파일의 데이터를 전달한다
*/ 
// json 데이터 할당 변수
let jdata;
// json 데이터 연결하여 할당
// html이 로딩된 후 작업해야 하므로 로딩 구역 안에 코딩한다
$(()=>{
    // json 경로는 삽입된 html페이지 위치에서 가져온다
    // 경로에 있는 json파일을 가져와서 변환 후 변수에 담는다
    // 여기서는 jdata라는 변수에 담았다
    $.getJSON("../002.site/js/cat.json", jdata=>{loadFn(jdata)});
});

/*
    json 파일 로딩 후 실행 함수
*/ 
function loadFn(cdata){ // cdata - json 전달값
    // 해당 카테코리 데이터 셋업
    const data = cdata[pm];
    // json데이터는 객체이며 객체[속성명]
    // 즉, cdata["fashion"]과 깉이 셋팅
    console.log(data)

    // 데이터 페이지 바인딩
    // 타이틀 널기
    // 대상 : .stit
    // 넣을 데이터 : 객체 중 "제목"속성값
    $(".stit").text(data["제목"]);

    // .cont에 카테고리명으로 클래스 넣기
    // -> 미리 셋팅된 CSS의 배경 이미지가 건텐츠 박스에 나온다
    // 대상 : .cont
    // 넣을 데이터 : 객체 중 "경로"
    $(".cont").addClass(data["경로"]);

    // LNB메뉴 셋팅하기
    // 넣을 대상 : 객체 중 "메뉴"
    // 메뉴 데이터가 "없음"이 아닐 경우 셋팅
    let menu = data["메뉴"];
    console.log(menu);

    // 대상 : .lnb
    let lnb = $(".lnb");

    // 임시 코드 변수 - 문자형으로 할당
    let hcode = "";
    // +=을 사용하여 문자 더하기를 하려고 하므로
    // 문자형 촉;화를 하지 않으면 undefined라는 기본
    // 빈 데이터가 셋팅되어 있으므로 에러가 난다

    // 분기 : 조건 -  데이터가 "없음"인가
    if(menu === "없음"){ // lnb박스 삭제
        lnb.remove(); // 태그 제거
    }
    else{ // 메뉴가 있을 경우
        // html 코드이므로
        // hcode변수에 모아준다
        hcode += "<ul>";

        // 배열개수만큼 li코드 생성
        menu.forEach((val)=> {
            hcode += `<li><a href="#">${val}</a></li>`;
        });

        hcode += "</ul>";

        // 코드 넣기
        lnb.html(hcode);
    }

    // 각 컨텐츠 박스에 타이틀 넣기
    // 대상 : .cbx h2
    // 데이터 : 객체 중 "타이틀"
    // 제이쿼리 사용 메서드 :  each((순번, 요소)=>{})
    $(".cbx h2").each((idx, ele)=>{
        $(ele).html(data["타이틀"][idx]);
    });

    // 타이틀 변경하기
    // 대상 : title 태크
    // 데이터 : 객체 중 "타이틀"
    $("title").prepend(data["제목"]);
    // prepend() : 앞에 데이터 추가(기존 데이터 살아있음)
    // 참고) append() : 뒈에 데이터 추가
}