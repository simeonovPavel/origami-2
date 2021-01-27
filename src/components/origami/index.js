import React from 'react'
import styles from './index.module.css'

const Origami = ({ description, author }) => {
    return (
        <div className={styles.post}>
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
