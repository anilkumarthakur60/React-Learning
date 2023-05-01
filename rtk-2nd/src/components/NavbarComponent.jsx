import Container from "react-bootstrap/Container";
import logo from "../assets/react.svg";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/slice/userSlice";

function NavbarComponent() {



    const dispatch = useDispatch()
    const [expand, setExpand] = useState('lg');

    const { authUser } = useSelector((state) => state.users);
    const { id } = authUser;

    const TopNavItems = () => {
        return (
            <>
                {id && <Link className="text-white mx-4 text-decoration-none my-auto fs-6 fw-bold" to="/dashboard">Dashboard</Link>}
                {!id && <Link className="text-white mx-4 text-decoration-none my-auto fs-6 fw-bold" to="/register">Register</Link>}
                {!id && <Link className="text-white mx-4 text-decoration-none my-auto fs-6 fw-bold" to="/login">Login</Link>}
                <Link className="text-white mx-4 text-decoration-none my-auto fs-6 fw-bold" to="/about">About</Link>
            </>
        );
    };


    const handleLogout = () => {
        dispatch(logoutUser())
    }


    const navigate = useNavigate()

    return (
        <>
            <Navbar bg="dark" expand="lg" className="mb-3" variant="dark">
                <Container fluid>
                    <Navbar.Brand className="text-white" onClick={() => { navigate('/') }}>
                        <Image src={logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`canvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Off canvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-center flex-grow-1">
                                <TopNavItems />
                            </Nav>

                            {
                                id && (
                                    <Nav className="justify-content-center flex-grow-1">
                                        <Nav.Link className="btn btn-sm btn-success text-white">Add New</Nav.Link>
                                        <Nav.Link className="btn btn-sm btn-danger text-white mx-2" onClick={handleLogout}>Logout</Nav.Link>
                                    </Nav>
                                )
                            }

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;
