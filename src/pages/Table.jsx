import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTableById } from '../redux/tablesReducer';
import { Form, Spinner } from 'react-bootstrap';
import Btn from '../components/Btn';
import { useState } from 'react';
const Table = () => {
	const statusOptions = ['Free', 'Reserved', 'Cleaning', 'Busy'];
	const { tableId } = useParams();
	const table = useSelector((state) =>
		getTableById(state, parseInt(tableId))
	);

	const [status, setStatus] = useState(table.status || '');
	const [people, setPeople] = useState(table.people || null);
	const [maxPeople, setMaxPeople] = useState(table.maxPeople || '');
	const [bill, setBill] = useState(table.bill || '');

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
	return (
		<section>
			<Form className="mt-3 d-flex flex-column gap-2">
				<h1>Table {table.id}</h1>
				<Form.Group className="mt-3">
					<Form.Label className="me-3 fw-bold">Status:</Form.Label>
					<Form.Select
						className="d-inline-block w-25 ms-1"
						aria-label="table status"
						value={status}
						onChange={(e) => setStatus(e.target.value)}
					>
						{statusOptions.map((option, index) => {
							return (
								<option key={index} value={option}>
									{option}
								</option>
							);
						})}
					</Form.Select>
				</Form.Group>
				<Form.Group className="mt-2 d-flex align-items-center w-25">
					<Form.Label className="me-3 fw-bold">People:</Form.Label>
					<Form.Control
						htmlSize={1}
						className="d-inline-block me-2"
						value={people}
						onChange={(e) => setPeople(e.target.value)}
					/>{' '}
					{'/'}
					<Form.Control
						htmlSize={1}
						className="d-inline-block ms-2"
						value={maxPeople}
						onChange={(e) => setMaxPeople(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className="mt-2 mb-4 w-25">
					<Form.Label className="me-3 fw-bold w-25">Bill:</Form.Label>
					<span className="me-1">$</span>
					<Form.Control
						className="w-25 d-inline-block"
						value={bill}
						onChange={(e) => setBill(e.target.value)}
					/>
				</Form.Group>
			</Form>
			<Btn to="/" text="Update"></Btn>
		</section>
	);
};
export default Table;
