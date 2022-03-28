import React from "react";
import Cookies from 'universal-cookie'

export function Home(){
    const cookies = new Cookies();

    const checkLog=()=>{
        if(!cookies.get('user') || !cookies.get('password')){
            window.location.href="./login";
        }
    }

    React.useEffect(()=>{
        checkLog();
    },[])

    return(
        <div className="container homeContainer">
            <div className="row primeraSeccion">
                <div className="col-md-8" id="primeraNoticia">
                <div class="card">
                    <div class="card-body darkCardBody">
                        <h5 class="card-title">La insoportable volatilidad del gas: la Argentina, ante un posible efecto dominó que la dejaría sin suficiente calefacción y electricidad</h5>
                        <a 
                            href="https://www.infobae.com/economia/2022/03/26/la-insoportable-volatilidad-del-gas-la-argentina-ante-un-posible-efecto-domino-que-la-dejaria-sin-suficiente-calefaccion-y-electricidad/" 
                            class="btn btn-primary btnLeerNoticia"
                        >LEER NOTICIA
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-md-4" id="segundaNoticia">
                    <div class="card">
                        <div class="card-body darkCardBody">
                            <h5 class="card-title">Ramón Arroyo, el “Ironman” que compite con esclerosis múltiple: “Le di la espalda a la enfermedad por 3 años y hacer deporte me cambió la vida”</h5>
                            <p class="card-text">“Yo era un tipo común, que hacía lo que se supone que tiene que hacer cualquier persona común durante su vida cotidiana: terminar el colegio, ir a la universidad, conseguir un trabajo para crecer, ir mejorando y tener éxito. Cumplía con el esquema promedio de una persona que hacía lo que debía hacer hasta el 15 de agosto del 2004″, recuerda Ramón Arroyo en diálogo con Infobae mientras se prepara para disputar el medio Ironman de San Juan (Argentina) junto con el equipo de Re Max.</p>
                            <a 
                                href="https://www.infobae.com/america/deportes/2022/03/26/ramon-arroyo-el-ironman-que-compite-con-esclerosis-multiple-le-di-la-espalda-a-la-enfermedad-por-3-anos-y-hacer-deporte-me-cambio-la-vida/"
                                class="btn btn-primary btnLeerNoticia"
                            >
                                LEER NOTICIA
                            </a>
                        </div>
                        </div>
                </div>
            </div>
            <div className="row segundaSeccion">
                <div className="col" id="primeraNoticia">
                    <div class="card">
                        <div class="card-body darkCardBody">
                            <h5 class="card-title">Así es el robot taquero que rebana la carne como nunca antes visto</h5>
                            <p class="card-text">“El futuro es hoy, viejo”, o al menos eso dice un meme cuando hay escenas como esta: Un robot taquero que rebana finamente la carne de un trompo para que esta sea colocada al interior de unas tortillas, bolillo o lo que prefiera el comensal.
                            Se trata de un robot llamado Der Gerät, fabricado por la compañía alemana Aldakur RobotSystems, la cual automatizó el proceso de rebanar un trompo de carne. Su objetivo es que el personal no esté expuesto al calor directo y se puedan tomar porciones de carne directamente para su preparación, además de “garantizar un trabajo agradable e higiénico”.</p>
                            <a 
                                href="https://www.infobae.com/america/tecno/2022/03/26/asi-es-el-robot-taquero-que-rebana-la-carne-como-nunca-antes-visto/" 
                                class="btn btn-primary btnLeerNoticia"
                            >LEER NOTICIA</a>
                        </div>
                    </div>
                </div>
                <div className="col" id="segundaNoticia">
                    <div class="card">
                        <div class="card-body darkCardBody">
                            <h5 class="card-title">Twitter permitirá buscar mensajes específicos en la bandeja de mensajes directos</h5>
                            <p class="card-text">Twitter incorporó una nueva actualización que les permite a los usuarios buscar mensajes dentro de la bandeja de entrada de los Mensajes Directos (MD) usando tanto nombres como palabras clave.
                                “Ahora puedes usar la barra de búsqueda de tu bandeja de entrada para encontrar mensajes específicos usando palabras clave o nombres”, anunció la red social a través de un tweet publicado en su cuenta oficial. “Sabemos que llevan mucho tiempo esperando esta opción”, subrayó la compañía.</p>
                            <a 
                                href="https://www.infobae.com/america/tecno/2022/03/26/twitter-permitira-buscar-mensajes-especificos-en-la-bandeja-de-mensajes-directos/"
                                class="btn btn-primary btnLeerNoticia"
                            >LEER NOTICIA</a>
                        </div>
                    </div>
                </div>
                <div className="col" id="terceraNoticia">
                    <div class="card">
                        <div class="card-body darkCardBody">
                            <h5 class="card-title">Los momentos más incómodos en la célebre gala de premiación</h5>
                            <p class="card-text">Este domingo 27 de marzo llega la 94 entrega de los Premios Oscar, por lo que la euforia de los cinéfilos se ha desatado y la expectativa sobre lo que pasará en el Dolby Teathre de Los Angeles, California, mantiene al público en ascuas.
                            En la famosa gala de premiación se galardonará a grandes producciones y famosas estrellas que destacaron el año pasado: El poder del perro, de Jane Campion, encabeza la lista con doce nominaciones, mientras figuras como Will Smith -nominado por El método Williams-; Jessica Chastain, por Los ojos de Tammy Faye; Penélope Cruz, por Madres paralelas y Javier Bardem, por Being the Ricardos, engalanarán el evento que seguramente estará plagado de momentos memorables.
                            </p>
                            <a 
                                href="https://www.infobae.com/america/entretenimiento/2022/03/26/oscar-2022-momentos-mas-incomodos-en-la-celebre-gala-de-premiacion/"
                                class="btn btn-primary btnLeerNoticia"
                            >LEER NOTICIA</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row terceraSeccion">
                <div className="col-md-2" id="primeraNoticia">
                    <div class="card">
                        <div class="card-body darkCardBody">
                            <h5 class="card-title cardTitlePrimera">Las perras, las lobas y las maras “mandan a sus bebés” a la guardería</h5>
                            <a 
                                href="https://www.infobae.com/america/perrosygatos/2022/03/26/las-perras-las-lobas-y-las-maras-mandan-a-sus-bebes-a-la-guarderia/"
                                class="btn btn-primary btnLeerNoticia"
                            >LEER NOTICIA</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-10" id="segundaNoticia">
                    <div class="card">
                        <div class="card-body darkCardBody">
                            <h5 class="card-title">Tras casi 30 años con una identidad “falsa”, descubren a un nuevo pez arcoíris en las islas Maldivas</h5>
                            <p class="card-text">Entre las aguas y los coloridos corales de las Maldivas, un pez resplandeciente con los colores del arcoíris se convirtió en el primero en ser nombrado y descrito por un investigador maldivo. Las Maldivas es una nación de pequeñas islas, situada a unos 800 kilómetros al sur de India. El archipiélago cuenta con el séptimo sistema de arrecifes de coral más grande del planeta.
                                El descubrimiento de este nuevo pez colorido se conoce como el pez hada con velo de rosa, “Cirrhilabrus finifenmaa”, recibe su nombre en el idioma local Dhivehi. Finifenmaa significa “rosa” y es un tributo a la flor nacional rosada de las islas, así como al color de los peces.</p>
                            <a 
                                href="https://www.infobae.com/america/perrosygatos/2022/03/21/tras-casi-30-anos-con-una-identidad-falsa-descubren-a-un-nuevo-pez-arcoiris-en-las-islas-maldivas/" 
                                class="btn btn-primary btnLeerNoticia"
                            >LEER NOTICIA</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;