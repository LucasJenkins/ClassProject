import React from 'react'
import { Layout } from 'antd'
import SiderWrapper from '../containers/SiderNav/index'
import HeaderNav from '../containers/HeaderNav/index'

const Trash = props => (
  <Layout>
    <SiderWrapper />
    <Layout>
      <HeaderNav />
      <Layout style={{ padding: '0 24px 24px' }} />
    </Layout>
  </Layout>
)

export default Trash
