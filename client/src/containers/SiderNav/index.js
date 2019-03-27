import React from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import { Layout, Menu, Icon, Button } from 'antd'
import { Link } from 'react-router-dom'
// import { uploadBegin } from '../../action-creators/upload'
import { connect } from 'react-redux'
import { showModal, hideModal } from '../../action-creators/upload'

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

    <Button
      type='primary'
      shape='round'
      icon='upload'
      size='large'
      style={{ margin: '0 0 40px 20px' }}
      onClick={() => {
        console.log(props)
        // props.addFiles()
        props.showModal()
        props.uploadBegin()
      }}
    >
      Upload
    </Button>

    <Menu mode='vertical' theme='dark' style={{ height: '100%' }}>
      <Menu.Item style={{ margin: '30px' }}>
        <Link to='/'>
          <Icon type='home' style={{ fontSize: '25px' }} /> Home
        </Link>
      </Menu.Item>

      <Menu.Item style={{ margin: '30px' }}>
        <Link to='/trash'>
          <Icon type='delete' style={{ fontSize: '25px' }} /> Trash
        </Link>
      </Menu.Item>
    </Menu>
  </Sider>
)

SiderWrapper.propTypes = {
  addFiles: PropTypes.func,
  uploadBegin: PropTypes.func
}

// export default SiderWrapper

const mapStateToProps = state => ({
  modalVisible: state.upload.modalVisible
})

const mapDispatchToProps = {
  showModal,
  hideModal
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiderWrapper)
