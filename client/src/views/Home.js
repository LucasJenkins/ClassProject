import React from 'react'
import 'antd/dist/antd.css'
import './index.css'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Layout, List, Radio } from 'antd'
import { getAllFiles } from '../async-actions/getAllFiles'
import SiderWrapper from '../containers/SiderNav'
import UploadModal from '../containers/UploadModal'
import FileInfo from '../components/FileInfo'
import { _Table } from '../components/Table'

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
        <SiderWrapper addFiles={this.showModal} />

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
                <Radio.Button value='list' onClick={this.handleView}>
                  List
                </Radio.Button>
                <Radio.Button value='grid' onClick={this.handleView}>
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
              {this.state.view === 'list' ? (
                <_Table />
              ) : (
                <List
                  grid={{ gutter: 16, column: 4 }}
                  dataSource={this.state.fileNames}
                  renderItem={item => (
                    <List.Item>
                      <FileInfo key={item} value={item}>
                        Info
                      </FileInfo>
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

Home.propTypes = {
  // getAllFiles: PropTypes.func,
  // files: PropTypes.array
}

const mapStateToProps = state => ({
  files: state.upload.files
})

const mapDispatchToProps = {
  getAllFiles
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
