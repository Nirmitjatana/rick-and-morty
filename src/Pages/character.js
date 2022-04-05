import React from "react";
import banner from "../Assets/banner.png"
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import useCharacterSearch from "../hooks/useCharacterSearch.js";
// import { useState } from "react";
import { useEffect } from "react";
const Character = () => {
    let { id } = useParams();

    // const [ch, SetCharacter] = useState('');
    
    useEffect(() => {
        console.log(id)
        // console.log(ch)
    },[id])
    // try{
        const {loading, error, character} = useCharacterSearch(id);

    // }
    // catch{

    // }
    
    // SetCharacter(ch);
    console.log(character)
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/")
    }

    return (
        <>
        <div className="text-white bangers text-4xl mx-20 my-16 cursor-pointer" onClick={() => handleBack()}> &lt; back</div>
            <div className="fixed -bottom-10 -z-10 w-full">
                <img src={banner} alt="banner" className="mx-auto"/>
        </div>
            {
                loading ? <h1>loading</h1> : <div className="bg-[#49494980] flex flex-row z-20 h-[400px] w-[1100px] mx-auto">
                <div>
                    <img src={character.image} alt="icon" className="w-[400px] relative"/>
                </div>
                <div className="text-white"> 
                    <div className="text-center w-[700px]">
                        <p className="bangers text-6xl my-8">{character.name}</p>
                    </div>
                    <div className="text-2xl grid grid-cols-2 text-center gap-y-8 my-12">
                        <p><span className="pangolin">Gender:</span> {character.gender}</p>
                        <p><span className="pangolin">Species:</span> {character.species}</p>
                        {
                            character.status === 'Dead' ? 
                            <p><span className="pangolin">Status:</span> <span className="text-[#F62E2E]">{character.status}</span></p>
                            :
                            character.status === 'Alive' ?
                            <p><span className="pangolin">Status:</span> <span className="text-[#79BB46]">{character.status}</span></p>
                            :
                            <p><span className="pangolin">Status:</span> <span className="text-[#FFE70D]">{character.status}</span></p>
                        
                        }
                        <p><span className="pangolin">Number of Episodes:</span>{character.episode.length}</p>
                        <p><span className="pangolin">Origin:</span>{character.origin.name}</p>
                        <p><span className="pangolin">Location:</span>{character.location.name}</p>
                    </div>
                </div>
            </div> }

        </>
    )
}

export default Character;