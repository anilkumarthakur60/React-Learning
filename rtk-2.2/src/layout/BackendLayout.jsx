import { Navigate, Outlet } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDetail } from "../redux/slice/userSlice";


function BackendLayout() {

    const dispatch = useDispatch();


    // useEffect(() => {
    //     dispatch(userDetail())
    // }, [dispatch])


    const { authUser } = useSelector((state) => state.users)

    const { id } = authUser



    return (
        <>
            <NavbarComponent />

            {
                id ? <Outlet /> : (
                    <Navigate to="/login" replace={true} />
                )
            }
        </>
    );
}


export default BackendLayout