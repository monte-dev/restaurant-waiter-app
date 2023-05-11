import './App.css';
import { Container } from 'react-bootstrap';
import Header from './views/Header';
import HomePage from './pages/HomePage';
import { fetchTables } from './redux/tablesReducer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchTables());
	}, [dispatch]);

	return (
		<Container>
			<Header />
			<HomePage />
		</Container>
	);
};

export default App;
