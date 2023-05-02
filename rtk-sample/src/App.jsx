
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import FrontendLayout from "./layout/FrontendLayout.jsx";
import {Index} from "./pages/Index.jsx";

function App() {
  const router = createBrowserRouter(
      createRoutesFromElements(
          <Route path="/" element={<FrontendLayout />}>
            <Route index element={<Index />} />
          </Route>
      )
  );

  return (
      <RouterProvider router={router} />
  )
}

export default App
