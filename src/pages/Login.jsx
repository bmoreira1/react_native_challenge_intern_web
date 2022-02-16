import React from "react";
import PerfilImage from '../LoginImage/Login/imageMulher.png';
import LogoNegativo from '../LoginImage/Login/Logo-negativo.png';
import { Link } from 'react-router-dom'


class Login extends React.Component {


email=''
password=''
    render() {
         return(
            <body bgcolor="#0050F0">
             <div className="App" >
                    <header className="App-header" >
                        <img src={LogoNegativo} alt="Logo-negativo"/>
                        <br/>
                        <img src={PerfilImage} alt="imageMulher" />
                        <br/>
                        <input style={{background:'#0050F0', color:'#FFFFFF', width: '312px', height: '48px', left: '0px', top: '0px'}} onChange={(evento) => { 
                            console.log(evento.target.value)
                            this.username=evento.target.value
                            }} placeholder='Digite seu e-mail'> 
                        </input>
                        <input style={{background:'#0050F0', color:'#FFFFFF', width: '312px', height: '48px', left: '0px', top: '0px'}} onChange={(evento) => { 
                            console.log(evento.target.value)
                            this.username=evento.target.value 
                        }}  placeholder='Digite sua senha de acesso' > 
                        </input>
                        <button style={{background: '#FFFFFF', color: '#0050F0', width: '312px', height: '48px', left: '24px', top: '459px', fontFamily: 'Roboto', fontStyle: 'normal',fontWeight: '500', fontSize: '20px', lineHeight: '120%' }}
                            className='button'
                            type="button"
                            >
                                Entrar   
                        </button> 
                        <br/>
                        <Link to="/Cadastro">
                            <button style={{background: '#0050F0', color: '#FFFFFF', fontFamily: 'Red Hat Display', fontStyle: 'normal', fontWeight: 'normal', fontSize: '14px', lineHeight: '140%'}}
                                className='button'
                                type='button'
                                >
                                Não possui um acesso? Cadastre-se aqui!
                            </button>
                        </Link>
                    </header>
             </div>
            </body>
         )
    }
}
export default Login;