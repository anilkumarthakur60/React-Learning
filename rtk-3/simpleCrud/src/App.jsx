import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import FrontendLayout from "./layout/FrontendLayout.jsx";
import BackendLayout from "./layout/BackendLayout.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { Index } from "./pages/Index.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import RegisterPage from "./pages/auth/RegisterPage.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import PostPage from "./pages/post/PostPage.jsx";
import BlogPage from "./pages/blog/BlogPage.jsx";

function App() {
    let router = createBrowserRouter(
        createRoutesFromElements(

            <>
                <Route path="/" element={<FrontendLayout />}>
                    <Route index element={<Index />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                </Route>
                <Route path="/dashboard" element={<BackendLayout />} >
                    <Route index element={<Dashboard />} />
                    <Route path="posts" element={<PostPage />} />

                    <Route path="blogs" element={<BlogPage />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </>
        ));

    return <RouterProvider router={router} />
}

export default App
