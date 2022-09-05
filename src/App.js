import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Berita from './Pages/Berita';
import ComingSoon from './Pages/ComingSoon';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/berita' element={<Berita/>}/>
          <Route path='/berita/:name'  element={<ComingSoon/>} />
          <Route path='/kontak'  element={<ComingSoon/>} />
          <Route path='/bts' element={<ComingSoon/>}/>
          <Route path='/about' element={<ComingSoon/>}/>
          <Route path='/kabar-paguyuban'  element={<ComingSoon/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
