import React from 'react'
import 'antd/dist/antd.css'
// import './index.css'
import { Router, Route, Link } from 'react-router-dom'

import { Layout, Button, Icon, Breadcrumb, Alert } from 'antd'

const { Header, Content, Footer, Sider } = Layout

const SiderWrapper = props => (
  <Sider width={200} style={{ background: '#fff' }}>
    <h1 className='logo'>Smartshare</h1>
    <div className='sider-buttons'>
      <Link to='/'>
        <Button className='btn'>
          <Icon type='home' />
          Home
        </Button>
      </Link>

      <Button className='btn' onClick={props.addFiles}>
        <Icon type='upload' />
        Upload
      </Button>

      <Link to='/trash'>
        <Button className='btn'>
          <Icon type='delete' />
          Trash
        </Button>
      </Link>
    </div>
  </Sider>
)

export default SiderWrapper
