import { Route, Routes } from 'react-router-dom';
import './App.css';
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
import MyOrders from './Pages/Dashboard/MyOrders';
import AddAReview from './Pages/Dashboard/AddAReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyPortfolio from './Pages/Home/MyPortfolio/MyPortfolio';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/purchase/:purchaseID' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
          
        }>
          <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
          <Route path='add' element={<AddAReview></AddAReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
        </Route>

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
