import React, { Fragment, useState, useEffect } from "react";

//components
import { Thumbnail } from "./thumbnail";

//requests
import { getRecommendedChannels } from "../../requests/channels/get_recommended";

export const RecommendedChannels = () => {
    const [channels, setChannels] = useState([]);
    
    const getRecommended = async () => {
        const response = await getRecommendedChannels(); 
        setChannels(response);
    };
   
    useEffect(()=>{
        getRecommended();
    }, []);

    return(
        <Fragment>
            <div className="ctr-recommended">
                <h4 className="title">Recommended Channels</h4>
                <div className="recommended-channels">
                    {
                        channels.map((channel, index) => {

                            let newChannel = Object.freeze({
                                                    id: channel.id,
                                                    title: channel.title,
                                                    description: channel.description,
                                                    description_2: channel.formatted_description,
                                                    logo: channel.urls.logo_image.original,
                                                    banner: channel.urls.banner_image.original,
                                                    type: channel.type,
                                                    style: channel.channel_style,
                                                    created: channel.created_at
                                                });

                            return (
                                    <Fragment key={`channel_${index}`}>
                                        <Thumbnail channel={newChannel}/>
                                    </Fragment>
                                );
                        })
                    }
                </div>
            </div>
            <style>{`
                .ctr-recommended {
                    background-color:none;
                    padding:5px;
                    padding-bottom:50px;
                }

                .ctr-recommended > .title {
                    color:white;
                    font-size:22px;
                    font-weight:300;
                    text-align:left;
                    margin:10px 0;
                }

                .ctr-recommended .recommended-channels {
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:center;
                    align-items:flex-start;
                    gap:20px;
                }
            `}</style>
        </Fragment>
    );
};