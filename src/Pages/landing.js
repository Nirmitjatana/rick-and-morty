import React from "react";
import Card from "../Components/card.js";
import title from "../Assets/title.png";
import dab from "../Assets/dab.png";
import useCharacterSearch from "../utils/useCharacterSearch.js";


const Landing = () => {

    const { loading , error , characters , next } = useCharacterSearch();

    // console.log(loading , error , characters , next)
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
                {
                    characters.map(character => {
                            console.log(character)
                            return <Card/>
                        }
                    )
                }
            </div>
        </>
    )
}

export default Landing;