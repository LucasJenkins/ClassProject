import React from 'react'
import { Modal, Icon } from 'antd'

export class DownloadButton extends React.Component {
  constructor (props) {
    super(props)
    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleDownload = this.handleDownload.bind(this)
    this.state = { visible: false }
  }

  showModal () {
    this.setState({
      visible: true
    })
  }

  handleOk (e) {
    console.log(e)
    this.setState({
      visible: false
    })
  }

  handleDownload (e) {
    this.showModal(e)
    // Dispatch action to download state
  }
  // handleCancel (e) {
  //   console.log(e)
  //   this.setState({
  //     visible: false
  //   })
  // }

  render () {
    return (
      <div>
        <Icon
          onClick={this.handleDownload}
          type='download'
          style={{ fontsize: '10px' }}
        />
        <Modal
          title='Download'
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          // value={this.props.value}
        >
          <p>
            <Icon type='download' style={{ fontsize: '10px' }} />
            Download Complete
          </p>
        </Modal>
      </div>
    )
  }
}

export default DownloadButton
