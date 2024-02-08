export const SET_AUTH_DATA = 'SET_AUTH_DATA';

export const setAuthData = (token, role_id, userName) => ({
    type: SET_AUTH_DATA,
    payload: { token, role_id, userName },
});