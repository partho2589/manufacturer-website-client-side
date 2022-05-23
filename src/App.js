import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Home/Navbar';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div className='bg-red bg-pink-100'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
