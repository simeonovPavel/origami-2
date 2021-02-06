import React from 'react'
import PageWrapper from '../../components/page-layout'
import styles from './index.module.css'
import Title from '../../components/title'
import Origamis from '../../components/origamis'

const Publications = () => {
  return (
    <PageWrapper>
      <Title title="Publications" />
      <Origamis />
    </PageWrapper>
  )
}

export default Publications;
