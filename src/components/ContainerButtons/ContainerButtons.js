import styles from './ContainerButtons.module.css'
const ContainerButtons = ({children, bordeColor }) => {
    return(
        // <div className={styles.container} style={{ borderColor: bordeColor }}>
        //     {children}
        // </div>
        <div className={styles.container} >
            {children}
        </div>
        
    )
}

export default ContainerButtons