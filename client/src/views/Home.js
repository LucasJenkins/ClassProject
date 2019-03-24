import React from 'react'
import 'antd/dist/antd.css'
import './index.css'
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Input,
  Button,
  Upload,
  message,
  Modal
} from 'antd'

import File from '../components/File'
import SiderWrapper from '../components/SiderWrapper'

const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout

const Search = Input.Search

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      visible: false,
      modalInput: '',
      modalValues: []
    }

    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleChange = this.handleChange.bind(this)
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

  render () {
    const inputs = this.state.modalValues.map(i => (
      <li>
        <File input={i} />
      </li>
    ))
    return (
      <Layout>
        <SiderWrapper addFiles={this.showModal} />
        <Layout>
          <Header className='header'>
            <Search
              className='search'
              placeholder='input search text'
              onSearch={value => console.log(value)}
              enterButton
            />
          </Header>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
                height: '100vh'
              }}
            >
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
              <ul>{inputs}</ul>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default Home
