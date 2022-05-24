import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Home/Navbar';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import NotFound from './Pages/Shared/NotFound';
import { ToastContainer } from 'react-toastify';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/purchase' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
