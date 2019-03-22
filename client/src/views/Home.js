import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import './index.css'
import { Layout, Menu, Breadcrumb, Icon, Input } from 'antd'

import { Link } from 'react-router-dom'

const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout

const Search = Input.Search

const Home = props => (
  <Layout>
    {/* <Header className='header'>
      <div className='logo' />
      <Menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key='1'>nav 1</Menu.Item>
        <Menu.Item key='2'>nav 2</Menu.Item>
        <Menu.Item key='3'>nav 3</Menu.Item>
      </Menu>
    </Header> */}
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Link to='/'>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Link>
        {/* <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item> */}
      </Breadcrumb>
      <Search
        placeholder='input search text'
        onSearch={value => console.log(value)}
        enterButton
      />
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu
              key='sub1'
              title={
                <span>
                  <Icon type='user' />
                  SmartShare
                </span>
              }
            >
              <Menu.Item key='1'>Home</Menu.Item>
              <Menu.Item key='2'>Upload</Menu.Item>
              <Menu.Item key='3'>Trash</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }} />
  </Layout>
)

export default Home
