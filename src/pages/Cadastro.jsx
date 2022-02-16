import React from "react";
import LogoNegativo from '../cadastroImage/LogoCadNegativo.png';
import LogoSanar from "../components/LogoSanar";

class Cadastro extends React.Component {



    username=''
    email=''
    password=''
        render() {
            return(
               <body bgcolor="0050F0" >    
                    <div className="App" >
                    <img src={LogoNegativo} top  alt='LogoCadNegativo' style={{paddingTop: '20px'}} /> 
                        <header className="App-header">
                            <br/>
                            <input style={{background:'#0050F0', color:'#FFFFFF', width: '312px', height: '48px', left: '0px', top: '0px'}} onChange={(evento) => { 
                                console.log(evento.target.value)
                                this.username=evento.target.value
                            }} placeholder='Digite o seu nome'> 
                            </input>
                            <input style={{background:'#0050F0', color:'#FFFFFF', width: '312px', height: '48px', left: '0px', top: '0px'}} onChange={(evento) => { 
                                console.log(evento.target.value)
                                this.email=evento.target.value
                            }} placeholder='Digite o seu e-mail'> 
                            </input>
                            <input style={{background:'#0050F0', color:'#FFFFFF', width: '312px', height: '48px', left: '0px', top: '0px'}} onChange={(evento) => {
                                console.log(evento.target.value)
                                this.password=evento.target.value
                            }} placeholder='Defina uma senha'>
                            </input>
                            <button style={{background: '#FFFFFF', color: '#0050F0', width: '312px', height: '48px', left: '24px', top: '459px', fontFamily: 'Roboto', fontStyle: 'normal',fontWeight: '500', fontSize: '20px', lineHeight: '120%' }}
                                className='button'
                                type='button'
                                onClick={() => {
                                    console.log('apertei o botão')
                                    console.log(this.username)
                                    if (this.username === 'bruno' && this.password === '123' && this.email === 'bruno@sanar.com' ){
                                        alert('autenticação feita com sucesso')
                                    }   else {
                                            alert('autenticação negada')
                                        }
                                    }
                                }
                                >
                                    Finalizar Cadastro   
                            </button> 
                            <br/>
                            <button style={{background: '#0050F0', color: '#FFFFFF', fontFamily: 'Red Hat Display', fontStyle: 'normal', fontWeight: '400', fontSize: '17px', lineHeight: '140%'}}
                                className='button'
                                type='button'
                                >
                                Ao clicar em “Finalizar cadastro” você estará aceitando também nossos termos e condições.
                            </button>
                        </header>
                    </div>
                </body>

            )
        }
}
export default Cadastro;