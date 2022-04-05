import React from "react";
import { useNavigate } from 'react-router-dom';
// import { useContext } from "react";
// import { UserContext } from "../utils/UserContext";

const Card = (character) => {
    let navigate = useNavigate();
    // const { value, SetValue } = useContext(UserContext);
    const { name, image, species, status , id, gender } = character.character
    function handleClick(){
        navigate(`/character/${id}`)
        // SetValue(character)
        // console.log(value)
    }
    return(
        <div className="h-[200px] w-[100%] lg:h-[300px] lg:w-[600px] bg-[#49494950] flex flex-row z-20 cursor-pointer" onClick={() => handleClick()}>
            <img src={image} alt="icon"/>
            <div className="text-white mx-8 lg:mx-12 mt-4 lg:my-8 text-xl">
                {
                    name.length > 13 ? 
                    <h1 className="bangers text-sm lg:text-2xl absolute text-center">{name}</h1>
                    :
                    <h1 className="bangers text-sm lg:text-4xl absolute text-center">{name}</h1>
                }
                {/* <h1 className="bangers text-2xl absolute w-[200px] text-center">{name}</h1><br/> */}
                {/* information */}
                <div className="mt-8 lg:mt-16 text-xs lg:text-2xl">
                    <p className="pt-4"><span className="pangolin">Gender:</span> {gender}</p>
                    {
                        species.length > 12 ? 
                        <p className="pt-4 lg:text-[19px]"><span className="pangolin">Species:</span> {species}</p>
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