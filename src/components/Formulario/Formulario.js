import CampoTexto from '../CampoTexto/CampoTexto'
import styles from './Formulario.module.css'
import { useState } from 'react';
import ListaOpciones from '../ListaOpciones/ListaOpciones';
import Boton from '../Boton/Boton';

import { agregarVideo } from '../../services/apiService';

const Formulario = ({onVideoAdded}) => {

    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagen, setImagen] = useState('');
    const [video, setVideo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const manejarEnvio = async (event) => {
        event.preventDefault();
        try {
            const newVideo = await agregarVideo(titulo, categoria, imagen, video, descripcion);
            onVideoAdded(newVideo);
            limpiarInputs();
            alert('Video agregado exitosamente');
        } catch (error) {
            alert('Error al agregar el video');
        }
    };

    
    function limpiarInputs(){
        setTitulo('');
        setCategoria('');
        setImagen('');
        setVideo('');
        setDescripcion('');
    }

    return(
        <>
        <section className={styles.formulario}>
            <form onSubmit={manejarEnvio}>
                <h1 className={styles.titulo}>Nuevo Vídeo</h1>
                <p className={styles.parrafo}>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VÍDEO</p>
                <h2 className={styles.subtitle}>Crear Tarjeta</h2>

                <CampoTexto
                    titulo="Título"
                    placeholder="Ingrese el título"
                    required={true}
                    valor={titulo}
                    actualizarValor={setTitulo}
                    type="text"
                />

                <ListaOpciones
                    valor={categoria}
                    actualizarEquipo={setCategoria}
                />

                <CampoTexto
                    titulo="Imagen"
                    placeholder="Ingrese el enlace de la imagen"
                    required={true}
                    valor={imagen}
                    actualizarValor={setImagen}
                    type="url"
                />

                <CampoTexto
                    titulo="Video"
                    placeholder="Ingrese el enlace del video"
                    required={true}
                    valor={video}
                    actualizarValor={setVideo}
                    type="url"
                />

                <CampoTexto
                    titulo="Descripción"
                    placeholder="¿De qué se trata este video?"
                    required={true}
                    valor={descripcion}
                    actualizarValor={setDescripcion}
                    type="text"
                />

            <div className={styles.containerBotones}>
            <Boton 
                    color="black" 
                    borde="#007bff"
                    innerGlow="#007bff"
                    textColor="#007bff"
                    type="submit"
                >
                    Enviar
                </Boton>
                
            <Boton 
                color="transparent"
                borde="#fff"
                textColor="#fff"
                onclick ={limpiarInputs}
            >
                Limpiar
            </Boton>
            </div>


            
            </form>
        </section>
        </>

    )
}

export default Formulario