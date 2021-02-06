import React from 'react'
import styles from './index.module.css'
import Link from '../link'
import logo from '../../images/blue-origami-bird-flipped.png'
import getNavigation from '../../utils/navigation'

const Footer = () => {
    const links = getNavigation()
    return (
        <footer className={styles.footer}>
            {
                links.map(nav => {
                    return (
                        <Link
                            key={nav.title}
                            href={nav.link}
                            title={nav.title}
                            type="footer"
                        />
                    )
                })
            }
            <img className={styles.logo} src={logo} alt="footer-logo" />
            <p>
                Softuni 2021
            </p>
        </footer>
    )
}

export default Footer;


