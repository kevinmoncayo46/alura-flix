import Boton from '../Boton/Boton'
import CabeceraLink from '../CabeceraLink/CabeceraLink'
import styles from './Cabecera.module.css'
import logo from './LogoMain.png'

const Cabecera = () => {
    return(
        <header style={styles.header}>
            
            <div className={styles.logo}>
                <img src={logo} alt='Logo Alura Flix' className={styles.logo} />
            </div>

        <nav className={styles.containerButtons}>

            <CabeceraLink url={'/'}>
                <Boton 
                    color="black" 
                    borde="#007bff"
                    innerGlow="#007bff"
                    textColor="#007bff"
                >
                    HOME
                </Boton>
            </CabeceraLink>

            <CabeceraLink url={'/nuevo-video'}>
            <Boton 
                color="transparent"
                borde="#fff"
                textColor="#fff"
            >
                NUEVO VÍDEO
            </Boton>
            </CabeceraLink>
                


        </nav>

        </header>
    )
}

export default Cabecera