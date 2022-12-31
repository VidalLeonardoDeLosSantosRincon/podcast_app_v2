
export const SetDarkMode = (status = false) => {
    return {
        type : "SET_DARK_MODE", 
        payload : {status}
    }
    
};  