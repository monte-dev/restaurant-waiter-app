import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
const Header = () => {
	return (
		<header>
			<Navbar
				bg="primary"
				className="d-flex text-white justify-content-between mt-3 px-3 py-2 rounded shadow-sm"
			>
				<Navbar.Brand className="text-white">Waiter.app</Navbar.Brand>
				<Navbar.Toggle aria-controls="mobile-nav" />
				<Navbar.Collapse
					id="mobile-nav"
					className="justify-content-end"
				>
					<Nav>
						<Nav.Link as={NavLink} to="/" className="text-white">
							Home
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};
export default Header;
