// actions.tsx

export const SET_AUTH_DATA = 'SET_AUTH_DATA';

export interface SetAuthDataPayload {
  token: string;
  role_id: number;
  username: string;
}

export const setAuthData = (payload: SetAuthDataPayload) => ({
  type: SET_AUTH_DATA,
  payload,
});