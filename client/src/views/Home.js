import React from 'react'
import 'antd/dist/antd.css'
import './index.css'

import { Layout, Icon, List, Button, Radio } from 'antd'

import SiderWrapper from '../containers/SiderNav'
import UploadModal from '../containers/UploadModal'

const { Content, Header } = Layout

class Home extends React.Component {
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
      // modalFileInput: this.fileInput,
      // uploadedFiles: prevState.uploadedFiles.concat(this.state.modalFileInput),
      // fileNames: prevState.fileNames.concat(
      //   this.fileInput.current.files[0].name
      // )
    }))
    console.log(this.state.modalFileInput.current.files[0].name)
    // const data = this.state.modalFileInput.current.files[0].map(el => el)
    console.log([...this.state.modalFileInput.current.files])
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
    console.log(this.state.uploadedFiles)
    console.log(this.state.fileNames)

    return (
      <Layout>
        <SiderWrapper addFiles={this.showModal} />

        <Layout>
          <Header
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}
          >
            <div />
            <div>
              <Button
                type='primary'
                shape='circle'
                icon='folder'
                size='Large'
              />
              <Button
                type='primary'
                shape='circle'
                icon='download'
                size='Large'
              />
              <Button
                type='primary'
                shape='circle'
                icon='delete'
                size='Large'
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
              <UploadModal
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                fileInput={this.state.modalFileInput}
                fileNames={this.state.fileNames}
                multiple
              />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default Home
