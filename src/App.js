import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/nav/Menu";
import AdminDashboard from "./pages/admin/Dashboard"
import Dashboard from "./pages/user/Dashbard"




import Login from "./pages/Login";
import Register from "./pages/Register";

import Home from "./pages/Home";
import AdminRoute from "./components/routes/AdminRoute";
import AdminCategory from "./pages/admin/Category"
import AdminProduct from "./pages/admin/Product"
import PrivateRoute from "./components/routes/PrivateRoute";


const PageNotFound = () => {
  return (

    <div className="">
      <h1>404 page not found</h1>

    </div>


  )
}



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

          <Route path="user" element={<Dashboard />} />
        </Route>



        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="/dashboard/admin/category" element={<AdminCategory />} />
          <Route path="/dashboard/admin/product" element={<AdminProduct />} />

        </Route>

        <Route path="*" element={<PageNotFound />} replace />

      </Routes>

    </div >
  );
}

export default App;
