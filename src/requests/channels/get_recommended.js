import { API_URL } from "../config";

export const getRecommendedChannels = async (categories = []) => {
    const request_config = {
        method: "GET",
        headers: {
            "Content-Type": "application/json; version=2"
        }
    };

    const url = `${API_URL}/channels/recommended`;
    const request = await fetch(url, {request_config});
    let response = null
    let result = [];

    if(request.ok){
        response = await request.json();
        if(response && response.body){
            const {body} = response;
            result = Array.isArray(body)? body : [];
        }
    }
   
    return result;
} 