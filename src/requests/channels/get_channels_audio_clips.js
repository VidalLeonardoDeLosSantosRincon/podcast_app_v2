import { API_URL } from "../config";

export const getChannelAudioClips = async (channel_id = 0) => {
    const request_config = {
        method: "GET",
        headers: {
            "Content-Type": "application/json; version=2"
        }
    };

    const url = `${API_URL}/channels/${channel_id}/audio_clips`;
    const request = await fetch(url, {request_config});
    let response = null
    let result = {};

    if(request.ok){
        response = await request.json();
        if(response && response.body){
            const {body} = response;
            result = (typeof body == 'object')? body : result;
        }
    }

    return result;
} 