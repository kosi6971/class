// 07.조건렌더링.jsx

// 리액트에서는 조건부로 구성 요소를 랜더링 할 수 있다
function MakeDev(){
    return <h1>나는 개발자야</h1>;
}

function LostDev(){
    return <h1>개발자가 뭐지</h1>;
}

// 메인 컴포넌트에서 위의 2가지 중 조건부로 컴포넌트 선택 로딩
function Developer(props){ // 호출 시 전달되는 속성명 isDev
    const isNow = props.isDev; // true/false 전달
    // 조건문
    if(isNow){
        return <MakeDev />;
    }
    // else문이 없어도 if문에 들어가면 return문 때문에 함수를 나간다
    return <LostDev />;
}

// 컴포넌트 호출 출력
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(<Developer isDev={true} />);

// 컴포넌트 호출 출력
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<Developer isDev={false} />);

///////////////////////////////////////////////////
// if문이 아닌 조건 표현하기
// -> (조건식) && JSX표현식
// 조건이 true일때만 && 뒤의 JSX표현식이 출력된다
///////////////////////////////////////////////////

// 리스트 반복 찍기를 위한 컴포넌트
function CarList(props){ // 전달되는 속성명은 name
    return <li>나는 {props.name}입니다</li>;
}

// 리스트를 출력하는 컴포넌트 
// 내가 사고 싶은 자동차 리스트
function WishList(props){ // 전달되는 속성명은 wlist;
    const mycars = props.wlist;
    return(
        <React.Fragment>
            <h1>자동차 위시리스트</h1>
            {/* 자동차 리스트가 0보다 클 때만 아래 출력 */}
            {
            mycars.length > 0 && 
            <div>
                <h2>내가 사고 싶은 자동차는 모두 {mycars.length}대입니다.</h2>    
                <ul>{
                    // 배열변수.map() 메서드로 배열을 자동 순회한다
                    // map((변수)=>{표현식})
                    // map(변수=>표현삭)
                    // 변수는 화살표함수 안으로 배열값을 전달함
                    // CarList 컴포넌트에 전달되는 속성명은 name
                    mycars.map(x=><CarList name={x} />)
                }</ul>
            </div>
            }
        </React.Fragment>
    );
}

const cars = ["제네시스","그랜져","롤스로이스"];
// const cars = [];

// 컴포넌트 호출 출력
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(<WishList wlist={cars} />);

// 리스트 반복 찍기를 위한 컴포넌트
function CarList2(props){ // 전달되는 속성명은 seq, cname
    return <li>{props.seq} {props.cname}입니다</li>;
}

// 리스트를 출력하는 컴포넌트 
// 내가 사고 싶은 자동차 리스트
function WishList2(props){ // 전달되는 속성명은 wlist;
    const mycars = props.wlist; // 객체를 담은 배열
    return(
        <React.Fragment>
            <h1>자동차 위시리스트</h1>
            {/* 자동차 리스트가 0보다 클 때만 아래 출력 */}
            {
            mycars.length > 0 && 
            <div>
                <h2>내가 사고 싶은 자동차는 모두 {mycars.length}대입니다.</h2>    
                <ul>{
                    // 배열변수.map() 메서드로 배열을 자동 순회한다
                    // map((변수)=>{표현식})
                    // map(변수=>표현삭)
                    // 변수는 화살표함수 안으로 배열값을 전달함
                    // CarList 컴포넌트에 전달되는 속성명은 name
                    mycars.map(x=><CarList2 seq={x.id} cname={x.name} />)
                }</ul>
            </div>
            }
        </React.Fragment>
    );
}

// 전달할 배열 변수 할당
const cars2 = [
    {id:"첫번째", name:"레이"},
    {id:"두번째", name:"캐스퍼"},
    {id:"세번째", name:"티코"}
]

// 컴포넌트 호출 출력
const root4 = ReactDOM.createRoot(document.getElementById("root4"));
root4.render(<WishList2 wlist={cars2} />);


function MadeGoal(){
    return <h2>골입니다. 골</h2>;
}

function MissedGoal(){
    return <h2>아쉽습니다. 노골</h2>;
}

// 골인 여부를 결정하는 메인 컴포넌트
function Goal(props){
    const isGoal = props.isGoal;
    return(
        <React.Fragment>
            {/* 삼항 연산자 */}
            {isGoal ? <MadeGoal /> : <MissedGoal />}
        </React.Fragment>
    );
}

// 컴포넌트 호출 출력
const root5 = ReactDOM.createRoot(document.getElementById("root5"));
root5.render(
    <React.Fragment>
        <h1>[카타르 중계석]</h1>
        <h2>한국팀 지금 슛</h2>
        <Goal isGoal={false} />
    </React.Fragment>
);

const root6 = ReactDOM.createRoot(document.getElementById("root6"));
root6.render(
    <React.Fragment>
        <h1>[카타르 중계석]</h1>
        <h2>한국팀 지금 다시 슛</h2>
        <Goal isGoal={true} />
    </React.Fragment>
);