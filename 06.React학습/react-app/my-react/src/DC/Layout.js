import {Outlet, Link} from "react-router-dom";
import Logo from "./Logo";
import "./Layout.css";

/*
    [ 리액트 스타일링 기법 3가지 ]
    1. 일반 CSS파일을 컴포넌트 JS파일에 import하여 사용
        ex) import "CSS경로";

    2. 객체를 만들어서 적용하는 방법
        ex) 
            const mystyle = {color:"red", fontSize:"30px"};
            <h1 style={mystyle}>하하하</h1>

    3. 직접 중괄호 표현식에 중괄호를 하나 더 하여 표현
    -> 중괄호 하나는 표현식, 안에 중괄호는 객체(CSS용)
        ex)
            <h1 style={{color:"red"}}>하하하</h1>
*/

const Layout = ()=>{
    return(
        <>
        {/* 상단 영역 */}
        <header className="top">
            {/* 네비게이션 파트 */}
            <nav className="gnb">
                <ul>
                    <li>
                        <Logo />      
                    </li>
                    <li>
                        <Link to = "/">Home</Link>                      
                    </li>
                    <li>
                        <Link to = "/ct">CHARACTERS</Link>                                  
                    </li>
                    <li>
                        <Link to = "/co">COMICS</Link>                                              
                    </li>
                    <li>
                        <Link to = "/mv">MOVIES</Link>                                              
                    </li>
                    <li>
                        <Link to = "/gm">GAMES</Link>                                              
                    </li>
                    <li>
                        <Link to = "/vd">VIDEO</Link>                                              
                    </li>
                    <li>
                        <Link to = "/nw">NEWS</Link>                                              
                    </li>
                    <li>
                        <Link to = "/mem">
                            <i className='fas fa-users' style={{fontSize:"36px", color:"lime"}}></i>
                        </Link>                                              
                    </li>
                </ul>
            </nav>
        </header>

        {/* 메인 영역 */}
        <main className="cont">
            {/* 출력 파트 : 각 페이지가 표시됨 */}
            <Outlet />
        </main>

        {/* 하단 영역 */}
        <footer className="info">
            kosi is happy
        </footer>
        {/* 출력 파트 : 각 페이지가 표시됨 */}
        </>
    );
};

export default Layout;