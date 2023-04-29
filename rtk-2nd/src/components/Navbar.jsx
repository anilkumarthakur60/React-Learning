import Container from "react-bootstrap/Container";
import logo from "../assets/react.svg";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import {useState} from "react";
import {Image} from "react-bootstrap";

function NavbarComponent() {

    const expand = useState('lg');

    return (
        <>
            <Navbar bg="dark" expand="lg" className="mb-3" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#" className="text-white">
                        <Link to="/" className="text-white">
                            <Image src={logo}/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
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
                            <Nav className="justify-content-center flex-grow-1 ">

                                <Link className="text-white mx-4 text-decoration-none my-auto fs-6 fw-bold "  to="/register">Register</Link>
                                <Link className="text-white mx-4 text-decoration-none my-auto fs-6 fw-bold "  to="/login">Login</Link>
                                <Link className="text-white mx-4 text-decoration-none my-auto fs-6 fw-bold "  to="/about">About</Link>
                                <Link className="text-white mx-4 text-decoration-none my-auto fs-6 fw-bold "  to="/dashboard">Dashboard</Link>

                            </Nav>
                            <Nav className="justify-content-center flex-grow-1 ">
                                <Nav.Link className="btn btn-sm btn-success text-white ">Add New</Nav.Link>
                                <Nav.Link className="btn btn-sm btn-danger text-white mx-2">Logout</Nav.Link>
                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;