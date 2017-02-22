import { combineReducers } from 'redux';
import BandsReducer from './reducer-bands';
//import ToDoListReducer from './reducer-todo';

	const rootReducer = combineReducers({
		bands: BandsReducer,
		//todos: ToDoListReducer,
	});

	export default rootReducer;