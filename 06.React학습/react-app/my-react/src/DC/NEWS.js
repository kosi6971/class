// DC 뉴스 페이지 JS
import React from "react";
import isrc from "./ImgSrc";

const NEW = ()=>{
    return(
        <>
            <h2>NEW 페이지</h2>
            <img src={isrc.news} />
        </>
    );
};

export default NEW;