import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Dashboard from "./Pages/Dashboard.jsx";
import Index from "./Pages/Index.jsx";
import { NotFound } from "./Pages/NotFound.jsx";
import FrontendLayout from "./layout/FrontendLayout.jsx";
import BackendLayout from "./layout/BackendLayout.jsx";
import About from "./Pages/About.jsx";
import Profile from "./Pages/Profile.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import { useDispatch } from "react-redux";
import { userDetail } from "./redux/slice/userSlice.js";
import Setting from "./Pages/Setting.jsx";


function App() {


    const dispatch = useDispatch()


    const fetchProfileInfo = (e) => {

        console.log(e)

        dispatch(userDetail())
        return true
    }

    let router = createBrowserRouter(
        createRoutesFromElements(

            <>
                <Route path="/" element={<FrontendLayout />}>
                    <Route index element={<Index />} />
                    <Route path="about" element={<About />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                </Route>
                <Route path="/dashboard" element={<BackendLayout />} loader={({ params, request }) => fetchProfileInfo({ params, request })} >
                    <Route index element={<Dashboard />} />
                    <Route path="profile" element={<Profile />} >
                        <Route path="setting" element={<Setting />} />
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </>
        ));

    return <RouterProvider router={router} />
}

export default App
