// start 리액트 JS 
// html캐그와 JS문법을 따옴표 없이 사영하는 JSX문법을 쓴다
// JSX(Java XML) 문법을 쓰는 파일은 .js대신 .jsx확장자를 쓴다
// return (jsx문법적용 태그 -> 따옴표없이 바로 사용)
// 홀로 태그는 꼭 닫기문법 적영(xml문법) -> ex) <br />
// 함수명은 첫글자가 반드시 대문자로 시작
// 아니면 나오지 않는다(원래는 클래스 기반에서 구현된 것이므로
// 클래스는 원래 첫글자가 대문자로 시작된다)
function MyFirstReact(){
    return (
        <div>
            <h1>잘해보자 리액트</h1>
            <h2>
                [ 리액트란 ]<br></br>
                - 프론트 엔드 JS 라이브러리다<br></br>
                - 사용자 UI의 구성 요소를 빌드하기 위한 도구<br></br>


                [ 작동원리 ]<br></br>
                - 가상돔(virtual DOM)을 사용하여 최소의 html리소스를 사용함으로<br></br>
                   빠르고 쉽게 UI화면을 구성한다<br></br>
                - 가상돔은 실제DOM을 변경하기 전에 메모리상에서 구성하는 가짜 DOM이다<br></br>
                   변경사항을 한번에 구성하여 반영하기 위한 도구이다<br></br>
                - 리액트는 변경하고자 하는 부분만 업데이트 가능하다<br></br>

                [ 리액트 구현의 2가지  스타일 ]<br></br>
                # 스타일1 : 리액트는 JS라이브러리이므로 필요한 부분만 적용<br></br>
                    - 라이브러리 CDN방식으로 구현(별도 설치 필요 없다)<br></br>
                # 스타일2 : 리액트는 SPA(Single Page Appliction)이므로 Node.js 등을<br></br>
                            사용하요 한 페이지로만 구현하는 웹을 만들 수 있다<br></br>
                    - Node.js, 리액트SPA 프로젝트 설치 및 생성 필요
            </h2>
        </div>
    );
}

// 리액트로 html요소 페이지 요소에 삽입하기
// 가상돔을 셋팅하는 리액트 객체를 부른다 -> ReactDOM
// render() -> 요소를 변경하는 메서드
// ReactDOM.render(요소를 리턴하는 함수명으로된 홀로태그를 쓴다, 넣을 요소)
// 요소를 리턴하는 함수명으로된 홀로태크를 쓴다 -> myFirstReact함수이므로 -> <MyFirstreact /> 
// JSX문법으로 따옴표로 안싼다
// 넣을 요소 -> 0.1start.html 페이지의 div.mydiv요소를 선택
// document.querySelector(".mydiv")
ReactDOM.render(<MyFirstReact />, document.querySelector(".mydiv"));

