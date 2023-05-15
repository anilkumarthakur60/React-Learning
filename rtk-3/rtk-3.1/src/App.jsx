import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import FrontendLayout from "./layout/FrontendLayout.jsx";
import { Index } from "./pages/Index.jsx";
import { Error404 } from "./pages/Error404.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import RtkQueryPage from "./pages/RtkQueryPage.jsx";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<FrontendLayout />}>
                <Route index element={<Index />} name="indexPage" />
                <Route path=":id" element={<DetailPage />} />
                <Route path="rtk-query" element={<RtkQueryPage />} />
                <Route path="*" element={<Error404 />}> </Route>
            </Route>
        )
    );

    return (
        <RouterProvider router={router} />
    )
}

export default App
