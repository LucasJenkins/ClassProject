import React from 'react'
import 'antd/dist/antd.css'
import { Modal } from 'antd'
import './index.css'
import { connect } from 'react-redux'
import { upload } from '../../async-actions/upload'
import PropTypes from 'prop-types'
import { setUploadFiles, hideModal } from '../../action-creators/upload'

class UploadModal extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    this.props.setUploadFiles([...e.target.files])
  }

  render () {
    const { files, upload, uploading, errorMessage, visible } = this.props

    const mappedFiles = files
      ? files.map((file, idx) => <p key={idx}>{file.name}</p>)
      : []
    return (
      <Modal
        title='Upload File(s)'
        visible={visible}
        onOk={upload}
        okText='Upload'
        onCancel={hideModal}
      >
        <h3>Files to upload:</h3>
        <div className='files'>{mappedFiles}</div>
        <input type='file' multiple onChange={this.handleChange} />
        <div>{uploading ? 'Uploading ... ' : ''}</div>
        <div className='error'>{errorMessage}</div>
        <button onClick={() => Modal.destroyAll()}>Close</button>
      </Modal>
    )
  }
}

UploadModal.propTypes = {
  setUploadFiles: PropTypes.func,
  files: PropTypes.array,
  upload: PropTypes.func,
  uploading: PropTypes.bool,
  errorMessage: PropTypes.string,
  visible: PropTypes.bool
}

const mapStateToProps = state => ({
  files: state.upload.files,
  uploading: state.upload.uploading,
  error: state.upload.error,
  errorMessage: state.upload.errorMessage,
  visible: state.upload.modalVisible
})

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  setUploadFiles: () => dispatch(setUploadFiles()),
  upload: () => dispatch(upload())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadModal)
