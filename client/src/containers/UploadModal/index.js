import React from 'react'
import 'antd/dist/antd.css'
import { Modal } from 'antd'
import './index.css'
import { connect } from 'react-redux'
import { upload } from '../../async-actions/upload'
import PropTypes from 'prop-types'
import { setUploadFiles, uploadDone } from '../../action-creators/upload'

class UploadModal extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    this.props.setUploadFiles([...e.target.files])
  }

  render () {
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
        visible={this.props.visible}
        onOk={upload}
        onCancel={this.props.onCancel}
        okText='Upload'
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
  visible: PropTypes.bool,
<<<<<<< HEAD
  onCancel: PropTypes.func
}

const mapStateToProps = state => ({
  files: state.upload.files,
  uploading: state.upload.uploading,
  error: state.upload.error,
  errorMessage: state.upload.errorMessage
})

const mapDispatchToProps = {
  uploadDone,
  setUploadFiles,
  upload
=======
  onCancel: PropTypes.func,
  fileNames: PropTypes.array,
  handleSubmit: PropTypes.func,
  fileInput: PropTypes.object,
  onOk: PropTypes.func
>>>>>>> 158aa100bcdcb61e7e5e2516e56f8ca1ad572521
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadModal)
