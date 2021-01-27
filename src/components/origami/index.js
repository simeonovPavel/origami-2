import React from 'react'
import styles from './index.module.css'
import image from '../../images/blue-origami-bird.png'

const Origami = ({ description, author }) => {
    return (
        <div className={styles.post}>
        <img className={styles["origami-image"]} src={image} />
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
