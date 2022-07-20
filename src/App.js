import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoadApi from './Pages/Dashboard/LoadApi/LoadApi';
import 'react-toastify/dist/ReactToastify.css';
import AddApi from './Pages/Dashboard/AddApi/AddApi';
import UpdateUser from './Pages/Dashboard/UpdateUser/UpdateUser';
import Header from './Pages/Header/Header';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<LoadApi></LoadApi>}></Route>
        <Route path='/addApi' element={<AddApi></AddApi>}></Route>
        <Route path='/updateUser/:id' element={<UpdateUser></UpdateUser>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
