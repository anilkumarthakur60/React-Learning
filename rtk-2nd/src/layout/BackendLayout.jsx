import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userDetail } from "../redux/slice/userSlice";


function BackendLayout() {


    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(userDetail())

    }, [dispatch])


    return (
        <>
            <NavbarComponent />
            <Outlet />
        </>
    );
}


export default BackendLayout