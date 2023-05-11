import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import initalState from './initialState';
import tablesReducer from './tablesReducer';
import thunk from 'redux-thunk';
const subreducers = {
	tables: tablesReducer,
};
const reducer = combineReducers(subreducers);

const store = createStore(
	reducer,
	initalState,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
