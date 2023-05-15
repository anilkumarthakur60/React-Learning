import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NavbarComponent from "./pages/NavbarComponent.jsx";
import Movie from "./pages/Movie.jsx";

function App() {

    return (
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<NavbarComponent />}>
                        <Route index element={<Home />} />
                        <Route path=":id" element={<Movie />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        </div>

    )
}

export default App
