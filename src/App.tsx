import './App.css';
import LogoSanar from './components/LogoSanar';
import HomeImage from './HomeImage/ImageHome.png';
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import Cadastro  from './pages/Cadastro';

function App() {
  console.log('Bruno') 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/login" element={<Login/>}/> 
        <Route path="/" element={<Onboarding/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
