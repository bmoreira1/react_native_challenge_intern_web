import './App.css';
import LogoSanar from './components/LogoSanar';
import HomeImage from './HomeImage/ImageHome.png';
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';

function App() {
  console.log('Bruno') 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/> 
        <Route path="/" element={<Onboarding/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
