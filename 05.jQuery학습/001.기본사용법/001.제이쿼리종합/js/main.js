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
        const actMini = (ele, seq, fn)=>{
            // 전달값(ele-버튼 요소, seq-방순번, fn-콜백함수)
            // 클릭된 버튼 제거
            $(ele).slideUp(300);
            // .slideUp(시간, 이징, 함수);
            // 높이값이 0되면서 애니, 0 된후 display: none 처리

            // 대사 제거 : .msg -> msg변수
            msg.fadeOut(300);
            // fadeOut(시간, 이징, 함수)
            // 서서히 사라짐, 사라진후 display: none;처리

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
             }, 600, "easeOutBounce", fn); // 메시지 호출 : 콜백함수
             // animate({CSS설정}, 시간, 이징, 함수);
             // 모든 제이쿼리 애니메이션 메서드에는 끝난 후 실행함수가 있다(컬백함수)
        };
        // 들어가기 버튼 클릭 시
        btns.first().click(function(){
            // 이동 후 함수
            let fn = ()=>{
                msg.text("와~ 아늑하다! 옆방으로 가보자!").fadeIn(300);
                // fadeIn(시간, 이징, 함수)
                // 서서히 나타남
                // 다음 버튼 보이기
                $(this).next().delay(500).slideDown(300);
                // slideDown(시간, 이징, 함수);
                // 자동으로 원래 높이값 복원 애니
                // 최초 상태는 항상 display: none이다
            };

           actMini(this, 8, fn);
        })
        // 옆방으로! 버튼 클릭 시
        .next().click(function(){
            // 일반익명함수로 해야 this 버튼이다
            // ()=>{}는 내부의 this가 바깥으로 나가 window가 잡힌다
            // 이동 후 함수
            let fn = ()=>{
                bd.eq(9).find(".mz").delay(1000).fadeIn(1000, ()=>{
                    // function(){} - 내부의 this의마가 달라진다
                    // 화살표함수는 바깥을 싸고 있는 function 익명함수의 주인인 this의 this이다
                    msg.text("악!!!! 좀비! 어서 피하자!").css({
                        left:"-87%"
                    }).fadeIn(300);
                    $(this).next().delay(500).slideDown(300);
                });
            };

           actMini(this, 9, fn);
        })
        // 윗층으로 도망가! 버튼 클릭 시
        .next().click(function(){
            // 이동 후 함수
            let fn = ()=>{
                msg.text("여긴 없겠지?").fadeIn(300);

                bd.eq(7).find(".mz").delay(1000).fadeIn(1000, ()=>{
                    msg.text("악! 여기도!");
                    $(this).next().delay(500).slideDown(300);
                });
            };

            actMini(this, 7, fn);
        })
        // 다시옆방으로! 버튼 클릭 시
        .next().click(function(){
            // 이동 후 함수
            let fn = ()=>{
                msg.text("무서워..").fadeIn(300).delay(1000).fadeIn(300,()=>{
                // 1초 지연(지연시간은 애니메이션메서드 앞)
                    msg.text("음...윗층으로 가자...").fadeIn(300);
                    $(this).next().delay(500).slideDown(300);
                });    
            };

            actMini(this, 6, fn);
        })
        // 무서우니 윗층으로! 버튼 클릭 시
        .next().click(function(){
            // 이동 후 함수
            let fn = ()=>{
                // 무.서.워...메시지
                msg.text("무").fadeIn(200).delay(500)
                .fadeIn(200, ()=>msg.text("무.")).delay(500)
                .fadeIn(200, ()=>msg.text("무.서")).delay(500)
                .fadeIn(200, ()=>msg.text("무.서.")).delay(500)
                .fadeIn(200, ()=>msg.text("무.서.워")).delay(500)
                .fadeIn(200, ()=>msg.text("무.서.워.")).delay(500)
                .fadeIn(200, ()=>msg.text("무.서.워..")).delay(500)
                .fadeIn(200, ()=>msg.text("무.서.워...")).delay(500)
                .fadeIn(200, ()=>{
                    // 7번 방 좀비가 올라와 공격
                    bd.eq(7).find(".mz").animate({ // 윗 층으로 올라온다
                        bottom:bd.eq(7).height()+"px"
                    }, 500, "easeOutElastic").delay(500).
                    animate({
                        right:(bd.eq(7).width()*1.2)+"px"
                    }, 1000, "easeOutBounce", ()=>{
                        // 물린 후 대사
                        msg.css({left:"-65%"}).text("물렸당! 어서 치료를!");
                        // 미니언즈 좀비 이미지 변경
                        setTimeout(()=>{
                            mi.find("img").attr("src", "images/mz1.png")
                            .css({filter:"grayscale(100%)"});

                            $(this).next().delay(500).slideDown(300);
                        }, 1000);
                    })
                })
            };

            actMini(this, 4, fn);
        })
        // 치료주사방으로! 버튼 클릭 시
        .next().click(function(){
            // 이동 후 함수
            let fn = ()=>{
                // 주사위 돌기(animate는 transform이 작동하지 않는다)
                $(".inj").css({
                    transform:"rotate(-150deg)", // 반시계 방향 회전
                    transition:".5s .5s", // 0.5초 대시 0.5초간 작동
                    zIndex:"9999" // 미니언즈보다 위
                });

                // 미니언즈로 치료(1초후)
                setTimeout(()=>{
                    // 이미지 변경
                    mi.find("img").attr("src", "images/m2.png").css({
                        filter:"grayscale(0)"
                    });
                    // 대사 변경
                    msg.html("이제 조금만 더 가면 탈출이다!")
                    .css({left:"-84%"}).fadeIn(1000)

                    // 주사기 제거
                    $(".inj").hide();

                    $(this).next().delay(500).slideDown(300);
                }, 1000);
            };

            actMini(this, 2, fn);
        })
        // 3번방으로! 버튼 클릭 시
        .next().click(function(){
            // 이동 후 함수
            let fn = ()=>{
                msg.html("어서 윗층으로 가자!").fadeIn(200);

                $(this).next().delay(500).slideDown(300);
            };

            actMini(this, 3, fn);
        })
        // 1번방으로! 버튼 클릭 시
        .next().click(function(){
            // 이동 후 함수
            let fn = ()=>{
                msg.html("이제 곧 탈출이다!").fadeIn(200);

                $(this).next().delay(500).slideDown(300);
            };

            actMini(this, 1, fn);
        })
        // 헬기를 호출! 버튼 클릭 시
        .next().click(function(){
            // 이동 후 함수
            let fn = ()=>{
                // 메시지 보이기
                msg.html("도와줘요!").fadeIn(200);

                // 1번방 단체 좀비을 움직임
                bd.eq(1).find(".mz").fadeIn(300).animate({
                    right: bd.eq(1).width()+"px"
                }, 1500, "easeInExpo");

                // 헬기 등장
                $(".heli").animate({
                    left:"20%"
                }, 1800, "easeOutBack", function(){ // this는 .heli
                    // 헬기 도착 후 탑승이미지로 변경
                    $(this).attr("src", "images/heli2.png");
                    // 원본 미니언즈 제거
                    mi.hide();
                })
                .delay(500).animate({
                    left:"70%"
                }, 5500, "easeInOutExpo", function(){
                    $(this).attr("src", "images/heli3.png");
                })
                .delay(300).animate({
                    left:"100%"
                }, 10000, "linear", ()=>{
                    // 건물 철거
                    // 간판 떨어뜨리기
                    // 중간까지 떨어뜨리기 -> 간판에 class "on"주기
                    let tit = $(".tit");
                    tit.addClass("on");
                    setTimeout(()=>{
                        // -> 간판에 class "on2"주기
                        tit.addClass("on2")
                    }, 3000);

                    // 빌딩 무너뜨리기
                    // 간판 떨어진 후 6포 후 실행
                    setTimeout(()=>{
                        bd.parent().addClass("on")
                    }, 6000);
                });
            };

            actMini(this, 0, fn);
        });

        // 간판에 마우스 오버 시/아웃 시 색변경
        // hover(함수1, 함수2)
        // 함수1 - 오버 시, 함수2 - 아웃 시
        $(".tit").hover(function(){ // 오버 시
            $(this).css({
                backgroundColor:"blue",
                color:"cyan"
            });
        }, function(){ // 아웃 시
            $(this).css({
                backgroundColor:"pink",
                color:"yellow"
            });
        });

});