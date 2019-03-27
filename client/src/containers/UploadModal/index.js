import React from 'react'
import 'antd/dist/antd.css'
import { Modal } from 'antd'
import './index.css'
import { connect } from 'react-redux'
import { upload } from '../../async-actions/upload'
import PropTypes from 'prop-types'
import {
  setUploadFiles,
  uploadDone,
  showModal,
  hideModal
} from '../../action-creators/upload'

class UploadModal extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    this.props.setUploadFiles([...e.target.files])
  }

  render () {
    console.log(this.props)
    const { files, upload, uploading, /* error, */ errorMessage } = this.props

    let mappedFiles = []

    if (uploading) {
      return <p>Uploading files...</p>
    }
    if (files) {
      mappedFiles = files.map((file, idx) => <p key={idx}>{file.name}</p>)
    } else {
      mappedFiles = <p />
    }
    return (
      <Modal
        title='Upload File(s)'
        visible={this.props.modalVisible}
        onOk={() => {
          upload()
          this.props.hideModal()
        }}
        onCancel={this.props.hideModal}
        okText='Upload'
        multiple
      >
        <h3>Files to upload:</h3>
        <div className='files'>{mappedFiles}</div>
        <input type='file' multiple onChange={this.handleChange} />
        <div className='error'>{errorMessage}</div>
      </Modal>
    )
  }
}

UploadModal.propTypes = {
  setUploadFiles: PropTypes.func,
  // uploadDone: PropTypes.func,
  files: PropTypes.array,
  upload: PropTypes.func,
  uploading: PropTypes.bool,
  // error: PropTypes.bool,
  errorMessage: PropTypes.string,
  modalVisible: PropTypes.bool,
  hideModal: PropTypes.func
}

const mapStateToProps = state => ({
  files: state.upload.files,
  uploading: state.upload.uploading,
  error: state.upload.error,
  errorMessage: state.upload.errorMessage,
  modalVisible: state.upload.modalVisible
})

const mapDispatchToProps = {
  uploadDone,
  setUploadFiles,
  upload,
  showModal,
  hideModal
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadModal)
