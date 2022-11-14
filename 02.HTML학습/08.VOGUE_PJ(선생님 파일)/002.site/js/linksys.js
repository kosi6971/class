// 보그 PJ 링크 시스템 JS - linksys.js

$(()=>{
    console.log("로딩 완료");

    /*
        로그인, 회원가입, 갤러리 아이콘 넣기
    */ 
    // 대상 : .sns a:last-child(마지막 카스링크)
    // 변경 내용 : 대상 요소 앞에 형제 요소로 a요소 삽입
    // 메서드 : before(요소) -> 선택 요소 앞에 형제 요소로 추가
    // -> 참고) after(요소) -> 선텍 요소 뒤에 형제 요소로 추가
    // 선택자 : last (제이쿼리전용)
    $(".sns a:last").before(`
        <a href="#" class="fi fi-laptop"><span class="ir">로그인</span></a>
        <a href="#" class="fi fi-user-secret"><span class="ir">회원가입</span></a>
        <a href="#" class="fi fi-camera"><span class="ir">갤러리</span></a>
    `);

    // sns 파트 a요소들에 툴팁넣기
    // each((순번, 요소)=>{구현부})
    $(".sns a").each((idx, ele)=>{
        // attr(속성명, 값) -> 값으로 자식요소인 .ir의 텍스트를 읽어감
        $(ele).attr("title", $(ele).children(".ir").text());
    });

    /*
        GNB 메뉴 파트 링크 셋팅
    */ 
    $(".gnb a").click(function(e){ // e - 이벤트 전달 변수
        // 기본 이동 막기
        e.preventDefault();

        // 클릭된 a요소의 글자 읽기
        let atxt = $(this).text().toLowerCase().trim();
        // toLowerCase() - 소문자로 변환
        // 참고) toUpperCase() - 대문자로 변환
        // trim() - 앞뒤 공백 제거
        console.log(atxt);

        // 서브페이지 이동
        if(atxt !== "search"){ // 검색이 아니면
            location.href = "category.html?cat="+encodeURIComponent(atxt);
            // 카테고리를 구분하기 위한 파라미터 키=값 쌍을 보낸다
            // cat=카테고리명
            // 이것을 받아서 페이지 셋업을 한다
            // 이렇게 데이더를 url로 전달하는 방식을 GET방식이라고 한다
            // 그런데 데이터 중 특수문자가 있으므로 (time & gem)
            // 이것을 보낼 때 encodeURIComponent()로 변환하여 보내고
            // 받는 곳에서는 decodeURIComponent()로 복원
        }
            

    });


});