import { Button } from "bootstrap";
import React from "react";
import { NavLink } from "react-router-dom";
import Cookies from 'universal-cookie';

export function Navbar(){
        
        const cookies = new Cookies();
        const [userLog, setUserLog] = React.useState({user: "user", password:"user"});

        const cerrarSesion=()=>{
            cookies.remove('user', {path:"/"});
            window.location.href = "./Login";
        }
        function toggleDark(){
            document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
            document.getElementById('btnInicio').classList.toggle("dark-theme");
            if(cookies.get('user')){
                document.getElementById('darkCerrarSesion').classList.toggle("dark-theme");
                document.getElementsByClassName('darkCardBody')[0].classList.toggle("dark-theme");
            }else{
                document.getElementsByClassName('loginContainer')[0].classList.toggle("dark-theme");
                document.getElementsByClassName('contenedorNoticiasCarrusel')[0].classList.toggle("dark-theme");
            }

        }

        return(
            <div className="navbar">
                <div className="navbarLogo">
                    <NavLink to="/" className="btn btnInicio" id="btnInicio"> El Diario </NavLink>
                </div>
              {cookies.get('user') === userLog.user ?
                <div className="navbarPages">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link {({isActive})=>(isActive ? 'active' : '')} "  to="/">INICIO</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/politica">POLÍTICA</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/tendencia">TENDENCIAS</NavLink>
                        </li>
                    </ul>
                </div>
                :
                <></>
            }
            { cookies.get('user') === userLog.user ?
                <button className="btn btn-secondary cerrarSesion" id="darkCerrarSesion" onClick={()=> cerrarSesion()}> salir </button>
                :
                <></>
            }
                <input type="checkbox" id="toggle" onClick={toggleDark}></input>
            </div>
        )
    }
export default Navbar;