import styles from './ListaOpciones.module.css'
import { useState, useEffect } from 'react'

const ListaOpciones = (props) => {

    const [categorias, setCategorias] = useState([])
    useEffect( () => {
        fetch("https://my-json-server.typicode.com/DylanBenz2000/alura-flix-api/categorias")
        .then(response => response.json())
        .then(data => {
            setCategorias(data)
        })
    }, [])

    const manejarCambio = (event) => {
        props.actualizarEquipo(event.target.value);
    };


    return(
        <div className={styles['lista-opciones']}>
            <label>Categorías</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionar categoría</option>
                {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.nombre}>
                        {categoria.nombre}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default ListaOpciones