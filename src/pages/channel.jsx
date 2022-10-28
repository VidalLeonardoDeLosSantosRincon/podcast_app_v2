import React, {Fragment, useEffect, useState} from 'react';
import { useParams } from 'react-router';

//contexts
import { ChannelContext } from '../contexts/channels/channelContext';

//requests
import { getChannel } from '../requests/channels/get_channel';
import { getChannelAudioClips } from '../requests/channels/get_channels_audio_clips';

export const Channel = () => {

    const {id} = useParams();
    const [currentChannel, setCurrentChannel] = useState(null);
    const [currentChannelAudioClips, setCurrentChannelAudioClips] = useState(null);
    const [showFullDescription, setShowFullDescription] = useState(false);
   
    const getCurrentChannel =  async (channel_id = 0) => {
        let currentChannel = await getChannel(channel_id);
        let newChannel = null;

        if(currentChannel.id){
            newChannel = Object.freeze({
                id: currentChannel.id,
                title: currentChannel.title,
                description: currentChannel.description,
                description_2: currentChannel.formatted_description,
                category: currentChannel.category,
                logo: currentChannel.urls.logo_image.original,
                banner: currentChannel.urls.banner_image.original,
                style: currentChannel.channel_style,
                created: currentChannel.created_at,
                updated: currentChannel.updated_at,
                clips_counter: currentChannel.channel_clips_count
            });
        }

        setCurrentChannel(newChannel);
    };

    const getCurrentChannelAudioClips = async (channel_id = 0) => {
        const channel_audios = await getChannelAudioClips(channel_id);
        setCurrentChannelAudioClips(channel_audios);
    };

    const resumeText = (text = '', limit = 150) => {
        let str = '';
        let show = false;

        if(text.length >= limit && !showFullDescription){
            str = <> {`${text.substring(0, limit)}... `}</>
            show = true;
        } else if(text.length >= limit && showFullDescription){
            str = text;
            show = true;
        }else {
            str = text;
            show = false;
        } 
        return {str, show};
    };


    useEffect(() => {
        getCurrentChannel(id);
        getCurrentChannelAudioClips(id);
    }, [id]);


    if(!currentChannel) return null;
    
    const description = resumeText(currentChannel.description);

    const dataContext = Object.freeze({ channel: currentChannel, audio_clips : currentChannelAudioClips });

    return (
        <ChannelContext.Provider value={{...dataContext}}>
            <Fragment>
                <div className="ctr-channels">
                    <div className="ctr-banner" style={{backgroundImage: `url(${currentChannel.banner})`}}>
                        
                    </div>
                    <div className='profile-channel'>
                        <div className='logo-box'>
                            <img className='channel-logo' src={currentChannel.logo} alt="channel_logo"/>
                            <h4 className='title'>{currentChannel.title}</h4>
                            <div className="category-box">
                                <span className="category">
                                    {currentChannel.category.title}
                                </span>
                            </div>
                        </div>
                        <div className='info-box'>
                            <p className='description'>
                                {description.str}
                                {
                                    (description.show)?
                                        (
                                            (showFullDescription)? 
                                                <Fragment>
                                                    &nbsp;&nbsp;<span className='show-description' onClick={() => setShowFullDescription(false)}>
                                                        hide
                                                    </span>
                                                </Fragment>
                                                : 
                                                <Fragment>
                                                    &nbsp;<span className='show-description' onClick={() => setShowFullDescription(true)}>
                                                        show more
                                                    </span>
                                                </Fragment>
                                        )
                                    : ("")
                                }
                            </p>
                        </div>
                    </div>
                </div>
                <style>{`
                    .ctr-channels {
                        background-color:white;
                        width:100%;
                        height:100vh;
                    }

                    .ctr-channels .ctr-banner {
                        background-color:lightgray;
                        min-height:500px;
                        background-size:100% 500px;
                        background-repeat: no-repeat;
                        background-position: center;
                        box-shadow:2px 2px 20px rgba(0, 0, 0, 0.1);
                    }   

                    .ctr-channels .profile-channel {
                        background-color:rgba(0, 0, 0, 0.03);
                        min-height:200px;
                        padding:10px 30px;

                        display:flex;
                        flex-direction:column;
                        justify-content:flex-start;
                        align-items:center;
                        gap:5px;
                    }
                    
                    .ctr-channels .profile-channel .logo-box {
                        background-color:none;
                        padding:5px;
                        margin-top:-125px;

                        display:flex;
                        flex-direction:column;
                        justify-content:flex-start;
                        align-items:center;
                        gap:0px;
                    }

                    .ctr-channels .profile-channel .logo-box .channel-logo {
                        height:250px;
                        border:8px solid white;
                        box-shadow:2px 2px 20px rgba(0, 0, 0, 0.2);
                    }

                    .ctr-channels .profile-channel .logo-box .title {
                        font-size:24px;
                        font-weight:300;
                    }

                    .ctr-channels .profile-channel .logo-box .category-box {
                        background-color:none;
                        width:100%;
                        padding:2px 5px;

                        display:flex;
                        justify-content:center;
                        align-items:flex-start;
                    }

                    .ctr-channels .profile-channel .logo-box .category-box .category {
                        background-color:dodgerblue;
                        color:white;
                        padding:2px 10px;
                        border-radius:50px;
                        font-size:12px;
                    }

                    .ctr-channels .profile-channel .info-box {
                        background-color:none;
                        min-height:100px;
                        max-width:500px;
                        padding:5px 10px;

                        display:flex;
                        justify-content:center;
                        align-items:flex-start;
                        gap:5px;
                    }

                    .ctr-channels .profile-channel .info-box .description {
                        font-size:16px;
                        font-weight:300;
                        text-align:center;
                    }

                    .ctr-channels .profile-channel .info-box .description .show-description {
                        color: dodgerblue;
                        cursor: pointer;
                        textDecoration: underline;
                    }
                `}</style>
            </Fragment>
        </ChannelContext.Provider>
    );
};