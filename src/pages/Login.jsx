import React from "react";
import PerfilImage from '../LoginImage/Login/imageMulher.png';
import LogoImage from '../LoginImage/Login/LogoNegativo.png';

class Login extends React.Component {
    render() {
         return(
             <div>
                <img src={PerfilImage}/>
                <img src={LogoImage}/>
             </div>
         )
    }
}
export default Login;