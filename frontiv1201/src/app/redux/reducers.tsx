import { combineReducers } from 'redux';
import { SET_AUTH_DATA } from './actions';

const authReducer = (state = { token: null, role_id: null, userName: null }, action: any) => {
	switch (action.type) {
		case SET_AUTH_DATA:
			return {
				token: action.payload.token,
				role_id: action.payload.role_id,
				userName: action.payload.userName,
			};
		default:
			return state;
	}
};

export default combineReducers({
	auth: authReducer,
});