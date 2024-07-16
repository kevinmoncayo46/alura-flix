import { Link } from 'react-router-dom'
import Boton from '../Boton/Boton'
import ContainerButtons from '../ContainerButtons/ContainerButtons'
import styles from './Card.module.css'

const Card = ({ id, foto, titulo, categoriaColor, onDelete }) => {

    const handleDeleteClick = () => {
        onDelete(id)
    }

    return(
        <div className={styles.card} style={{ boxShadow: `0px 4px 8px ${categoriaColor}` }}>
            <Link to={`/${id}`}>
                <img src={foto} className={styles.cardImg} style={{ boxShadow: `0px 4px 8px ${categoriaColor}` }} alt={titulo} />
            </Link>
            <ContainerButtons bordeColor={categoriaColor}>
                <Boton color="transparent" onclick={handleDeleteClick}> <i className="fa fa-trash"></i>Borrar</Boton>
            </ContainerButtons>
        </div>
    )
}

export default Card