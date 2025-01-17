import { Educacion } from './educacion'
import { Experiencia } from './Experiencia'
import { Portafolio } from './Portafolio'
import { Skill } from './Skill'
import { SobreMi } from './SobreMi'

export const Body =()=>{
    return(
        <>
            <SobreMi/>
            <Skill/>
            <Educacion/>
            <Experiencia/>
            <Portafolio/>
        </>
    )
}