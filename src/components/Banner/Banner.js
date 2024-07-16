import React from 'react';
import styles from './Banner.module.css'
import player from './player.png'

const Banner = () => {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerContent}>
                <div className={styles.bannerLeft}>
                    <span className={styles.bannerLabel}>FRONT END</span>
                    <h1>Challenge React</h1>
                    <p>
                        Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
                    </p>
                </div>
                <div className={styles.bannerRight}>
                    <img src={player} alt="Qué significa pensar como programador?" className={styles.bannerImage} />
                </div>
            </div>
        </div>
    );
}

export default Banner