import React, {Fragment, useContext, useEffect} from "react";

import './css/audio_player.css';
import { AudioClipContext } from '../../contexts/audio_clips/audioClipContext';

export const AudioPlayer = () => {

    const audioClip = useContext(AudioClipContext);
    const { currentAudioClip } = audioClip;

    if(!currentAudioClip) return null;

    const audio = {...currentAudioClip };

    return (
        <Fragment>
            <div className="ctr-audio-player"  style={{backgroundImage:`url(${audio.image})`}}>
                <marquee scrolldelay={120}><b>{audio.title}</b> - by {audio.channel.title}</marquee>    
                <audio controls controlsList="nodownload" src={audio.src} autoPlay>
                </audio>
            </div>
        </Fragment>
    );
};