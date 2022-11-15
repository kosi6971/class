// 03.JSX.jsx

/*
    [ JSX란 무엇인가 ]
    - Javascript XML을 나타낸다
    - 리액트에서 HTML을 쉽게 작성할 수 있다
    - appendChild() 메서드 없이 DOM에 요소 넣기 가능
*/ 

// JSX를 사용한 것과 사용하지 않은 것을 비교

// JSX 사용
// 넣을 요소
const myele1 = <h1>나는 JSX를 사용한다</h1>;
// 리액트 루트 생성 : creatRoot()메서드 사용
const root1 = ReactDOM.createRoot(document.querySelectorAll("#root div")[0]);
// 적용 : 생성된 루트에 render()메서드를 붙여서 쓸 수 있다
root1.render(myele1);
/*
    출력방식 정리
    1. 한꺼번에 쓰기
    ReactDOM.render(출력할 요소, 출력 요소)
    2. 따로쓰기
    1) 변수 = ReactDOM.createRoot(출력 요소)
    2) 변수.render(출력할 요소)
 */ 


// JSX 사용X
// 넣을 요소 createElement()메서드로 생성(JSX를 쓰지 않는다)
const myele2 = React.createElement("h1", {}, "나는 JS를 쓰지 않아");
// createElement(요소명, {JS코드}, 요소내용)
// 리액트 루트 생성 : creatRoot()메서드 사용
const root2 = ReactDOM.createRoot(document.querySelectorAll("#root div")[1]);
// 적용 : 생성된 루트에 render()메서드를 붙여서 쓸 수 있다
root2.render(myele2);
/*
    위 두가지 방식
    즉, JSX를 사용하거나 안쓸 수 있다

    JSX ES6기반의 javascript의 확장이며 런타임 시에 일반 javascript로 변환
    ______________________________________________________________________
    [ JSX 표현식 ]
    JSX를 사용하면 중괄호에 표현식을 작성할 수 있다
    {.....표현식.....}

    표현식이란, React변수, 속성, JS문법 등의 내용이다
*/ 

let num1 = 111;
let num2 = 7;


// JSX 표현식 사용하기
const myele3 =<h1>리액트는 {num1*num2} 번 사용해도 좋다</h1>

const root3 = ReactDOM.createRoot(document.querySelectorAll("#root div")[2]);
root3.render(myele3);

/*
    [ JSX 태그 요소 작성 시 여러 줄일 경우 ]
    1. 최상위를 하나 만들고 여러 요소를 작성한다
    2. 소괄호로 전체를 싸준다

    - 지원되는 스타일 : 
    1) <>태그들</>
    2) <Frangment>태그들</Frangment>
    3) <기존태그>태그들</기존태그>

    -> 1), 2)번은 CDN방식에서는 지원하지 않는다(설치형 SPA지원)
    -> 기존태그는 <div>, <section> 등 원래 있는 html 태그를 의미
*/ 

const myele4 = (
    <React.Fragment>
        <h2>[ 다수의 HTML요소 블록 삽입 ]</h2>
        <ul>
            <li>프론트엔드 개발</li>
            <li>리액트 사용 개발</li>
            <li>백엔드 개발</li>
        </ul>
    </React.Fragment>
);

const root4 = ReactDOM.createRoot(document.querySelectorAll("#root div")[3]);
root4.render(myele4);

// 5번 내가 원하는 태그 요소 출력
const myele5 = (
    <div>
        <h2>[ 버튼 요소 ]</h2>
        <a href="./01.start.html">01.시작하기</a>
        <button>도망가~</button>
    </div>
);

const root5 = ReactDOM.createRoot(document.querySelectorAll("#root div")[4]);
root5.render(myele5);

/*
    [ JSX는 홀로 태그이더라도 끝에 닫기 해줘야한다 ]
    ex) <br> -> <br />
        <input> type="text"> -> <input> type="text" />     
*/ 

const  myele6 = <input type="text" value="홀로태그는 스스로 닫아라" />;
const root6 = ReactDOM.createRoot(document.querySelectorAll("#root div")[5]);
root6.render(myele6);

/*
    [ JSX에서 속성 클래스는 className으로 표기한다 ]
    <태그 class="클래스명">
    class는 JS에서 키워드이므로 사용 못한다 대신 <태그 className="클래스명">
*/ 

const myele7 = <h1 className="myclass">className속성으로 클래스 셋팅</h1>

const root7 = ReactDOM.createRoot(document.querySelectorAll("#root div")[6]);
root7.render(myele7);

/*
    [ JSX에서 조건문 사용 - if문 ]
    리액트는 if명령문을 지원하지만 JS내부에서는 지원하지 않는다
    JSX에서 조건문을 사용하기 위해서는 JSX 외부에서 if문을 사용하거나
    내부에서 삼항연산자를 사용할 수 있다
*/ 
// JSX외부에서 if문 사용
const x = 10000;
let txt = "돈 충분";
if(x<10000){
    txt = "돈 부족"
}

const myele8 = <h1>{txt}</h1>;

const root8 = ReactDOM.createRoot(document.querySelectorAll("#root div")[7]);
root8.render(myele8);

// JSX 표현식에 삼항연산자 사용
let time = 9;
const myele9 = (
    <React.Fragment>
        <h1>지금 몇 시지? {time}시야</h1>
        <h1>{time >= 9 ? "집들어와" : "놀아"}</h1>
    </React.Fragment>
);

const root9 = ReactDOM.createRoot(document.querySelectorAll("#root div")[8]);
root9.render(myele9);