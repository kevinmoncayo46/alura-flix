import styles from './Boton.module.css'

const Boton = ({ children, color, borde, innerGlow, textColor, customStyles, onclick, type }) =>{

    const estilo = {
        backgroundColor: color,
        border: borde ? `2px solid ${borde}` : 'none',
        color: textColor || 'white',
        boxShadow: innerGlow ? `inset 0 0 8px ${innerGlow}` : 'none',
        ...customStyles
    };

    return(
        <button 
            className={styles.boton} 
            style={estilo} 
            onClick={onclick}
            type={type || 'button'}
        >
            {children}
        </button>
    )
}

export default Boton