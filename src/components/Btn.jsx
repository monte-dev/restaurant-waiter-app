import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Btn = (props) => {
	return (
		<NavLink to={props.to}>
			<Button variant="primary">{props.text}</Button>
		</NavLink>
	);
};

export default Btn;
