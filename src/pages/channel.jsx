import React, {Fragment, useEffect, useState} from 'react';
import { useParams } from 'react-router';

//styles
import "./css/channel.css";

//contexts
import { ChannelContext } from '../contexts/channels/channelContext';

//requests
import { getChannel } from '../requests/channels/get_channel';
import { getChannelAudioClips } from '../requests/channels/get_channels_audio_clips';

//components
import { ChannelAudioClips } from '../components/channels/audio_clips';

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

    const dataContext = Object.freeze({ currentChannel, audio_clips : currentChannelAudioClips });

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
                    <ChannelAudioClips/>    
                </div>
            </Fragment>
        </ChannelContext.Provider>
    );
};