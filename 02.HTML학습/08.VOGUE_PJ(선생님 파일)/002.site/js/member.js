// 보그 PJ 회원가입 페이지 JS - member.js

$(()=>{
    /*
        [ 사용자 입력폼 유효성 검사 ]
        - 이벤트 종류 : blur(포커스가 빠질 때 발생)
        - 제이쿼리 이벤트 메서드 : blur()
        - 이벤트 대상 : 
        -> id가 'email2'가 아니고 class가 'search'가 아닌 type이 'text인 입력 요소 input
        과 함께 type이 'password'인 입력 요소 input

        ->>> 제이쿼리 선택법:
        input[type=text][id!=email2][class!=search],
        input[type=password]
        >>> 대괄호는 속성 선택자(CSS 원래 문법)
            != 같지 않다(제이쿼리 전용)
    */ 
   $(`input[type=text][id!=email2][class!=search],
   input[type=password]`).blur(function(){

        // 모든 공백 제거 함수
        // get rid of space -> 공백을 제거하라
        const groSpace = cv => cv.replace(/\s/g, "");
        // 원형 : (cv) => {return cv.replace(/\s/g, "");}
        // 정규식 : 슬래쉬(/)사이에 표현, \s 스페이스 문자
        // g는 모두 찾으라는 global(전역) 플래그 문자
        // -> 플래그 문자 Flag String 즉, 표기하면 작동하는 문법

        // 방금 블러가 발생한 요소의 id는?
        let cid = $(this).attr("id");
        // cid는 current id 즉, 현재 아이디라는 뜻으로 작명

        // 블러가 발생한 요소의 입력값은?
        let cv;
        // 이름일 때 앞뒤 공백만 제거
        if(cid==="mnm") cv = $(this).val().trim();
        // 기타 경우엔 모든 공백 제거
        else cv = groSpace($(this).val());
        // cv는 current value 즉, 현재값이라는 뜻으로 작명
        // trim() 문자열 앞뒤 공백 제거 메서드

        // 제거된 공백 문자로 입력창에 다시 출력
        $(this).val(cv);
        // val(값) -> 값 넣기

       /*
            빈값 여부 체크하기
       */
      if(cv === ""){
        // 메시지 출력
        $(this).siblings(".msg").text("필수 입력");
        // siblings(요소) - 다른 형제 요소 중 특정 요소 선택
        // siblings() - 아무 값도 안 쓰면 다른 형제 요소 모두 선택
      }

      /*
        아이디일 경우 유효성 검사
        - 검사 기준 : 영문자로 시작하는 6~20글자 영문자 / 숫자
      */
      else if(cid === "mid"){
        // console.log("검사 결과 : ", vReg(cv, cid));
        if(!vReg(cv, cid)){ // 불통과 시
            // false일때 들어오려면 !(not)연산자로 결과 뒤집기한다
            $(this).siblings(".msg").text("영문자로 시작하는 6~20글자 영문자 / 숫자").removeClass("on");
        }
        else{ // 검사 결과 통과 시
            $(this).siblings(".msg").text("완료").addClass("on");
        }
      }

      /*
        비밀번호일 경우 유효성 검사
        - 검사 기준 : 특수문자,문자,숫자포함 형태의 5~15자리
      */
      else if(cid === "mpw"){
            // console.log("검사 결과 : ", vReg(cv, cid));
            if(!vReg(cv, cid)){ // 불통과 시
                // false일때 들어오려면 !(not)연산자로 결과 뒤집기한다
                $(this).siblings(".msg").text("특수문자,문자,숫자포함 형태의 5~15자리");
            }
            else{
                $(this).siblings(".msg").empty();
            }
      }

      /*
        비밀번호확인일 경우 유효성 검사
        - 검사 기준 : 특수문자,문자,숫자포함 형태의 5~15자리
      */
        else if (cid === "mpw2") {
            if (cv !== $("#mpw").val()) {
                // 메시지 띄우기
                $(this).siblings(".msg").text("비밀번호가 일치하지 않습니다!");
            } ///////// if : 불통과시 //////////
            else {
                // 검사결과가 통과시 /////
                // 메시지 지우기
                $(this).siblings(".msg").empty();
            } ////////// else : 통과시 ///////////
        }

        /*
        이메일 경우 유효성 검사
        - 검사 기준 : 이메일 형식에 맞는지 여부 검사
        */
        else if(cid === "email1"){
            let comp = eml1.val() + "@" + (selecml.val() === "free" ? eml2.val : selecml.val());
            // 선택박스의 값이 "직접 입력"일 경우,
            // 이메일 뒷주소가 입력창 input#email2의 값을 읽어가고
            // 아니면 선택박스(#seleml)값을 넣는다
            console.log(comp);
        }

      // 통과 시 메시지 지우기
      else{
        // 메시지 지우기
        $(this).siblings(".msg").empty();
        // empty 내용 지우기 메서드
      }
   });

   let eml1 = $("#email1");
   let eml2 = $("#email2");
   let selecml = $("#seleml");
});

/*////////////////////////////////////////////////////////
    함수명: vReg (validation with Regular Expression)
    기능: 값에 맞는 형식을 검사하여 리턴함
    (주의: 정규식을 따옴표로 싸지말아라!-싸면문자가됨!)
    */////////////////////////////////////////////////////////
    function vReg(val, cid) {
        // val - 검사할값, cid - 처리구분아이디
        // //console.log("검사:"+val+"/"+cid);

        // 정규식 변수
        let reg;

        // 검사할 아이디에 따라 정규식을 변경함
        switch (cid) {
            case "mid": // 아이디
                reg = /^[a-z]{1}[a-z0-9]{5,19}$/g;
                // 영문자로 시작하는 6~20글자 영문자/숫자
                // /^[a-z]{1} 첫글자는 영문자로 체크!
                // [a-z0-9]{5,19} 첫글자 다음 문자는 영문 또는 숫자로
                // 최소 5글자에서 최대 19글자를 유효범위로 체크!
                // 첫글자 한글자를 더하면 최소 6글자에서 최대 20글자체크!
                break;
            case "mpw": // 비밀번호
                reg = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
                // 특수문자,문자,숫자포함 형태의 5~15자리
                // (?=^.{5,15}$) 시작부터 끝까지 전체 5~15자릿수 체크!
                // (?=.*\d) 숫자 사용체크!
                // (?=.*[a-zA-Z]) 영문자 대문자 또는 소문자 사용체크!
                // (?=.*[!@#$%^&+=]) 특수문자 사용체크!
                break;
            case "eml": // 이메일
                reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
                // 이메일 형식에 맞는지 검사하는 정규식
                break;
        } //////////// switch case문 //////////////////

        // //console.log("정규식:"+reg);

        // 정규식 검사를 위한 JS메서드 
        // -> 정규식.test(검사할값) : 결과 true/false
        return reg.test(val); //호출한 곳으로 검사결과리턴!

    }