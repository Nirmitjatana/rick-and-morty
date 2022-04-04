import React from "react";


const Landing = () => {
    return(
        <>
            {/* title bar */}
            <div className='w-full text-center border-solid border-2 border-[#79BB46]'>
                {/* add image here */}
                <h1 className='text-white text-6xl custom-font text-center'>Rick and Morty</h1>
                {/* search box: might convert to separate component */}
                <input type="text" placeholder="Search" className='outline-none px-5 py-2 bg-transparent border-t-0 border-l-0 border-r-0 border-2 border-solid border-[#79BB46] text-white w-[50vw] my-10'/>
                <h3 className="absolute bottom-5 right-4 text-white">bg</h3>
            </div>
            <div>
                {/* cards here */}

            </div>
        </>
    )
}

export default Landing;