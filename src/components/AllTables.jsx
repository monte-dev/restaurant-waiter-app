import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTables, getAllTables } from '../redux/tablesReducer';
import Btn from './Btn';
import { NavLink } from 'react-router-dom';
const AllTables = () => {
	const dispatch = useDispatch();
	const tables = useSelector(getAllTables);

	useEffect(() => {
		dispatch(fetchTables());
	}, [dispatch]);

	return (
		<section>
			<h1 className="mb-3">All tables</h1>
			{tables.map((table, index) => (
				<div
					key={table.id}
					className="border-bottom py-2 d-flex align-items-center"
				>
					<h3 className="fw-bold">Table {index + 1}</h3>
					<div className="ms-3 flex-grow-1">{table.status}</div>
					<Btn
						as={NavLink}
						to={`/table/${table.id}`}
						text="Show more"
					></Btn>
				</div>
			))}
		</section>
	);
};

export default AllTables;
