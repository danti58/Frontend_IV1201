// reducers.tsx

import { combineReducers } from 'redux';
import { SET_AUTH_DATA } from './actions';
import { Reducer } from '@reduxjs/toolkit';
import { AuthState } from './types';

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