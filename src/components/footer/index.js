import React from 'react'
import styles from './index.module.css'
import Link from '../link'
import image from '../../images/blue-origami-bird-flipped.png'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link href="#" title="Going to 1" type="footer" />
            <Link href="#" title="Going to 2" type="footer" />
            <Link href="#" title="Going to 3" type="footer" />
            <Link href="#" title="Going to 4" type="footer" />
            <Link href="#" title="Going to 5" type="footer" />
            <img src={image} />
            <p>
                Softuni 2021
            </p>
        </footer>
    )
}

export default Footer;


