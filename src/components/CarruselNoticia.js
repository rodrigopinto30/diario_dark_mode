import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export function CarruselNoticia (){
   
    const noticias = [
        {
            id: "1",
            title: "“No buscó matar, fue solo una advertencia”: un experto dio detalles del envenenamiento a Abramovich y a los negociadores ucranianos",
            url: "https://www.infobae.com/america/mundo/2022/03/28/no-busco-matar-fue-solo-una-advertencia-un-experto-dio-detalles-del-envenenamiento-a-abramovich-y-a-los-negociadores-ucranianos/"
        },
        {
            id: "2",
            title: "Escándalo sin precedentes en los Oscar: Will Smith le dio un golpe a Chris Rock por burlarse de la alopecia de su esposa",
            url: "https://www.infobae.com/america/entretenimiento/2022/03/28/escandalo-sin-precedentes-en-los-oscar-will-smith-le-dio-un-golpe-a-chris-rock-por-burlarse-de-la-alopecia-de-su-esposa/"
        },
        {
            id: "3",
            title: "La trágica historia de Robert Opel, el hombre que protagonizó otro histórico escándalo en los Oscar en 1974",
            url: "https://www.infobae.com/america/entretenimiento/2022/03/28/la-tragica-historia-de-robert-opel-el-hombre-que-protagonizo-otro-historico-escandalo-en-los-oscar-en-1974/"
        },
        {
            id: "4",
            title: "¿Catarata de cambios? Las variantes que analiza Lionel Scaloni para definir la formación de Argentina ante Ecuador",
            url: "https://www.infobae.com/deportes/2022/03/28/catarata-de-cambios-las-variantes-que-analiza-lionel-scaloni-para-definir-la-formacion-de-argentina-ante-ecuador/"
        },
        {
            id: "5",
            title: "“Dile que lo aplastaré”: la respuesta de Vladimir Putin a Roman Abramovich cuando le llevó una nota escrita por Zelensky",
            url: "https://www.infobae.com/america/mundo/2022/03/28/dile-que-lo-aplastare-la-respuesta-de-vladimir-putin-a-roman-abramovich-cuando-le-llevo-una-nota-escrita-por-zelensky/"
        },
        {
            id: "6",
            title: "El mordaz monólogo de Enrique Pinti sobre el “Peronismo de izquierda”: “Es como el helado caliente, ¡No existe!”",
            url: "https://www.infobae.com/politica/2022/03/28/el-mordaz-monologo-de-enrique-pinti-sobre-el-peronismo-de-izquierda-es-como-el-helado-caliente-no-existe/"
        },
    ]

    const settings={
        dots: true,
        fade: true,
        infinte: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className:"slides"
    }

    return(
        <div className="containerCarrusel">
            <Slider {...settings}>
                {noticias.map((noticia) =>(
                    <div className="contenedorNoticiasCarrusel" key={noticia.id}>
                        <a href={noticia.url}>
                            {noticia.title}
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CarruselNoticia;

















{/*
    let scrollingRef = React.useRef(null);
    let intervalo = null;
    const step = 1;

    const start = ()=>{
        intervalo = setInterval(function () {
           // scrollingRef.scrollLeft = scrollingRef.scrollLeft + 10;
        
        }, 1000);
    };

    function stop(){}

    React.useEffect(()=>{
       // start()
        return () =>clearInterval(intervalo);
    })

 
    return(
        <div className="carrusel">
            <div className="carruselItems" ref={scrollingRef}>
                <div className="carruselItem">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="carruselItem">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="carruselItem">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="carruselItem">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="carruselItem">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="carruselItem">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="carruselItem">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="carruselItem">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="carruselItem">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="carruselItem">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="carruselItem">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    */}
