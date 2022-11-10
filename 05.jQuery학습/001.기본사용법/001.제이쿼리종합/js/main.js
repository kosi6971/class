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


        // 공통함수 : actMini()
        const actMini = (ele, seq, mtxt)=>{
            // 전달값(ele-버튼 요소, seq-방순번, mtxt-메시지)
            // 클릭된 버튼 제거
            $(ele).slideUp(300);
            // .slideUp(시간, 이징, 함수);
            // 높이값이 0되면서 애니, 0 된후 display: none 처리

            // 대사 제거 : .msg -> msg변수
            msg.fadeOut(300);
            // fadeOut(시간, 이징, 함수)
            // 서서히 사라짐, 사라진후 display: none;처리

            // 대사 함수 : msgFn() + 다음 버튼 보이기
            const msgFn = txt=>{
                msg.text(txt).fadeIn(300);
                // fadeIn(시간, 이징, 함수)
                // 서서히 나타남
                // 다음 버튼 보이기
                $(ele).next().delay(500).slideDown(300);
                // slideDown(시간, 이징, 함수);
                // 자동으로 원래 높이값 복원 애니
                // 최초 상태는 항상 display: none이다
            };
            
             // 이동하기
             // 위치 : li 8번방 -> bd변수에 모든 li가 있다
             let pos = [];
             // 대상 : li 몇 번째(seq)
             let room = bd.eq(seq);
             // top 위치값
             pos[0] = room.offset().top;
             // left 위치값 : 중앙 위치 보정(+li 절반-미니언즈 절반)
             pos[1] = room.offset().left+room.width()/2-mi.width()/2;
             console.log(pos);
            
             // 미니언즈 위치 이동하기
             // 매상 : .mi -> mi변수
             mi.animate({
                 top:pos[0]+"px",
                 left:pos[1]+"px",
             }, 600, "easeOutBounce", msgFn(mtxt));
             // animate({CSS설정}, 시간, 이징, 함수);
             // 모든 제이쿼리 애니메이션 메서드에는 끝난 후 실행함수가 있다(컬백함수)
        };
        // 들어가기 버튼 클릭 시
        btns.first().click(function(){
           actMini(this, 8, "와~ 아늑하다! 옆방으로 가보자!");
        })
        // 옆방으로! 버튼 클릭 시
        .next().click(function(){
            actMini(this, 9, "악!!!! 좀비! 어서 피하자!");
        })
        // 윗층으로 도망가! 버튼 클릭 시
        .next().click(function(){
            actMini(this, 7, "와~ 아늑하다! 옆방으로 가보자!");
        })
        // 다시옆방으로! 버튼 클릭 시
        .next().click(function(){
            actMini(this, 6, "와~ 아늑하다! 옆방으로 가보자!");
        })
        // 무서우니 윗층으로! 버튼 클릭 시
        .next().click(function(){
            actMini(this, 4, "와~ 아늑하다! 옆방으로 가보자!");
        })
        // 치료주사방으로! 버튼 클릭 시
        .next().click(function(){
            actMini(this, 2, "와~ 아늑하다! 옆방으로 가보자!");
        })
        // 3번방으로! 버튼 클릭 시
        .next().click(function(){
            actMini(this, 3, "와~ 아늑하다! 옆방으로 가보자!");
        })
        // 1번방으로! 버튼 클릭 시
        .next().click(function(){
            actMini(this, 1, "와~ 아늑하다! 옆방으로 가보자!");
        })
        // 헬기를 호출! 버튼 클릭 시
        .next().click(function(){
            actMini(this, 0, "와~ 아늑하다! 옆방으로 가보자!");
        })
});