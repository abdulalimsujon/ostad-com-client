import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/nav/Menu";




import Login from "./pages/Login";
import Register from "./pages/Register";


import PrivateRoute from "./components/routes/PrivateRoute";
import Home from "./pages/Home";



function App() {
  return (
    <div>
      <Toaster />
      <Menu></Menu>
      <Routes>
        <Route path='/login' element={<Login></Login>}>  </Route>
        <Route path='/' element={<Home></Home>}>  </Route>
        <Route path='/register' element={<Register></Register>}>  </Route>

        <Route path="/dashboard" element={<PrivateRoute />}>




        </Route>
      </Routes>

    </div >
  );
}

export default App;
