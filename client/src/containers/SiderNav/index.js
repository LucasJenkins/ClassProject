import React from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import { Layout, Menu, Icon } from 'antd'
// import { uploadBegin } from '../../action-creators/upload'

const { Sider } = Layout

const SiderWrapper = props => (
  <Sider width={200}>
    <h1
      style={{
        background: '#fff',
        backgroundColor: '#001529',
        color: 'white',
        textAlign: 'center',
        marginTop: '15px',
        fontSize: '30px'
      }}
    >
      SmartShare
    </h1>

    <Menu mode='vertical' theme='dark' style={{ height: '100%' }}>
      <Menu.Item style={{ margin: '30px' }}>
        <Icon type='home' style={{ fontSize: '25px' }} /> Home
      </Menu.Item>
      <Menu.Item
        style={{ margin: '30px' }}
        onClick={() => {
          props.addFiles()
          props.uploadBegin()
        }}
      >
        <Icon type='upload' style={{ fontSize: '25px' }} /> Upload
      </Menu.Item>
      <Menu.Item style={{ margin: '30px' }}>
        <Icon type='delete' style={{ fontSize: '25px' }} /> Trash
      </Menu.Item>
    </Menu>
  </Sider>
)

SiderWrapper.propTypes = {
  addFiles: PropTypes.func,
  uploadBegin: PropTypes.func
}

export default SiderWrapper
