import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTableById } from '../redux/tablesReducer';
import { Spinner } from 'react-bootstrap';
const Table = () => {
	const { tableId } = useParams();
	const table = useSelector((state) =>
		getTableById(state, parseInt(tableId))
	);
	if (!table) {
		return (
			<Spinner
				animation="border"
				role="status"
				className="m-auto text-center"
			>
				<span className="visually-hidden">Loading table...</span>
			</Spinner>
		);
	}
	console.log(tableId);
	const { id, status, people, maxPeople, bill } = table;
	return <div>table</div>;
};
export default Table;
