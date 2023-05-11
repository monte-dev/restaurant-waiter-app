export const getAllTables = (state) => state.tables;

//action names
const createActionName = (name) => `app/tables/${name}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

//action creators
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });
export const fetchTables = () => {
	return (dispatch) => {
		console.log('fetching tables...');
		fetch('http://localhost:3131/api/tables')
			.then((res) => res.json())
			.then((tables) => {
				console.log('received tables:', tables);
				dispatch(updateTables(tables));
			})
			.catch((error) => console.log('error fetching tables:', error));
	};
};

const tablesReducer = (statePart = [], action) => {
	switch (action.type) {
		case UPDATE_TABLES:
			return [...action.payload];
		default:
			return statePart;
	}
};
export default tablesReducer;
