import { combineReducers } from 'redux';
import BandsReducer from './reducer-bands';
//import BucketListReducer from './reducer_bucketlist';
import SelectedBand from './reducer-selectband';
//import ToDoListReducer from './reducer-todo';

	const rootReducer = combineReducers({
		bands: BandsReducer,
		//todos: ToDoListReducer,
		//bucketlist: BucketListReducer,
		selectedBand: SelectedBand
	});

	export default rootReducer;