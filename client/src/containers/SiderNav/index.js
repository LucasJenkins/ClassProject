import React from 'react'
// import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import { Layout, Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
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
        <Link to='/'>
          <Icon type='home' style={{ fontSize: '25px' }} /> Home
        </Link>
      </Menu.Item>
      {/* <Menu.Item
        style={{ margin: '30px' }}
        onClick={() => {
          props.addFiles()
          props.uploadBegin()
        }}
      >
        <Icon type='upload' style={{ fontSize: '25px' }} /> Upload
      </Menu.Item> */}
      <Menu.Item style={{ margin: '30px' }}>
        <Link to='/trash'>
          <Icon type='delete' style={{ fontSize: '25px' }} /> Trash
        </Link>
      </Menu.Item>
    </Menu>
  </Sider>
)

SiderWrapper.propTypes = {
  // addFiles: PropTypes.func,
  // uploadBegin: PropTypes.func
}

export default SiderWrapper
