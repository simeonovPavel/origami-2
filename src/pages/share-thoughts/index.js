import React from 'react'
import styles from './index.module.css'
import PageWrapper from '../../components/page-layout'
import Title from '../../components/title'
import SubmiteButton from '../../components/button/submite-button'
import Origamis from '../../components/origamis'

const ShareThoughtsPage = () => {
    return (
        <PageWrapper>
            <Title title="Shate your thoughts..." />
            <div className={styles.container}>
                <div>
                    <textarea defaultValue="Placeholder..."></textarea>
                </div>
                <div>
                    <SubmiteButton title="Post" />
                </div>
            </div>
            <Origamis length={3} />
        </PageWrapper>
    );
}

export default ShareThoughtsPage