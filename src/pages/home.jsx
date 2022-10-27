import React, {Fragment} from "react";

//components
import { RecommendedChannels } from "../components/channels/recommended";

export const Home = () => {
    return(
        <Fragment>
            <div className="ctr-home">
                <RecommendedChannels/>
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