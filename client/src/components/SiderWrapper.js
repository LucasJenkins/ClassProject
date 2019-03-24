import React from 'react'
import 'antd/dist/antd.css'
// import './index.css'
import { Layout, Button, Icon } from 'antd'

const { Header, Content, Footer, Sider } = Layout

const SiderWrapper = props => (
  <Sider width={200} style={{ background: '#fff' }}>
    <h1 className='logo'>Smartshare</h1>
    <div className='sider-buttons'>
      <Button className='btn'>
        <Icon type='home' />
        Home
      </Button>

      <Button className='btn' onClick={props.addFiles}>
        <Icon type='upload' />
        Upload
      </Button>

      <Button className='btn'>
        <Icon type='delete' />
        Trash
      </Button>
    </div>
  </Sider>
)

export default SiderWrapper
