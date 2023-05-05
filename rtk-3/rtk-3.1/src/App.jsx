import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import FrontendLayout from "./layout/FrontendLayout.jsx";
import {Index} from "./pages/Index.jsx";
import {Error404} from "./pages/Error404.jsx";

function App() {
  const router = createBrowserRouter(
      createRoutesFromElements(
          <Route path="/" element={<FrontendLayout />}>
              <Route index element={<Index/>}/>
              <Route path="*" element={<Error404/>}> </Route>
          </Route>
      )
  );

  return (
      <RouterProvider router={router} />
  )
}

export default App
