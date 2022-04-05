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
        },1500
    )})    
    SetLoad(false)
    return (
        <div>
            <img src={loading} alt="loading" className="w-[50%] mx-auto lg:mt-0 mt-[50%]"/>
        </div>
    )
}
export default Landing;