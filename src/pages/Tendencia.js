import React from "react";
import Cookies from 'universal-cookie';

export function Tendencia(){

    const cookies = new Cookies();

    const checkLog=()=>{
        if(!cookies.get('user') || !cookies.get('password')){
            window.location.href= "./login";
        }
    }

    React.useEffect(()=>{
        checkLog();
    },[])

        return(
            <div className="container tendenciaContainer">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body darkCardBody">
                                <h5 className="card-title">
                                        Nueva casilla de la Renta para las criptomonedas: por qué la incluye Hacienda y qué tenemos que hacer con 
                                        ella
                                </h5>
                                <a href="https://www.xataka.com/criptomonedas/nueva-casilla-renta-para-criptomonedas-que-incluye-hacienda-que-tenemos-que-hacer-ella" 
                                    className="btn btn-primary btnLeerNoticia"
                                >Leer noticia</a>
                            </div>
                            </div>
                        </div>

                    <div className="col">
                        <div className="card">
                            <div className="card-body darkCardBody">
                                <h5 className="card-title"> 
                                    El banco de inversión de EEUU Cowen lanza una división dedicada a las criptomonedas
                                </h5>
                                <a href="https://es.investing.com/news/cryptocurrency-news/el-banco-de-inversion-de-eeuu-cowen-lanza-una-division-dedicada-a-las-criptomonedas-2229991"
                                    className="btn btn-primary btnLeerNoticia" 
                                >Leer noticia</a>
                            </div>
                        </div>    
                    </div>
                        
                    <div className="col">
                        <div className="card">
                        <div className="card-body darkCardBody">
                            <h5 className="card-title">
                                El Bitcoin rompió la marca de USD 42.000: cuál es el nuevo factor que vuelve 
                                a impulsar al mundo “cripto”
                            </h5>
                            <a href="https://www.infobae.com/economia/2022/03/22/el-bitcoin-rompio-la-marca-de-usd-42000-cual-es-el-nuevo-factor-que-vuelve-a-impulsar-al-mundo-cripto/" 
                                className="btn btn-primary btnLeerNoticia"
                            >Leer noticia</a>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body darkCardBody">
                                <h5 className="card-title">
                                        Nueva casilla de la Renta para las criptomonedas: por qué la incluye Hacienda y qué tenemos que hacer con 
                                        ella
                                </h5>
                                <a href="https://www.infobae.com/tendencias/2022/03/25/dia-del-waffle-de-receta-milenaria-a-revolucion-en-el-calzado-y-aliado-discutido-de-los-desayunos/" 
                                    className="btn btn-primary btnLeerNoticia"
                                >Leer noticia</a>
                            </div>
                            </div>
                        </div>

                    <div className="col">
                        <div className="card">
                            <div className="card-body darkCardBody">
                                <h5 className="card-title"> 
                                    El banco de inversión de EEUU Cowen lanza una división dedicada a las criptomonedas
                                </h5>
                                <a href="https://www.infobae.com/tendencias/2022/03/24/como-utilizar-el-lenguaje-para-cambiar-y-construir-tu-realidad/"
                                    className="btn btn-primary btnLeerNoticia"
                                >Leer noticia</a>
                            </div>
                        </div>    
                    </div>
                        
                    <div className="col">
                        <div className="card">
                        <div className="card-body darkCardBody">
                            <h5 className="card-title">
                                El vino también puede ser un viaje exquisito: cómo es el resort que conecta con la bebida 
                                nacional a través de todos los sentidos
                            </h5>
                            <a href="https://www.infobae.com/tendencias/2022/03/24/el-vino-tambien-puede-ser-un-viaje-exquisito-como-es-el-resort-que-conecta-con-la-bebida-nacional-a-traves-de-todos-los-sentidos/" 
                                className="btn btn-primary btnLeerNoticia"
                            >Leer noticia</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
export default Tendencia;