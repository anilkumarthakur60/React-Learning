import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard.jsx";
import Index from "./Pages/Index.jsx";
import { NotFound } from "./Pages/NotFound.jsx";
import FrontendLayout from "./layout/FrontendLayout.jsx";
import BackendLayout from "./layout/BackendLayout.jsx";
import About from "./Pages/About.jsx";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<FrontendLayout />}>
                    <Route index element={<Index />} />
                    <Route path="/about" element={<About />} />
                </Route>
                <Route path="/dashboard" element={<BackendLayout />} >
                    <Route index element={<Dashboard />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App
