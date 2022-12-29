import React, { Fragment, useRef, useEffect } from "react";
import {Link} from "react-router-dom";

import audioIcon from '../../images/logo1.png'

export const Header = () => {

    const optionRecommended = useRef();

    useEffect(()=>{
        //optionRecommended.current.style.display = "none";
    }, []);

    return (
        <Fragment>
            <div className="ctr-header">
                <header>
                    <div className="header-info">
                        <h4 className="title">
                            <b>U</b>podcasts
                        </h4>  
                        <img src={audioIcon} alt="audio_icon"/>
                    </div>
                  
                    <ul className="nav-bar">
                        <Link to="/">
                            <li ref={optionRecommended} className="options">Recommended</li>
                        </Link>
                    </ul>
                </header>
            </div>  
            <style>{`
                .ctr-header {
                    background-color:#273746;
                    color:white;
                    height:70px;
                    width:100%;
                    position:fixed;
                    padding:10px 25px;
                    margin-top:-70px;
                    z-index:100000;

                    display:flex;
                    justify-content:flex-start;
                    align-items:center;
                }

                .ctr-header header {
                    background-color:none;
                    width:100%;
                    height:100%;
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    gap:4px 2px;
                }

                .ctr-header header .header-info {
                    background-color:none;
                    display:flex;
                    justify-content:flex-start;
                    align-items:center;
                    gap:4px 2px;
                }

                .ctr-header header .header-info .title {
                    font-weight:300;
                    font-size:24px;
                    height:50px;

                    display:flex;
                    justify-content:center;
                    align-items:center;
                }

                .ctr-header header .header-info .title b {
                    font-size:28px;
                    color:dodgerblue;
                }

                .ctr-header header .header-info img {
                    height:40px;
                    filter: drop-shadow(2px 2px 15px black);
                }

                .ctr-header header .nav-bar {
                    background-color:none;
                    display:inline-block;
                    list-style:none;
                    height:100%;
                    min-width:200px;
                }

                .ctr-header header .nav-bar a {
                    text-decoration:none; 
                }

                .ctr-header header .nav-bar .options {
                    background-color:none;
                    height:100%;
                    padding:10px;
                    color:white;
                    font-weight:bold;
                    text-decoration:none;

                    display:flex;
                    justify-content:center;
                    align-items:center;
                }

                .ctr-header header .nav-bar .options:hover {
                    color:dodgerblue;
                    transition:0.3s all ease-in;
                }
            `}</style>
        </Fragment>
    );
}