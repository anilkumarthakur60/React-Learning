import NavbarComponent from "./components/Navbar.jsx";
import {useRoutes} from "react-router-dom";
import LoginPage from "./Pages/LoginPage.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import About from "./Pages/About.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Index from "./Pages/Index.jsx";
import {NotFound} from "./Pages/NotFound.jsx";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";


function App() {

    const routes = useRoutes([
        {
            path: '/',
            element: <Index/>,
            name: 'Home'
        },
        {
            path: '/login',
            element: <LoginPage/>,
            name: 'Login'
        },
        {
            path: '/register',
            element: <RegisterPage/>,
            name: 'Register'
        },
        {
            path: '/about',
            element: <About/>,
            name: 'About'
        },
        {
            path: '/dashboard',
            element: <Dashboard/>,
            name: 'Dashboard'
        },
        {
            path: '*',
            element: <NotFound/>,
            name: '404'
        }
    ])

    return (
        <>
            <NavbarComponent/>
            <Container fluid>
                {routes}
            </Container>

        </>
    );
}

export default App
