import React, { Fragment } from "react";

export const Footer = () => {
    return (
        <Fragment>
            <div className="ctr-footer">
                <footer>
                   
                </footer>
            </div>  
            <style>{`
                .ctr-footer {
                    min-height:200px;
                    background-color:#1C2833;
                    color:white;
                    padding:10px 25px;

                    display:flex;
                    justify-content:flex-start;
                    align-items:center;
                }
            `}</style>
        </Fragment>
    );
}