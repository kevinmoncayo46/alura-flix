import Formulario from '../../components/Formulario/Formulario'
import styles from './NuevoVideo.module.css'
import { useNavigate } from 'react-router-dom'

const NuevoVideo = ({ agregarVideo }) => {

    const navigate = useNavigate();

    const handleVideoAdded = (newVideo) => {
        agregarVideo(newVideo)
        navigate('/');
    }

    return(
        <div className={styles.containerForm}>
            <Formulario onVideoAdded={handleVideoAdded}/>
        </div>
    )
}

export default NuevoVideo