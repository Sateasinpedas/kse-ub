import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import AdminDashboard from './Pages/Admin/Dashboard';
import Berita from './Pages/Berita';
import ComingSoon from './Pages/ComingSoon';
import Kontak from './Pages/Kontak';
import BehindTheScene from './Pages/BehindTheScene';
import PrivateRoute from './routes/PrivateRoute';
import AuthRoute from './routes/AuthRoute';
import Login from './Pages/Admin/Login';
import Register from './Pages/Admin/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/berita' element={<Berita/>}/>
          <Route path='/berita/:name'  element={<ComingSoon/>} />
          <Route path='/kontak'  element={<Kontak/>} />
          <Route path='/bts' element={<BehindTheScene/>}/>
          <Route path='/about' element={<ComingSoon/>}/>
          <Route path='/kabar-paguyuban'  element={<ComingSoon/>} />
          <Route element={<PrivateRoute/>} >
            <Route path='/admin/dashboard'  element={<AdminDashboard/>} />
            <Route path='/admin/kabar-paguyuban'  />
            <Route path='/admin/testimoni'  />
            <Route path='/admin/faq'  />
            <Route path='/admin/mitra'  />
          </Route>
          <Route element={<AuthRoute/>}>
            <Route path='/admin/login' element={<Login/>}/>
            <Route path='/admin/register' element={<Register/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;