import React from 'react'
import 'antd/dist/antd.css'
import { Modal } from 'antd'
import './index.css'
import PropTypes from 'prop-types'

class UploadModal extends React.Component {
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

UploadModal.propTypes = {
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
  fileNames: PropTypes.array,
  handleSubmit: PropTypes.func,
  fileInput: PropTypes.array,
  onOk: PropTypes.func
}

export default UploadModal
