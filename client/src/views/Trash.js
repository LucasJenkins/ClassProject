import React from 'react'
import { Layout, Button, Radio } from 'antd'
import SiderWrapper from '../containers/SiderNav'

const { Header, Content } = Layout

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
    this.setState({
      visible: false
    })
  }

  handleCancel (e) {
    e.preventDefault()
    this.setState({
      visible: false
    })
  }

  handleSubmit (e) {
    this.setState(prevState => ({}))
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
    return (
      <Layout>
        <SiderWrapper />
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
