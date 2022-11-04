// 모듈 연습 메인 JS - main.js

// 로딩구역 없이 사용 => script에 defer키워드 추가

// 모듈화 JS파일 inport하기
// import {mTitle, sTitle, personInfo} from "./textData.js";
import {mTitle as mTit, sTitle as sTit, personInfo as pInfo, mv} from "./textData.js";
// import message from "./msgFormat.js";
import {message as msg} from "./msgFormat.js";
import { MovieInfo } from "./mvInfo.js";
/*
    import 형식
    import 전달변수 form 파일 경로;
    -> 반드시 가져올 모듈화 JS에서 export를 해줘야한다
    -> form 뒤에 경로는 반드시 상대경로일 경우 같은 위치일지라도 ./를 꼭 해야한다
    (/, ./, ../ 표시 필수)
    -> 모듈구성은 반드시 서버 형식으로 열어야 작동한다(http://.....)

    [ import 시 변수명 변경 ]
    import { 전달변수 as 별칭} form 파일경로;
    ex) import {mymymy as m} from 파일경로;
    -> 별칭 사용 이유 : 단순 변경 요구, 같은 이름 변수 피하기
*/ 

/*
    [ 모듈화를 위한 구성 ]
    1. 데이터를 처리하기 위한 JS
       -> textData.js
    2. 구체적인 데이터 구성 처리를 위한 JS
       -> msgFormat.js
*/

// 타이틀 출력 박스
const tpart = document.querySelector(".tpart");
// 내용 출력 박스
const demo = document.querySelector("#demo");

// 제목 넣기
tpart.innerHTML = `
<h2>${mTit}</h2>
<h3>${sTit}</h3>
`;

// 내용 넣기
demo.innerHTML = msg("현석",40);
demo.innerHTML += msg("톰행크스",55);
demo.innerHTML += msg("졸리",48);

// 다중 데이터(배열) 이용하기
pInfo.forEach((val)=>{
    demo.innerHTML += msg(val[0], val[1]);
});

// ol>li형식으로 .mvpart 박스에 영화정보로 클래스를 생성하여 화면에 뿌린다
const mvpart = document.querySelector(".mvpart");
// 영화 정보는 textData.js에서 mv변수에 배열로 담아서 가져온다
let mi=[];
mv.forEach((x,i)=>{
    mi[i] = new MovieInfo(mv[i][0],mv[i][1],mv[i][2],mv[i][3],mv[i][4]);
});
console.log(mi);

// mi 배열 개수 만큼 돌기
for (let y of mi) { // y는 각 배열 값
    let temp=""; // 빈값을 넣지 않으면 첫 공간에 undefined가 들어간다, +=할 때 문제가 생긴다
    console.log(y);
    temp += "<ol>";
    for (let x in y) { // x는 객체의 속성명
        temp += `<li> ${x} : ${y[x]} </li>`;
    }
    temp += "</ol>";
    console.log(temp);
    mvpart.innerHTML += temp
}