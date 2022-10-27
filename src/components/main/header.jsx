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
                    min-height:60px;
                    background-color:#273746;
                    color:white;
                    padding:10px 25px;

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