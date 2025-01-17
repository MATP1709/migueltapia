import '../../css/sobremi.css'
export const SobreMi =()=>{
    return (
        <>
            <div className="contenedor" id='sobreMi'>
                <div className="subContenedor">
                    <div className='sobreMi'>
                        <div className="ctn-izquierda " data-aos="fade-right">
                            <div className="txt-sobremi">
                                <p className="subtitle">Sobre Mi</p>
                                <p>
                                Mi nombre es Miguel Angel, tengo 25 años. Estudié en la Universidad Privada del Norte, donde obtuve el grado de bachiller en Ingeniería de Sistemas Computacionales. Realicé mis prácticas profesionales en el Banco de la Nación, donde desarrollé mis habilidades en programación web front-end. Mi formación académica y experiencia laboral me han permitido adquirir conocimientos sólidos y habilidades prácticas en el desarrollo de interfaces web, contando además con certificados que respaldan mi trayectoria profesional.
                                </p>
                            </div>
                        </div>
                        <div className="ctn-derecha" data-aos="fade-left">
                            <div className="ctn-img">
                                <img src="./assets/img/programando.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}