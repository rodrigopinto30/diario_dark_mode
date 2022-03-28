import React from "react";
import Cookies from 'universal-cookie';

export function Register(){
        const cookie = new Cookies();
        const [user, setUser] = React.useState({user: "", password: ""});         

        const [userLog, setUserLog] = React.useState({user: "user", password:"user"});
        const [userOk, setUserOk] = React.useState(false);

        // Actualizamos los datos 
        const handdleChange =({target: {name, value}})=>{
            setUser({...user, [name]:value})
        }
        // Visualizamos los datos del usuario
        const handdleSubmit = e =>{
            e.preventDefault();
            console.log(user);
        }

        const userCheck = () =>{
            if((user.user === userLog.user )&& (user.password === userLog.password)) 
                cookie.set("user", user.user, {path:"/"})  
                alert(user.user)
        }


        return(
            <div className="formContainer">
                <form onSubmit={handdleSubmit}> 
                    <div className="formUser">
                        <input 
                            placeholder="Usuario"
                            name="user"
                            onChange={handdleChange}
                        ></input>
                    </div>
                    <div className="formPassword">
                        <input 
                            type="password" 
                            name="password"
                            placeholder="Contraseña"
                            onChange={handdleChange}
                        ></input>
                    </div>
                    <div>
                        <button className="btn btn-secondary" onClick={userCheck}>Ingresar</button>
                    </div>
                    <div>
                        
                    </div>
                </form>
            </div>
        )
    }

export default Register;