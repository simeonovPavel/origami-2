import React from 'react'
import styles from './index.module.css'
import Header from '../header'
import Footer from '../footer'
import Aside from '../aside'

const PageLayout = (props) => {
    return (
        <div className={styles.app}>
            <Header />
            <div className={styles.container}>
                <Aside />
                <div className={styles.main}>
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PageLayout;