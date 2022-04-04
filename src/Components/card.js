import React from "react";

const Card = (character) => {

    const { name, image, species, status ,id, gender } = character.character
    console.log(id)
    return(
        <div className="h-[300px] w-[600px] bg-[#49494950] flex flex-row z-20 cursor-pointer">
            <img src={image} alt="icon"/>
            <div className="text-white mx-12 my-8 text-xl">
                {
                    name.length > 13 ? 
                    <h1 className="bangers text-2xl absolute w-[200px] text-center">{name}</h1>
                    :
                    <h1 className="bangers text-4xl absolute w-[200px] text-center">{name}</h1>
                }
                {/* <h1 className="bangers text-2xl absolute w-[200px] text-center">{name}</h1><br/> */}
                {/* information */}
                <div className="mt-16 text-2xl">
                    <p className="pt-4"><span className="pangolin">Gender:</span> {gender}</p>
                    {
                        species.length > 12 ? 
                        <p className="pt-4 text-[19px]"><span className="pangolin">Species:</span> {species}</p>
                        :
                        <p className="pt-4"><span className="pangolin">Species:</span> {species}</p>
                    }
                    {
                        status === 'Dead' ? 
                        <p className="pt-4"><span className="pangolin">Status:</span> <span className="text-[#F62E2E]">{status}</span></p>
                        :
                        status === 'Alive' ?
                        <p className="pt-4"><span className="pangolin">Status:</span> <span className="text-[#79BB46]">{status}</span></p>
                        :
                        <p className="pt-4"><span className="pangolin">Status:</span> <span className="text-[#FFE70D]">{status}</span></p>
                        
                    }
                </div>
            </div>
        </div>
    )
}
export default Card;