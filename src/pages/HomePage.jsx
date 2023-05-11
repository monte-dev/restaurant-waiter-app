import { useSelector } from 'react-redux';
import { getAllTables } from '../redux/tablesReducer';

const HomePage = () => {
	const tables = useSelector(getAllTables);

	console.log(tables);

	return <main>HomePage</main>;
};
export default HomePage;
