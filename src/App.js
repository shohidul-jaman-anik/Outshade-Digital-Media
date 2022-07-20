import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoadApi from './Pages/Dashboard/LoadApi/LoadApi';
import 'react-toastify/dist/ReactToastify.css';
import AddApi from './Pages/Dashboard/AddApi/AddApi';
import UpdateUser from './Pages/Dashboard/UpdateUser/UpdateUser';
import Header from './Pages/Header/Header';
import Login from './Pages/Form/Login/Login';
import SignUP from './Pages/Form/SignUp/SignUP';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import UpdateProfile from './Pages/Form/UpdateProfile/UpdateProfile';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <LoadApi></LoadApi>
          </RequireAuth>
        }></Route>
        <Route path='/addApi' element={
          <RequireAuth>
            <AddApi></AddApi>
          </RequireAuth>
        }></Route>
        <Route path='/updateUser/:id' element={<UpdateUser></UpdateUser>}></Route>
        <Route path='/updateProfile' element={<UpdateProfile></UpdateProfile>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/SignUp' element={<SignUP></SignUP>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
