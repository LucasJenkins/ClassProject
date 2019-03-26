import React from 'react'
import { Layout, Button, Radio, Upload, Modal, Icon, message } from 'antd'
import UploadModal from '../containers/UploadModal'

import { Link } from 'react-router-dom'

const { Header, Content, Sider } = Layout

class Trash extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false,
      modalFileInput: React.createRef(),
      uploadedFiles: [],
      fileNames: [],
      fileList: [],
      view: 'list'
    }

    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleView = this.handleView.bind(this)
  }

  showModal () {
    this.setState({
      visible: true
    })
  }

  handleOk (e) {
    // e.preventDefault()
    this.setState({
      visible: false
    })

    // this.handleSubmit()
  }

  handleCancel (e) {
    e.preventDefault()
    this.setState({
      visible: false
    })
  }

  handleSubmit (e) {
    // e.preventDefault()
    this.setState(prevState => ({
      // modalFileInput: this.fileInput,
      // uploadedFiles: prevState.uploadedFiles.concat(this.state.modalFileInput),
      // fileNames: prevState.fileNames.concat(
      //   this.fileInput.current.files[0].name
      // )
    }))
  }

  handleChange (e) {
    this.setState({
      modalInput: e.target.value
    })
  }

  handleView (e) {
    this.setState({
      view: e.target.value
    })
  }

  render () {
    const props = {
      name: 'file',
      action: '//jsonplaceholder.typicode.com/posts/',
      headers: {
        authorization: 'authorization-text'
      },
      onChange (info) {
        if (info.file.status !== 'uploading') {
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`)
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`)
        }
      }
    }

    return (
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <h1 className='logo'>Smartshare</h1>
          <div className='sider-buttons'>
            <Link to='/'>
              <Button className='btn'>
                <Icon type='home' />
                Home
              </Button>
            </Link>

            <Button className='btn' onClick={this.showModal}>
              <Icon type='upload' />
              Upload
            </Button>

            <Link to='/trash'>
              <Button className='btn'>
                <Icon type='delete' />
                Trash
              </Button>
            </Link>

            <UploadModal
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              fileInput={this.state.modalFileInput}
              fileNames={this.state.fileNames}
              multiple
            />
          </div>
        </Sider>

        <Layout>
          <Header
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}
          >
            <div>
              <Button type='primary' shape='circle' icon='undo' size='large' />
              <Button
                type='primary'
                shape='circle'
                icon='delete'
                size='large'
              />
            </div>
            <div>
              <Radio.Group value='button'>
                <Radio.Button value='list'>List</Radio.Button>
                <Radio.Button value='grid'>Grid</Radio.Button>
              </Radio.Group>
            </div>
          </Header>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
                height: '100vh'
              }}
            />
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default Trash
