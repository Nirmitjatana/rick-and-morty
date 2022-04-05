import React from "react";
import banner from "../Assets/banner.png"
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import useCharacterSearch from "../hooks/useCharacterSearch.js";

const Character = () => {
    let { id } = useParams();
    const {loading, error, character} = useCharacterSearch(id);
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/")
    }

    return (
        <>
        <div className="text-white bangers text-2xl lg:text-4xl mx-10 lg:mx-20 my-16 cursor-pointer" onClick={() => handleBack()}> &lt; back</div>
        <div className="fixed bottom-0 lg:-bottom-10 -z-10 w-full">
            <img src={banner} alt="banner" className="mx-auto w-[40%]"/>
        </div>
            {
                loading ? <h1 className="text-white text-center text-2xl lg:text-4xl my-10">Lemme load! wubba lubba dub dub.</h1> : 
                <div className="bg-[#49494980] lg:flex lg:flex-cols-2 z-20 lg:h-[400px] lg:w-fit w-[300px] h-[600px] mx-auto">
                    <div className="lg:w-[400px]">
                        <img src={character.image} alt="icon" className="lg:w-[400px]"/>
                    </div>

                    <div className="text-white lg:w-[600px]"> 
                        <div className="text-center">
                            <p className="bangers text-3xl lg:text-6xl my-3 lg:my-8">{character.name}</p>
                        </div>
                        <div className="lg:text-2xl grid grid-cols-2 text-center gap-y-8 lg:my-12 mr-3">
                            <p><span className="pangolin">Gender:</span> {character.gender}</p>
                            <p><span className="pangolin">Species:</span> {character.species}</p>
                            {
                                character.status === 'Dead' ? 
                                <p><span className="pangolin">Status:</span> <span className="text-[#F62E2E]"> {character.status}</span></p>
                                :
                                character.status === 'Alive' ?
                                <p><span className="pangolin">Status:</span> <span className="text-[#79BB46]"> {character.status}</span></p>
                                :
                                <p><span className="pangolin">Status:</span> <span className="text-[#FFE70D]"> {character.status}</span></p>
                            
                            }
                            <p className="lg:text-xl"><span className="pangolin">Number of Episodes:</span> {character.episode.length}</p>
                            <p className="lg:text-xl"><span className="pangolin">Origin:</span> {character.origin.name}</p>
                            <p className="lg:text-xl"><span className="pangolin">Location:</span> {character.location.name}</p>
                        </div>
                    </div>
                </div> }
            {error === 404 ?  
            <div className="text-center text-4xl my-10 text-[#79BB46]">You have cheat codes or what?</div> 
            : error !== 200  ? 
            <div className="text-white text-center text-4xl my-10">Well that was unexpected!</div> 
            : 
            <div></div>}

        </>
    )
}

export default Character;