import { combineReducers } from 'redux';
import { SET_AUTH_DATA } from './actions';

const authReducer = (state = { token: null, role_id: null, username: null }, action: any) => {
	switch (action.type) {
		case SET_AUTH_DATA:
			return {
				token: action.payload.token,
				role_id: action.payload.role_id,
				username: action.payload.username,
			};
		default:
			return state;
	}
};

export default combineReducers({
	auth: authReducer,
});