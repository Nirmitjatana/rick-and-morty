import React from "react";
import loading from "../Assets/loading.png"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../utils/UserContext";


const Landing = () => {

    const navigate = useNavigate();

    const { load, SetLoad } = useContext(UserContext);

    useEffect(() => {
        setTimeout(()=>{
            if(!load){
                navigate("/")
            }
        },1000
    )})
        
        SetLoad(false)
    // }, [load])
    
    // console.log(load)

    return (
        // <div className="text-white">load</div>
        <div>
            <img src={loading} alt="loading" className="w-[50%] mx-auto"/>
        </div>
    )
}
export default Landing;