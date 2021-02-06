import React from 'react'
import PageWrapper from '../../components/page-layout'
import styles from './index.module.css'
import Title from '../../components/title'


const ErrorPage = () => {
    return (
        <PageWrapper>
            <Title title="Error 404" />
        </PageWrapper>
    )
}

export default ErrorPage;