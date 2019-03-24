import React from 'react'
import 'antd/dist/antd.css'
import './index.css'
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

const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      visible: false,
      modalInput: '',
      modalValues: [],
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
    e.preventDefault()
    this.setState(prevState => ({
      visible: false
    }))

    this.handleSubmit()
  }

  handleCancel (e) {
    e.preventDefault()
    console.log(e)
    this.setState({
      visible: false
    })
  }

  handleSubmit () {
    this.setState(prevState => ({
      modalValues: [...prevState.modalValues, this.state.modalInput],
      modalInput: ''
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
    const inputs = this.state.modalValues.map(i => (
      <List.Item>
        <File input={i} />
      </List.Item>
    ))
    return (
      <Layout>
        <SiderWrapper addFiles={this.showModal} />
        <Layout>
          <HeaderNav handleView={this.handleView} view={this.state.view} />
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
                  dataSource={this.state.modalValues}
                  renderItem={item => <List.Item>{item}</List.Item>}
                />
              ) : (
                <List
                  grid={{ gutter: 16, column: 4 }}
                  dataSource={this.state.modalValues}
                  renderItem={item => <List.Item>{item}</List.Item>}
                />
              )}

              <Modal
                title='Upload Modal'
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <input
                  onChange={this.handleChange}
                  value={this.state.modalValue}
                />
              </Modal>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default Home
