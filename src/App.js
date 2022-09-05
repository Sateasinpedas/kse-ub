import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Berita from './Pages/Berita';
import ComingSoon from './Pages/ComingSoon';
import Kontak from './Pages/Kontak';
import BehindTheScene from './Pages/BehindTheScene';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;