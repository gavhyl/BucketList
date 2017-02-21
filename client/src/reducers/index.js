import { combineReducers } from 'redux';
import BandsReducer from './reducer-bands';

	const rootReducer = combineReducers({
		bands: BandsReducer,
	});

	export default rootReducer;