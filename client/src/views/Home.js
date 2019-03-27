import React from 'react'
import 'antd/dist/antd.css'
import './index.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Layout, List, Radio } from 'antd'
import { getAllFiles } from '../async-actions/getAllFiles'
import { setViewModeGrid, setViewModeList } from '../action-creators/home'
import SiderWrapper from '../containers/SiderNav'
import UploadModal from '../containers/UploadModal'
import FileInfo from '../components/FileInfo'
import ListView from '../components/ListView'

const { Content, Header } = Layout

class Home extends React.Component {
  render () {
    const { viewMode, files, setViewModeGrid, setViewModeList } = this.props
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
              <Radio.Group value='button'>
                <Radio.Button value='list' onClick={setViewModeList}>
                  List
                </Radio.Button>
                <Radio.Button value='grid' onClick={setViewModeGrid}>
                  Grid
                </Radio.Button>
              </Radio.Group>
            </div>
          </Header>

          <Layout>
            <Content
              style={{
                background: '#fff',
                padding: 24,

                minHeight: 280,
                height: '100vh'
              }}
            >
              {viewMode === 'list' ? (
                <ListView />
              ) : (
                <List
                  grid={{ gutter: 16, column: 4 }}
                  dataSource={files}
                  renderItem={item => (
                    <List.Item>
                      <FileInfo key={item.id} value={item.name}>
                        Info
                      </FileInfo>
                    </List.Item>
                  )}
                />
              )}
              <UploadModal />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

Home.propTypes = {
  viewMode: PropTypes.string,
  files: PropTypes.array,
  setViewModeGrid: PropTypes.func,
  setViewModeList: PropTypes.func
}

const mapStateToProps = state => ({
  files: state.home.fileList,
  viewMode: state.home.viewMode
})

const mapDispatchToProps = {
  getAllFiles,
  setViewModeGrid,
  setViewModeList
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
