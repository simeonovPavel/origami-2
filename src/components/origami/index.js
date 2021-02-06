import React from 'react'
import styles from './index.module.css'
import image from '../../images/blue-origami-bird.png'

const Origami = ({ description, author, index }) => {
    return (
        <div className={styles.post}>
            <img className={styles["origami-image"]} src={image} alt="origami-logo"/>
            <span>{index}. </span>
            <p className={styles.description}>
                {description}
            </p>
            <div>
                <span className={styles.user}>
                    {author.username}
                </span>
            </div>
        </div>
    )
}

export default Origami;
