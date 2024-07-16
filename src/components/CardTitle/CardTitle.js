import styles from './CardTitle.module.css'

const CardTitle = ({ color, children, colorFondo}) => {
    return(
        <>
            <div className={styles.containerTitle}>
                <h3 className={styles.title} style={{ background: colorFondo }}>
                    {children}
                </h3>
            </div>

        </>

    )
}
export default CardTitle