import React, {Fragment} from "react";
export const Home = () => {
    return(
        <Fragment>
            <div className="ctr-home">
                Home Page
            </div>
            <style>{`
                .ctr-home {
                    background:none;
                    padding:10px;
                    height:100%;
                }
            `}</style>
        </Fragment>
    );
};