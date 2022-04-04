import React from "react";
import banner from "../Assets/banner.png"

const Character = () => {
    return (
        <>
            <div className="text-white bangers text-4xl mx-20 my-16 cursor-pointer"> &lt; back</div>
            <div className="fixed -bottom-10 -z-10 w-full">
                <img src={banner} alt="banner" className="mx-auto"/>
            </div>
            <div className="bg-[#49494980] flex flex-row z-20 h-[400px] w-[80%] mx-auto">
                <div>img</div>
                <div>info</div>
            </div>
            
        </>
    )
}

export default Character;