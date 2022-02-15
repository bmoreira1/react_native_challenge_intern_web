import React from "react";
import LogoSanar from "../components/LogoSanar";
import HomeImage from "../HomeImage/ImageHome.png";
import { Link } from 'react-router-dom'

class Onboarding extends React.Component {
    render() {
        return(
            <div className="App">
            <header className="App-header">
              <LogoSanar/>
              <h3 style={{textAlign: 'center', color:'black'}}>Temos uma solução para cada etapa da sua carreira na medicina</h3>
              <p style={{textAlign: 'center', color: 'grey'}}>Existimos para te ajudar em cada passo dessa incrível missão de cuidar de vidas.</p>
              <img src={HomeImage} alt="ImageHome" />;
              <Link to="/login">
               <button style={{ background: '#0050F0', color: '#FFFFFF', width: '312px', height: '48px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '500', fontSize: '16px', lineHeight: '120%' }}
                className="button" 
                type='button'
              >
                Começar Agora 
              </button>
              </Link>
             
            </header>
          </div>
        )
    }
}
export default Onboarding