import { useSelector } from 'react-redux';
import { getAllTables } from '../redux/tablesReducer';
import AllTables from '../components/AllTables';
const HomePage = () => {
	const tables = useSelector(getAllTables);

	return (
		<main className="mt-3">
			<AllTables tables={tables} />
		</main>
	);
};
export default HomePage;
