import '../../css/portafolio.css'
export const Portafolio =()=>{
    const figma = <img className='etiquetas figma' src='./assets/svg/figma-color.svg' alt='figma' title='FIGMA'/>;
    const html5 = <img  className='etiquetas html5' src='./assets/svg/html5-color.svg' alt='html5' title='HTML5'/>;
    const js = <img  className='etiquetas js' src='./assets/svg/javascript-color.svg' alt='js' title='JS'/>;
    const css = <img  className='etiquetas css' src='./assets/svg/css3-color.svg' alt='css' title='CSS3'/>;
    const react = <img  className='etiquetas react' src='./assets/svg/react-color.svg' alt='react' title='REACT'/>;
    const github = <img  className='etiquetas react' src='./assets/svg/github.svg' alt='github' title='github'/>;
    return(
        <>
            <div className="contenedor" id="portafolio">
                <div className="subContenedor">
                    <p className="subtitle">Portafolio</p>
                    <div className="ctnPortafolio">

                        <div className="item-card-e" data-aos="flip-up">
                            <div className="portImg">
                                <img src="./assets/img/proyectos/BancoNacion.png" alt="" />
                            </div>
                            <div className="ctn-item-txt">
                                <div className="item-txt">
                                    <p className="item-title">Banco de la Nación</p>
                                    <p className="item-subtitle">Diseño y desarrollo web</p>
                                    <div className="ctnLabel">
                                        {html5} {js} {css} {figma}
                                    </div>
                                    <div className='ctnBtn'>
                                        <a target='_blank' href='https://www.bn.com.pe/' className='btn btnWeb'>
                                            Web
                                        </a>
                                        <a target='_blank' href='https://www.figma.com/design/QU578AsQlHM87sCu2NlI5g/BN-PRINCIPAL?node-id=0-1&m=dev&t=Eg68bwWsTc64c1ID-1' className='btn btnFigma'>
                                            Figma
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="wave"></div>
                            <div className="wave"></div>
                            <div className="wave"></div>
                        </div>

                        <div className="item-card-e" data-aos="flip-down">
                            <div className="portImg">
                                <img src="./assets/img/proyectos/makeups.png" alt="makEupS" />
                            </div>
                            <div className="ctn-item-txt">
                                <div className="item-txt">
                                    <p className="item-title">makE upS</p>
                                    <p className="item-subtitle">Diseño UX/UI web y móvil, Flyer, etc.</p>
                                    <div className="ctnLabel">
                                        {figma}
                                    </div>
                                    <div className='ctnBtn'>
                                        {/* <div className='btn btnWeb'>
                                            Web
                                        </div> */}
                                        <a target='_blank' href='https://www.figma.com/design/738P6ZJ3hkgVKhwFZTEkLu/makEupS?node-id=0-1&p=f' className='btn btnFigma'>
                                            Figma
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="wave"></div>
                            <div className="wave"></div>
                            <div className="wave"></div>
                        </div>

                        <div href='https://matp1709.github.io/migueltapia/' className="item-card-e" data-aos="flip-up">
                            <div className="portImg">
                                <img src="./assets/img/proyectos/portafolio.png" alt="makEupS" />
                            </div>
                            <div className="ctn-item-txt">
                                <div className="item-txt">
                                    <p className="item-title">Portafolio WEb</p>
                                    <p className="item-subtitle">Diseño y desarrollo</p>
                                    <div className="ctnLabel">
                                        {html5} {css} {js} {react} {github} {figma}
                                    </div>
                                    <div className='ctnBtn'>
                                        <a target='_blank' href='https://matp1709.github.io/migueltapia/' className='btn btnWeb'>
                                            Web
                                        </a>
                                        <a target='_blank' href='https://www.figma.com/design/BFhhogg3pcrQsQu1uVvNUO/Cv-Landing-Page?node-id=259-991&m=dev&t=BspuATrMyOmNOFLD-1' className='btn btnFigma'>
                                            Figma
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="wave"></div>
                            <div className="wave"></div>
                            <div className="wave"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}