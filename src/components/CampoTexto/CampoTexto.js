import styles from './CampoTexto.module.css'

const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`

    const { type = 'text'} = props

    const manejarCambio = (event) => {
        props.actualizarValor(event.target.value);
    };

    return(
    <div className={`${styles.campo} ${styles[`campo-${type}`]}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
    )
}

export default CampoTexto