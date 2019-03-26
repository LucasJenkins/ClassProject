import React from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
// import './index.css'

import { Radio, Button } from 'antd'

class ButtonElement extends React.Component {
  render () {
    const view = this.props.view
    return (
      <div>
        <div>
          <Radio.Group value={view} onChange={this.props.handleView}>
            <Radio.Button value='list'>List</Radio.Button>
            <Radio.Button value='grid'>Grid</Radio.Button>
          </Radio.Group>
        </div>
        <div>
          <Button type='primary' shape='circle' icon='folder' size='Large' />
          <Button type='primary' shape='circle' icon='download' size='Large' />
          <Button type='primary' shape='circle' icon='delete' size='Large' />
        </div>
      </div>
    )
  }
}

ButtonElement.propTypes = {
  view: PropTypes.string,
  handleView: PropTypes.func
}

export default ButtonElement
