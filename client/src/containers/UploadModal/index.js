import React from 'react'
import 'antd/dist/antd.css'
import { Modal, Upload, Button, Icon, Layout } from 'antd'
import './index.css'

const { Content } = Layout

class UploadModal extends React.Component {
  constructor (props) {
    super(props)
  }
  uploadFiles () {
    const x = this.props.fileNames.map((el, index) => <p key={index}>{el}</p>)
  }

  render () {
    return (
      <Modal
        title='Upload File(s)'
        visible={this.props.visible}
        onOk={this.props.onOk}
        onCancel={this.props.onCancel}
        okText='Upload'
      >
        <h3>Files to upload:</h3>
        <div className='files'>
          {this.props.fileNames.map((el, index) => (
            <p key={index}>{el}</p>
          ))}
        </div>
        <form onSubmit={this.props.handleSubmit}>
          <input type='file' id='file' ref={this.props.fileInput} multiple />

          <br />
        </form>
      </Modal>
    )
  }
}

export default UploadModal
