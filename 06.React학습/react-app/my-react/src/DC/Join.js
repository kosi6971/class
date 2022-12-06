import React, {useState} from "react";

/*
    [ 후크 : Hook - 왜 필요한가? ]
    -> 1. 목적 - 어떤 특정 데이터가 변경될 때
    다른 것을 매칭하여 실시한으로 변경할 필요가 있을 경우
    간단하고 효과적으로 이것을 구현해주는 방법이다
    2. 구현 방법
        1) 상단에 후크를 import 한다 -> useState
        2) useState() 메서드를 사용한다
            코드법 : 
                배열 변수 = useState(초기값)
            일반형 :
                const [변수명, set변수명] = useState(초기값)
                -> set변수명 작성 시 변수명 첫 글자는 대문자로 처리
                -> set변수명(값) : 메서드 형태로 값을 셋팅한다(셋터와 비슷함)
        3) 작동 원리
            - useState에 쓴 초기값이 배열 변수 첫번째에 할당 된다
            - 코드에서 set변수명에 값을 할당하면 useState가 이것을 체크하여 다른 변경을
            하도록 메서드를 실행한다
        4) 사용 결과
            - 별도의 메서드 호출 없이 후크 상태 변수를 사용한 곳이
            자동으로 변경될 때마다 다시 갱신되는 것을 확인할 수 있다
*/

function Join(){

    // 요구사항 : 각 입력 항목에 맞는 유효성 검사를 입력하는 순간
    //            실시간으로 체크하여 결과를 화면에 리턴한다

    // [ 후크 useState 메서드 셋팅하기 ]
    // 1. 아이디 변수
    const [userId, setUsetId] = useState("");

    // 2. 에러 상태값 변수 : 초기값은 에러 아님(false)
    const [userIdError, setUsetIdError] = useState(false);

    // [ 유효성 검사 메서드 ]
    // 1. 아이디 유효성 검사
    const onChangeUserId = (e)=>{
        // 아이디 유효성 검사식(주의 : 따옴표로 싸지 말 것)
        const valid = /^[A-Za-z0-9+]{5,}$/;
        // 입력값 확인 : e.target -> 이벤트가 발생한 요소 자신
        console.log(e.target.value);
        // 에러 아님 상태 if문
        // 조건 : 유효성 검사 결과가 true인가? 에러 상태면 false
        // test() 메서드 JS기본 유효성 검사 기능
        // 유효성 검사식 변수.test(검사할 값) -> 통과 시 true, 불통과 시 false
        if(valid.test(e.target.value)) setUsetIdError(false);
        // 그 밖에 경우 에러 상태 true
        else setUsetIdError(true);
        // 실제 userId 변수값은 setUserId를 업데이트해야함
        setUsetId(e.target.value)
    };

    // [ error 상태 처리 메서드 ]


    return(
        <>
            <from>
                <div>
                    <label>
                        아이디를 입력하세요
                        <input type="text" maxLength="20" placeholder="아이디를 입력하세요" 
                        value={userId} onChange={onChangeUserId} />
                        {
                        /* 에러일 경우 메시지 보여주기 */
                        /* 조건 && 요소 -> 조건이 true일 때 요소 출력 */
                        userIdError &&
                        <div>
                            <small style={{color:"red", fontSize:"10px"}}>
                                사용자 아이디는 5자 이상 문자 또는 숫자를 포함해야합니다
                            </small>
                        </div>
                        }

                        {/* 
                        -> value={userId}는 serUserId를 통해 셋팅해야만
                        변경된 값이 실제 화면에 반영된다
                        -> onChange={onChangeUserUd} change 이벤트 발생 시
                        onChangeUserUd 함수가 호출된다

                        ! 유효성 검사 기준 :
                        사용자 아이디는 5자 이상 문자 또는 숫자를 포함해야합니다
                        */}
                    </label>
                </div>
            </from>
        </>
    );
};

export default Join;