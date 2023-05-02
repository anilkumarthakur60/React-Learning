import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";

function FrontendLayout() {
    return (
        <>
            <NavbarComponent />
            <Outlet />
        </>
    );
}


export default FrontendLayout