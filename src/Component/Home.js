import React, { useCallback } from 'react';
import { LiaHtml5 } from "react-icons/lia";
import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoRedux } from "react-icons/bi";
import { GiHook } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    
    const handleOnClick = useCallback((data) => {
        navigate(`/quiz`, { state: { myData: data } });
        localStorage.removeItem("score");
        localStorage.removeItem("selected");
    }, [navigate]); 

    return (
        <div className='w-100 d-flex justify-content-center flex-column align-items-center'>
            <div className="navbar">
                <div className='textlogo'>Msh<span className='mshcolour'>quiz</span></div>
            </div>

            <div className="row g-3 ms mt-3">
                <div className="col-12 col-sm-6 col-lg-4">
                    <div onClick={() => handleOnClick('HTML')} className="msh">
                        <LiaHtml5 className="text mb-1 html" /><span className="h4 an">HTML</span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div onClick={() => handleOnClick('CSS')} className="msh">
                        <FaCss3Alt className="text mb-1 css" /><span className="h4 an">CSS</span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div onClick={() => handleOnClick('jawascript')} className="msh">
                        <FaNodeJs className="text mb-1 js" /><span className="h4 an">JS</span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div onClick={() => handleOnClick('react')} className="msh">
                        <FaReact className="text mb-1 react" /><span className="h4 an">REACT</span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div onClick={() => handleOnClick('hook')} className="msh">
                        <GiHook className="text mb-1 hook" /><span className="h4 an">HOOK</span>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div onClick={() => handleOnClick('Redux')} className="msh">
                        <BiLogoRedux className="text mb-1 redux" /><span className="h4 an">REDUX</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
