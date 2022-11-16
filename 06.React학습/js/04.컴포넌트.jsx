// 03.컴포넌트.jsx

/*
    [ 리액트 컴포넌트 ]
    - 컴포넌트는 HTML요소를 반환하는 함수

    { 특징 }
    1. 컴포넌트는 독립적이고 재사용이 가능한 코드집합
    2. JS함수와는ㄴ 비슷하지만 HTML코드 반환이 필수라는 점이 다르다
    3. 컴포넌트는 2가지이다
        1) 클래스 컴포넌트
        2) 함수 컴포넌트
    (-> 우리는 함수 컴포넌트에 집중할 예정)

    -> 클래스 컴포넌트는 리액트 초중기에 주로 사용되었으나 React 16.8버전에서
       Hooks와 함께 더 이상 사용되지 않는다
       Hooks는 함수 컴포넌트만 사용한다
    _______________________________________________________________________
    [ 첫 번째 컴포넌트 만들기 ]
    - 리액트 컴포넌트 이름은 반드시 첫 글자가 대문자여야 한다(안지키면 적용X)

    [ 클래스 컴포넌트 ]
    클래스 컴포넌트에는 extend React.Component 상속문이 포함되야한다

    -> 컴포넌트에도 메서드가 필요하다
    reder() 메서드는 HTML을 반환
*/ 

// 클래스로 컴포넌트 작성 - root1
class Gogh extends React.Component {
    // render() 메서드 사용함!
    render(){
        // HTML태그를 리턴해준다!
        return(
            <React.Fragment>
                <h2>안녕! 나는 고흐그림이야!</h2>
                <img src="./images/01.png" alt="고흐1" />
                {/* 홀로태그는 반드시 끝에 닫아준다! */}
            </React.Fragment>
        );
    }
}

// 랜도링하기
// ReactDOM은 가상돔을 만드는 객체
// createRoot(요소) 출력요소를 설정
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(<Gogh />);
// reder(출력할 요소)
// 출력할 요소 -> 클래스를 호출하면 구성된 태그가 들어간다
// 클래스 호출법: <클래스명 />

// 함수로 컴포넌트 작성 - root2
function IronMan(){
    return(
        <React.Fragment>
                <h2>안녕! 나는 아이언맨이야!</h2>
                <img src="./images/ab1.jpg" alt="아이언맨" />
        </React.Fragment>
    );
}

// 랜더링하기
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<IronMan />);

/*
    [ props 사용하기 ]
    props는 properties에서 나온 말
    속성들... 즉, 변수에 값을 할당하여 전달하는 방법
    함수의 전달값과 같고 속성으로 컴포넌트에 보낸다
    -> props는 05번 다음번에 자세히 다룬다
*/ 
// 내가 좋아하는 색 표시하기
function Favorite(props){
    return <h2>
        내가 좋아하는 색은 {props.color}이야 <br />
        그리고 좋아하는 음식은 {props.food}이야 <br />
        취미는 {props.hobby}이야
        </h2>;
    // 표현식에 {props.color}는 호출 시 보낸 속성명의 값이다
}
// 좋아하는 색을 props로 전달할 수 있다
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
// 랜더링 시 속성셋팅 형식으로 함수컴포넌트에 값을 전달
root3.render(<Favorite color="파란색" food="치킨" hobby="게임" />);
// 함수 컴포넌트에서는 표현식안에서 {props.호출 시 사용한 속성명}
// 여기서는 {props.color}를 사용