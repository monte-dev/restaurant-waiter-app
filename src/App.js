import './App.css';
import { Container } from 'react-bootstrap';
import Header from './views/Header';
import HomePage from './pages/HomePage';
import Table from './pages/Table';
import NotFound from './pages/NotFound';
import { fetchTables } from './redux/tablesReducer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AllTables from './components/AllTables';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchTables());
	}, [dispatch]);

	return (
		<Container>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/table/:tableId" element={<Table />} />
				<Route path="" element={<AllTables />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Container>
	);
};

export default App;
