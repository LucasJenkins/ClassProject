import React from 'react'
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Button,
  Upload,
  message,
  Modal,
  List
} from 'antd'
import File from '../components/File'
import SiderWrapper from '../containers/SiderNav/index'
import HeaderNav from '../containers/HeaderNav/index'
const { Content } = Layout

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
