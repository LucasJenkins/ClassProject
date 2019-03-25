import React from 'react'
import 'antd/dist/antd.css'
import './index.css'
import { Layout, Icon, Modal, List } from 'antd'

import SiderWrapper from '../containers/SiderNav/index'
import HeaderNav from '../containers/HeaderNav/index'

const { Content } = Layout

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.fileInput = React.createRef()

    this.state = {
      visible: false,
      modalFileInput: '',
      uploadedFiles: [],
      fileNames: [],
      view: 'list'
    }

    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleView = this.handleView.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  showModal () {
    this.setState({
      visible: true
    })
  }

  handleOk (e) {
    e.preventDefault()
    this.setState(prevState => ({
      visible: false
    }))

    this.handleSubmit()
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
      modalFileInput: this.fileInput,
      uploadedFiles: prevState.uploadedFiles.concat(this.state.modalFileInput),
      fileNames: prevState.fileNames.concat(
        this.fileInput.current.files[0].name
      )
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

  handleSearch (value) {
    console.log(
      this.state.fileNames.filter(
        el => el.toLowerCase() === value.toLowerCase()
      )[0]
    )
  }

  render () {
    console.log(this.state.modalValues)
    return (
      <Layout>
        <SiderWrapper addFiles={this.showModal} />

        <Layout>
          <HeaderNav
            handleView={this.handleView}
            view={this.state.view}
            fileNames={this.state.fileNames}
            handleSearch={this.handleSearch}
          />
          <Layout style={{ padding: '0 24px 24px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
                height: '100vh'
              }}
            >
              {this.state.view === 'list' ? (
                <List
                  // bordered
                  dataSource={this.state.fileNames}
                  renderItem={item => (
                    <List.Item>
                      <Icon type='file' />
                      {item}
                    </List.Item>
                  )}
                />
              ) : (
                <List
                  grid={{ gutter: 16, column: 4 }}
                  dataSource={this.state.fileNames}
                  renderItem={item => (
                    <List.Item>
                      <Icon type='file' />
                      {item}
                    </List.Item>
                  )}
                />
              )}

              <Modal
                title='Upload Modal'
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Upload file:
                    <input type='file' ref={this.fileInput} />
                  </label>
                  <br />
                </form>
              </Modal>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default Home
