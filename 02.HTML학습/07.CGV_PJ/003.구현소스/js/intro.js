window.addEventListener("DOMContentLoaded", ()=>{
    // 동영상이 끝나면 메인 페이지로 이동
    // 대상 : #myvid
    const myvid = document.getElementById("myvid");
    console.log(myvid);

    // 이벤트 : timeupdate
    // -> 동영상이 재생중일 때 발생하는 이벤트
    // -> html 이벤트 속성명 : ontimeupdate
    myvid.ontimeupdate = ()=>{
        // 비디오가 멈추었는가 -> myvid.paused
        // paused 속성 : 비디오 멈춤 상태면 true 아니면 false
        console.log(myvid.paused);
        if(myvid.paused === true){
            // 페이지 이동
            location.href = "main.html";
            // location.href = 이동주소
        }
    };

    // 들어가기 버튼 클릭 시 첫 페이지 이동하기
    // 대상 : #enter a
    const enter = document.querySelector("#enter a");
    enter.onclick = ()=>location.href = "main.html";

});