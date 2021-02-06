import React from 'react'
import styles from './index.module.css'

const SubmiteButton = ({ title }) => {
    return (
        <button className={styles['submite-button']}>{title}</button>
    )
}

export default SubmiteButton;