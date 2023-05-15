import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import {
	getTableById,
	editTablesRequest,
	getAllTables,
} from '../redux/tablesReducer';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const Table = () => {
	const statusOptions = ['Free', 'Reserved', 'Cleaning', 'Busy'];
	const { tableId } = useParams();

	const table = useSelector((state) =>
		getTableById(state, parseInt(tableId))
	);
	const allTables = useSelector(getAllTables);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [status, setStatus] = useState(table?.status || '');
	const [people, setPeople] = useState(table?.people || 0);
	const [maxPeople, setMaxPeople] = useState(table?.maxPeople || 0);
	const [bill, setBill] = useState(table?.bill || 0);

	const handleSubmit = (e) => {
		const updatedTable = {
			id: tableId,
			status,
			people,
			maxPeople,
			bill,
		};
		dispatch(editTablesRequest(updatedTable));
		navigate('/');
	};
	const {
		register,
		handleSubmit: validate,
		formState: { errors },
	} = useForm();
	useEffect(() => {
		if (tableId > allTables.length) {
			const navigateToHome = async () => {
				navigate('/');
			};

			navigateToHome();
		}
	}, [tableId, allTables, navigate]);

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
			<Form
				className="mt-3 d-flex flex-column gap-2"
				onSubmit={validate(handleSubmit)}
			>
				<h1>Table {table.id}</h1>
				<Form.Group className="mt-3">
					<Form.Label className="me-3 fw-bold">Status:</Form.Label>
					<Form.Select
						className="d-inline-block w-25 text-center ms-1"
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
						{...register('people', { min: 0, max: `${maxPeople}` })}
						htmlSize={1}
						className="d-inline-block me-2"
						value={people}
						onChange={(e) => setPeople(e.target.value)}
					/>
					{'/'}
					<Form.Control
						{...register('maxPeople', { min: 0, max: 10 })}
						htmlSize={1}
						className="d-inline-block ms-2"
						value={maxPeople}
						onChange={(e) => setMaxPeople(e.target.value)}
					/>
				</Form.Group>
				{(errors.maxPeople || errors.people) && (
					<small className="d-block form-text text-danger">
						Please provide number in format i.e "10/10"
					</small>
				)}
				{status === 'Busy' ? (
					<Form.Group className="mt-2 mb-4 w-25">
						<Form.Label className="me-3 fw-bold w-25">
							Bill:
						</Form.Label>
						<span className="me-1">$</span>
						<Form.Control
							{...register('bill', { min: 0 })}
							type="number"
							className="w-50 text-center d-inline-block"
							value={bill}
							onChange={(e) => setBill(e.target.value)}
						/>
						{errors.bill && (
							<small className="d-block form-text text-danger mt-2">
								This field needs to be a number greather than 0
							</small>
						)}
					</Form.Group>
				) : (
					''
				)}
				<Button type="submit">Update</Button>
			</Form>
		</section>
	);
};

Table.propTypes = {
	status: PropTypes.string,
	people: PropTypes.number,
	maxPeople: PropTypes.number,
	bill: PropTypes.number,
};

export default Table;
