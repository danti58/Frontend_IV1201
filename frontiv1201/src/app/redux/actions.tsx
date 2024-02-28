// actions.tsx

export const SET_AUTH_DATA = 'SET_AUTH_DATA';

export interface SetAuthDataPayload {
  token: string;
  role_id: number;
  username: string;
}

/**
 * Action to set the auth data in the Redux store.
 * 
 * @param payload - The auth data to set in the Redux store
 * @returns - Action with the auth data payload
 */
export const setAuthData = (payload: SetAuthDataPayload) => ({
  type: SET_AUTH_DATA,
  payload,
});