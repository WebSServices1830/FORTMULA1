import { LOG_IN, LOG_OUT } from '../constants/ActionTypes';

export const logIn = token => ({
    type: LOG_IN,
    loggedIn: true,
    token
});

export const logOut = () => ({
    type: LOG_OUT,
    loggedIn: false,
}); 
