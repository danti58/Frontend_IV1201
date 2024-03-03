// reducers.tsx

import { combineReducers } from 'redux';
import { SET_AUTH_DATA } from './actions';
import { Reducer } from '@reduxjs/toolkit';
import { AuthState } from './types';

/**
 * Reducer for the auth data in the Redux store. Handles the SET_AUTH_DATA action to set the user information in the store.
 * 
 * @param state - The current state of the auth data in the Redux store
 * @param action - The action to be performed
 * @returns - The new state of the auth data in the Redux store
 */
const authReducer: Reducer<AuthState, any> = (
	state = { userState: { token: null, role_id: 0, username: null } },
	action: any
  ) => {
	switch (action.type) {
	  case SET_AUTH_DATA:
		return {
		  ...state,
		  userState: {
			token: action.payload.token,
			role_id: action.payload.role_id,
			username: action.payload.username,
		  },
		};
	  default:
		return state;
	}
  };
  
export default combineReducers({
	auth: authReducer,
  });