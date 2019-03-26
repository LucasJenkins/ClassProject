import React from 'react'
import { Drawer, Button } from 'antd'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'

export class FileInfo extends React.Component {
  constructor (props) {
    super(props)
    this.showDrawer = this.showDrawer.bind(this)
    this.onClose = this.onClose(this)
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
        <Button type='primary' onClick={this.showDrawer}>
          Info
        </Button>
        <Drawer
          title={this.props.value}
          placement='right'
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>Created: 3/25/19</p>
          <p>Last Modified: 3/25/19</p>
        </Drawer>
      </div>
    )
  }
}

FileInfo.propTypes = {
  value: PropTypes.any
}

export default FileInfo
