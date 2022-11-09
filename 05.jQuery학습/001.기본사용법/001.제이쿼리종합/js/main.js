// 미니언즈 좀비 탈출 애니 구현 JS - main.js

$(()=>{
    console.log("로딩완료");

    /*
        [ 요구사항 정리 ]
        1. 버튼을 클릭하면 미니언즈가 순서대로 특정 위치로 이동하며 메시지로 보여준다
        2. 각 위치별 좀비를 등장시킨다
        3. 맨 윗층에서 탈출할 때 헬기를 사용한다
        
        [ 변경 대상 ]
        1. 주인공 미니언즈
        2. 좀비 미니언즈들
        3. 주사기
        4. 헬기

        [ 이벤트 대상과 이벤트 대상 ]
        1. 이벤트 : 클릭이벤트
        2. 이벤트 대상 : 버튼들
        3. 기능구분 : 버튼글자(지시사항)
    */ 

        // 주인공들 변수에 할당
        // 미니언즈
        let mi = $(".mi");
        // 건물 li
        let bd = $(".building li");
        // 버튼들
        let btns = $(".btns button");
        // 메시지 박스
        let msg = $(".msg");
        // 좀비 미니언즈
        let mz1 = `<img src="images/mz1.png" alt="좀비1" class="mz">`;
        let mz2 = `<img src="images/mz2.png" alt="좀비2" class="mz">`;
        let zom = `<img src="images/zom.png" alt="좀비들" class="mz">`;
        // 주사기
        let inj = `<img src="images/inj.png" alt="주사기" class="inj">`;

        console.log(mi, bd, btns, msg);

        // 각 방에 번호 넣기
        // each((순서, 요소)=>{}) -> 요소의 개수만큼 순서대로 돌기
        // append(요소) -> 요소내부에 자식 요소 추가(이동)
        bd.each((idx, ele)=>{
            $(ele).text(idx);
            switch(idx){
                case 9:$(ele).append(mz1); break;
                case 7:$(ele).append(mz2); break;
                case 1:$(ele).append(zom); break;
                case 2:$(ele).append(inj); break;
            }
        });

        // 좀비는 모두 숨기기
        $(".mz").hide();
        // 시간 없는 hide()는 display: none;된다

        // 버튼 셋팅하기
        // 모든 버튼은 숨기고 첫번째 버튼만 보여라
        // 버튼.숨겨().첫번째().보여()
        btns.hide().first().show();

});