import React, {Fragment, useContext, useState} from 'react';

//css
import "./css/audio_clips.css";

//contexts
import { ChannelContext } from '../../contexts/channels/channelContext';
import { AudioClipContext } from '../../contexts/audio_clips/audioClipContext';

//images
import audioIcon from '../../images/audio_icon.png';

//components
import { AudioPlayer } from '../audio_clips/audio_player';

export const ChannelAudioClips = () => {

    const [currentAudioClip, setCurrentAudioClip] = useState(null);

    const channel = useContext(ChannelContext);
    const resources = channel.audio_clips;
    
    if(!resources) return null;

    let {audio_clips} = resources;
    audio_clips = (audio_clips && Array.isArray(audio_clips))? audio_clips : [];
    //console.log(audio_clips);

    const calculateTime = (secs) => {
        let minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        const hours = Math.floor(minutes / 60);

        minutes = Math.floor(minutes % 60);
        
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        const returnedMinutes = minutes < 10? `0${minutes}` : `${minutes}`;
        const returnedHours = hours < 10? `0${hours}` : `${hours}`;

        let returnedTime = '';
        returnedTime = (hours > 0)? `${returnedHours}:` : '';
        returnedTime += `${returnedMinutes}:${returnedSeconds}`;
        return returnedTime ;
    }

    return (
        <AudioClipContext.Provider value={{currentAudioClip}}>
            <Fragment>
                <div className="ctr-audio-clips">
                    <h4 className="title">Audio Clips: {audio_clips.length}</h4>
                    <div className="audio-clips">
                        <div className="current-clip">
                            <AudioPlayer/>
                        </div>
                        <div className="clips-list">
                            {
                                audio_clips.map((clip, index) => {
                                
                                    let newClip = {
                                        title: clip.title || 'Unknown',
                                        description: clip.description || 'No Description.',
                                        duration: clip.duration || 0,
                                        episode_number: clip.episode_number || 0,
                                        channel: clip.channel || null,
                                        image: (clip.urls.image || clip.channel.urls.logo_image.original) || '',
                                        src: clip.urls.high_mp3 || '',
                                        plays:  clip.counts.plays || 0,
                                        updated_at: clip.updated_at|| '',
                                        uploaded_at: clip.uploaded_at || '',
                                        user: clip.user || null
                                    }

                                    return (
                                        <Fragment key={`audio-clip-${index}`}>
                                            <div className="ctr-clip" onClick={(() => setCurrentAudioClip(newClip))}>
                                                <img className="audio-icon" src={audioIcon} alt="audio-icon" />
                                                <div className='info-box'>
                                                    <h4 className='title'>{newClip.title} <span className='sub-title'> - by {newClip.channel.title}</span></h4>
                                                    <h4 className='duration'>Duration: {calculateTime(newClip.duration)}</h4>
                                                    <p className='description'>{newClip.description}</p>
                                                    <p>
                                                        <span className='episode'>Episode #{newClip.episode_number}</span>
                                                        <span className='plays'>{newClip.plays} plays</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </Fragment>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        </AudioClipContext.Provider>
    );
}