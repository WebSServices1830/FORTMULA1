const defaultState = {
    loggedIn: false,
    token: '',
};

const login = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                loggedIn: true,
                token: action.token,
            };
        case "LOG_OUT":
            return {
                loggedIn: false,
                token: '',
            };
        default:
            return state;

    }
};

export default login;