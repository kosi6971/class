// 영화 정보 클래스 JS - mvInfo.js

class MovieInfo{
    // 생성자 메서드 : 주로 속성만 셋팅
    constructor(tit, sum, dir, act, des){
        this.제목 = tit;
        this.개요 = sum;
        this.감독 = dir;
        this.출연 = act;
        this.문구 = des;
    }

    // 만들고자 하는 메서드는 따로 생성
    메서드(msg){
        return `영화 ${this.제목}의 감독님 이름은 ${this.감독}, 나의 응원은 ${msg}`;
    }
}

export {MovieInfo};