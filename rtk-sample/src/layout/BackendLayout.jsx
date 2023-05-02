import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink, Outlet} from "react-router-dom";
import { Offcanvas} from "react-bootstrap";

function BackendLayout() {
    return (
        <>
            <Navbar bg="secondary" variant={"dark"} expand="lg" className="mb-3">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`}/>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav
                                className="justify-content-sm-end justify-content-md-start  flex-grow-1 gap-md-4 gap-3  ">
                                <NavLink className={"text-decoration-none btn btn-md btn-danger my-auto "}
                                         to="/">Home</NavLink>
                                <NavLink className={"text-decoration-none btn btn-md btn-danger my-auto "}
                                         to="/">Home</NavLink>
                                <NavLink className={"text-decoration-none btn btn-md btn-danger my-auto "}
                                         to="/">Home</NavLink>
                                <NavLink className={"text-decoration-none btn btn-md btn-danger my-auto "}
                                         to="/">Home</NavLink>
                            </Nav>
                            <Nav
                                className="justify-content-sm-end justify-content-md-end  flex-grow-1 gap-md-4 gap-3 mt-sm-5   ">
                                <NavLink className={"text-decoration-none btn btn-md btn-danger my-auto "}
                                         to="/">Home</NavLink>
                                <NavLink className={"text-decoration-none btn btn-md btn-danger my-auto "}
                                         to="/">Home</NavLink>
                                <NavLink className={"text-decoration-none btn btn-md btn-danger my-auto "}
                                         to="/">Home</NavLink>
                                <NavLink className={"text-decoration-none btn btn-md btn-danger my-auto "}
                                         to="/">Home</NavLink>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Container>
                <Outlet/>
            </Container>
        </>

    );
}

export default BackendLayout;