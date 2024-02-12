export const SET_AUTH_DATA = 'SET_AUTH_DATA';

export const setAuthData = (token: any, role_id: any, userName: any) => ({
    type: SET_AUTH_DATA,
    payload: { token, role_id, userName },
});