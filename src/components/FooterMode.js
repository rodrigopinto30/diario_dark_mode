import React from "react";


export class FooterMode extends React.Component{
    render(){
        return(
            <div className="container footerContainer">
                <div className="row">
                    <div className="col">
                        <ul>
                            <li><a href="#">Centro de ayuda</a></li>
                            <li><a href="#">Información de seguridad</a></li>
                            <li><a href="#">Combatimos la discriminación</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li><a href="#">Animate a ser redactor</a></li>
                            <li><a href="#">Recursos para redactores</a></li>
                            <li><a href="#">Visita el foro de la comunidad</a></li>
                        </ul>    
                    </div>
                    <div className="col">
                        <ul>                       
                            <li><a href="#">Más sobre las nuevas funciones</a></li>
                            <li><a href="#">Empleo</a></li>
                            <li><a href="#">Inversionistas</a></li>
                        </ul>    
                    </div>
                </div>
            </div>
        )
    }
}

export default FooterMode;