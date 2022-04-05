import React from "react";
import Card from "../Components/card.js";
import title from "../Assets/title.png";
import dab from "../Assets/dab.png";
import useListSearch from "../hooks/useListSearch.js";
import { useState , useRef, useCallback } from 'react';
import { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const Landing = () => {

    const { load, SetLoad } = useContext(UserContext);
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const {loading , error , characters , next} = useListSearch(query, pageNumber);
    const observer = useRef()

    if(load){
        navigate("/loading")
    }

    const lastCharacterRef = useCallback(node => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && next) {
          setPageNumber(prev => prev + 1)
        }
      })
      if (node) observer.current.observe(node)
    },[loading, next])


    function handleSearch(e) {
        setQuery(e.target.value);
        setPageNumber(1);
    }
    // useEffect(() => {
    //     SetLoad(false)
    // })
    return(
        <>
            {/* title bar */}
            <div className='text-center'>
                <img src={title} alt="title" className="w-80 text-center mx-auto my-6"/>
                {/* search box: might convert to separate component */}
                <input type="text" value={query} placeholder="Morty you need to search for it" onChange={handleSearch} className='outline-none px-5 py-2 bg-transparent border-t-0 border-l-0 border-r-0 border-2 border-solid border-[#79BB46] text-white w-[80%] lg:w-[50vw] mb-10 mt-3'/>
                <img src={dab} alt="dab" className="fixed bottom-0 right-4 w-44"/>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-0 mx-5 lg:mx-24">
                {characters.map((character, index) => {
                    if(characters.length === index+1)
                        return (
                        <div ref={lastCharacterRef} key={character.id}>
                            <Card character={character}/>
                        </div>
                        )
                    else
                        return <Card key={character.id} character={character}/>
                    }
                )}
                
            </div>

            {/* error handling */}
            
            {loading && <div className="text-white text-center text-4xl my-10 z-100">Lemme load first!</div>}
            {error === 404 ?  
            <div className="text-center text-4xl my-10 text-[#79BB46] z-100">What are you searching for! GOD??</div> 
            : error !== 200  ? 
            <div className="text-white text-center text-4xl my-10 z-100">Well that was unexpected!</div> 
            : 
            <div></div>}
            <br />
            <br />
        </>
    )
}

export default Landing;