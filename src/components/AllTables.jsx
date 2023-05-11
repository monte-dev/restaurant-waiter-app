import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTables, getAllTables } from '../redux/tablesReducer';

const AllTables = () => {
	const dispatch = useDispatch();

	const tables = useSelector(getAllTables);

	useEffect(() => {
		dispatch(fetchTables());
	}, [dispatch]);

	return (
		<section>
			<h1 className="mb-3">All tables</h1>
			{tables.map((table) => (
				<div
					key={table.id}
					className="border-bottom py-2 d-flex align-items-center"
				>
					<h3 className="fw-bold">Table {table.id}</h3>
					<div className="flex-grow-1">
						<span className="fw-bold ms-3">Status:</span>{' '}
						{table.status}
					</div>
					<button>Show more</button>
				</div>
			))}
		</section>
	);
};

export default AllTables;
