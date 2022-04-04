import React from "react";
import Card from "../Components/card.js";
import title from "../Assets/title.png";

const Landing = () => {
    return(
        <>
            {/* title bar */}
            <div className='text-center'>
                {/* add title here */}
                {/* <h1 className='text-white text-6xl custom-font text-center'>Rick and Morty</h1> */}
                <img src={title} alt="title" className="w-80 text-center mx-auto my-6"/>
                {/* search box: might convert to separate component */}
                <input type="text" placeholder="Search" className='outline-none px-5 py-2 bg-transparent border-t-0 border-l-0 border-r-0 border-2 border-solid border-[#79BB46] text-white w-[50vw] mb-10 mt-3'/>
                {/* bg icon to be inserted here*/}
                <h3 className="fixed bottom-5 right-4 text-white">bg</h3>
            </div>
            <div className="grid grid-cols-2 gap-10 gap-x-0 mx-24">
                {/* cards here */}
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </>
    )
}

export default Landing;