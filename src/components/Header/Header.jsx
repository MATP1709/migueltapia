
import '../../css/header.css'
import { useEffect, useState } from 'react';
export const Header = ()=>{
    const texts = ["Front-End Developer", "Systems Engineer"];
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1000;

    useEffect(() => {
        const currentText = texts[textIndex];

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
        }

        const timeout = setTimeout(() => {
            setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex]);
    return(
<>
            <div className='ctn-header-banner'>
                <header>
                    <div className="ctn-header">
                        <a data-aos="fade-down" href="#sobreMi">Sobre Mi</a>
                        <a data-aos="fade-down" href="#skill">Skill</a>
                        <a data-aos="fade-down" href="#educacion">Educación</a>
                        <a data-aos="fade-down" href="#experiencia">Experiencia</a>
                        <a data-aos="fade-down" href="#portafolio">Portafolio</a>
                        <a href='https://wa.me/51937311762' data-aos="fade-down" className='btn-contacto'>Contáctame</a>
                    </div>
                </header>
                <div className='ctn-banner'>
                    <div className='banner'>
                        <div className='ctn-titulo' data-aos="zoom-in">
                            <h1>Miguel Tapia</h1>
                            <p className='dedication'>{texts[textIndex].slice(0, charIndex)}</p>
                        </div>
                        <div className='ctn-banner-redes'>
                            <a href="mailto:migueltapia1722@gmail.com" data-aos="fade-left" title='Gmail'>
                                <svg width={'40px'} height={'40px'} fill='white' viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                            </a>
                            <a target='_blank' href="https://linkedin.com/in/miguelangeltapiaperez" data-aos="fade-left"  title='LinkedIn'>
                                <svg width={'40px'} height={'40px'} fill='white' viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>
                            </a>
                            <a target='_blank' href="https://github.com/MATP1709" data-aos="fade-left"  title='Github'>
                                <svg width={'40px'} height={'40px'} fill='white' viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57c4.77-1.585 8.205-6.085 8.205-11.38c0-6.627-5.373-12-12-12"/></svg>
                            </a>
                        </div>
                    </div>
                    <div className='headerBg'></div>

                </div>
            </div>
        </>
    )
}