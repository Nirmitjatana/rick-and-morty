import React from "react";
import Card from "../Components/card.js";
import title from "../Assets/title.png";
import dab from "../Assets/dab.png";
import useCharacterSearch from "../utils/useCharacterSearch.js";
import { useState , useRef, useCallback } from 'react';


const Landing = () => {

    const [query, setQuery] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const {loading , error , characters , next} = useCharacterSearch(query, pageNumber);
 
    const observer = useRef()
  
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


    

    return(
        <>
            {/* title bar */}
            <div className='text-center'>
                <img src={title} alt="title" className="w-80 text-center mx-auto my-6"/>
                {/* search box: might convert to separate component */}
                <input type="text" placeholder="Search" className='outline-none px-5 py-2 bg-transparent border-t-0 border-l-0 border-r-0 border-2 border-solid border-[#79BB46] text-white w-[50vw] mb-10 mt-3'/>
                <img src={dab} alt="dab" className="fixed bottom-0 right-4 w-44"/>
            </div>
            <div className="grid grid-cols-2 gap-10 gap-x-0 mx-24">
                {/* cards here */}
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
                {loading && <div>Loading...</div>}
                {error && <div>Error</div>}
            </div>
        </>
    )
}

export default Landing;