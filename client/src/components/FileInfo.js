import React from 'react'
import { Drawer } from 'antd'
import 'antd/dist/antd.css'
import PropTypes from 'prop-types'

export class FileInfo extends React.Component {
  constructor (props) {
    super(props)
    this.showDrawer = this.showDrawer.bind(this)
    this.onClose = this.onClose.bind(this)
    this.state = { visible: false }
  }

  showDrawer () {
    this.setState({
      visible: true
    })
  }

  onClose () {
    this.setState({
      visible: false
    })
  }

  render () {
    return (
      <div>
        <a type='primary' onClick={this.showDrawer} value={this.props.value}>
          {this.props.value}
        </a>

        <Drawer
          title={this.props.value}
          placement='right'
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          record={this.props.record}
        />
      </div>
    )
  }
}

FileInfo.propTypes = {
  value: PropTypes.any,
  record: PropTypes.object
}

export default FileInfo
