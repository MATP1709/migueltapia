import '../../css/portafolio.css'
export const Portafolio =()=>{
    const figma = <div className='etiquetas ctn-figma'><div className='figma'>Figma</div></div>;
    const html5 = <div className='etiquetas html5'>HTML5</div>;
    const js = <div className='etiquetas js'>JS</div>;
    const css = <div className='etiquetas css'>CSS</div>;
    const react = <div className='etiquetas '>React</div>;
    const jquery = <div className='etiquetas '>Jquery</div>;
    return(
        <>
            <div className="contenedor" id="portafolio">
                <div className="subContenedor">
                    <p className="subtitle">Portafolio</p>
                    <div className="ctnPortafolio">
                        <a target='_blank' href='https://www.bn.com.pe/' className="item-card-e" data-aos="flip-up">
                            <div className="portImg">
                                <img src="./assets/img/proyectos/BancoNacion.png" alt="" />
                            </div>
                            <div className="ctn-item-txt">
                                <div className="item-txt">
                                    <p className="item-title">Banco de la Nación</p>
                                    <p className="item-subtitle">Diseño y desarrollo web</p>
                                    <div className="ctnLabel">
                                        {figma} {html5} {js} {css}
                                    </div>
                                </div>
                            </div>
                            <div className="wave"></div>
                            <div className="wave"></div>
                            <div className="wave"></div>
                        </a>

                    </div>
                </div>
            </div>
        </>
    )
}