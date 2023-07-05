import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './App.css'
import { BaseLayout } from "./layout/BaseLayout";
import { ErrorPage } from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
