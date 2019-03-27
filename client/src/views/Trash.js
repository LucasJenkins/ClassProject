import React from 'react'
import { Layout, Radio, Menu, Icon, List } from 'antd'
import { Link } from 'react-router-dom'

const { Header, Content, Sider } = Layout

class Trash extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      view: 'list',
      files: ['file1', 'file2', 'file3']
    }
    this.handleView = this.handleView.bind(this)
  }

  handleView (e) {
    this.setState({
      view: e.target.value
    })
  }

  render () {
    return (
      <Layout>
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

          <Menu
            mode='vertical'
            theme='dark'
            style={{ height: '100%', marginTop: 95 }}
          >
            <Menu.Item style={{ margin: '30px' }}>
              <Link to='/'>
                <Icon type='home' style={{ fontSize: '25px' }} /> Home
              </Link>
            </Menu.Item>

            <Menu.Item style={{ margin: '30px' }}>
              <Icon type='delete' style={{ fontSize: '25px' }} /> Trash
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center'
            }}
          >
            {/* <div>
              <Button type='primary' shape='circle' icon='undo' size='large' />
              <Button
                type='primary'
                shape='circle'
                icon='delete'
                size='large'
              />
            </div> */}
            <div>
              <Radio.Group value='button'>
                <Radio.Button value='list' onClick={this.handleView}>
                  List
                </Radio.Button>
                <Radio.Button value='grid' onClick={this.handleView}>
                  Grid
                </Radio.Button>
              </Radio.Group>
            </div>
          </Header>
          <Layout style={{ boxSizing: 'border-box' }}>
            <Content
              style={{
                background: '#fff',
                width: '100%',
                height: '82vh',
                padding: 30
              }}
            >
              {this.state.view === 'list' ? (
                <List
                  // bordered
                  dataSource={this.state.files}
                  renderItem={item => (
                    <List.Item
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon
                        type='file'
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          fontSize: '40px'
                        }}
                      />
                      <span>{item}</span>
                    </List.Item>
                  )}
                />
              ) : (
                <List
                  grid={{ gutter: 16, column: 4 }}
                  dataSource={this.state.files}
                  renderItem={item => (
                    <List.Item>
                      <Icon
                        type='file'
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          fontSize: '40px',
                          justifyContent: 'center'
                        }}
                      />
                      {item}
                    </List.Item>
                  )}
                />
              )}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default Trash
