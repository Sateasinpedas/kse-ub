import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/berita' />
          <Route path='/kontak' />
          <Route path='/bts' />
          <Route path='/about' />
          <Route path='/kabar-paguyuban' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
