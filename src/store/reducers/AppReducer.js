const INITIAL_STATE = {
    dakrmode : {
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
    return state;
};
