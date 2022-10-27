import React, { Fragment } from "react";

import audioIcon from '../../images/logo1.png'

export const Header = () => {
    return (
        <Fragment>
            <div className="ctr-header">
                <header>
                    <h4 className="title">
                        <b>U</b>podcasts
                    </h4>  
                    <img src={audioIcon} alt="audio_icon"/>
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
                    display:flex;
                    justify-content:flex-start;
                    align-items:center;
                    gap:4px 2px;
                }

                .ctr-header header .title {
                    font-weight:300;
                    font-size:24px;
                    height:50px;

                    display:flex;
                    justify-content:center;
                    align-items:center;
                }

                .ctr-header header .title b {
                    font-size:28px;
                    color:dodgerblue;
                }

                .ctr-header header img {
                    height:40px;
                    filter: drop-shadow(2px 2px 15px black);
                }
            `}</style>
        </Fragment>
    );
}