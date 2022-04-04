import React from "react";
import img from "../Assets/1.jpeg";

const Card = () => {
    return(
        <div className="h-[300px] w-[600px] bg-[#49494950] flex flex-row z-20">
            {/* character icon */}
            <img src={img} alt="icon"/>
            {/* text */}
            <div className="text-white mx-12 my-8 text-xl">
                {/* name */}
                <h1 className="bangers text-4xl absolute w-[200px] text-center">Rick sanchez</h1><br/>
                {/* information */}
                <div className="mt-16 text-2xl">
                    <p className="pb-4"><span className="pangolin">Gender:</span> Male</p>
                    <p className="pb-4"><span className="pangolin">Species:</span> Human</p>
                    <p className="pb-4"><span className="pangolin">Status:</span> <span className="text-[#79BB46]">Alive</span></p>
                </div>
            </div>
        </div>
    )
}
export default Card;