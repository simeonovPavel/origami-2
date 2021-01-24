import React from 'react'
import styles from './index.module.css'
import Link from '../link'

const Header = () => {
    return (
        <header className={styles.navigation}>
            <nav>
                <Link />
                <Link />
                <Link />
            </nav>
        </header>
    )
}

export default Header;


