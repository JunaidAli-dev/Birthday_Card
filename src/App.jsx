import Card from "./components/Card";
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./styles.css";
import Firstpage from "./components/Firstpage";
import Song from "./components/Song";

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Firstpage/>
    },
    {
      path:"/card",
      element:<Card/>,
    },
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}
export default App
