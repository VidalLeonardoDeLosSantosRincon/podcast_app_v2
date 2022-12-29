const INITIAL_STATE = {
    dakrmode: false
};

export const AppReducer = (state = INITIAL_STATE, action ) => {
    const {type, payload} = action;
    return state;
};
