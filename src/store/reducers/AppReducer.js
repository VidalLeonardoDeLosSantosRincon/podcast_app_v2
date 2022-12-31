const INITIAL_STATE = {
    darkmode : {
        status : false,
        theme : {
            colors: {
                1 : "white",
                2 : "lightgray",
                3 : "dodgerblue",
                4 : "lightseagreen",
                5 : "orange"
            },
            backgrounds : {
                1 : "#273746",
                2 : "#212F3D", 
                3 : "#1C2833"
            }
        }
    }
};

export const AppReducer = (state = INITIAL_STATE, action ) => {
    const {type, payload} = action;
    switch(type) {
        case "SET_DARK_MODE": 
            const {darkmode} = state;
            const {status} = payload;
            darkmode.status = (typeof status == 'boolean')? status : false;
            state = {...state, darkmode};
            return state;
        default:
            return state;
    }
};
