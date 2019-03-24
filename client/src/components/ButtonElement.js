import React from 'react'
import 'antd/dist/antd.css'
// import './index.css'

import { Button, Radio } from 'antd'

class ButtonElement extends React.Component {
  //   constructor (props) {
  //     super(props)

  //     this.state = {
  //       view: 'list'
  //     }
  //   }

  // handleView (e) {
  //   this.setState({
  //     view: e.target.value
  //   })

  // }

  render () {
    const view = this.props.view
    return (
      <Radio.Group value={view} onChange={this.props.handleView}>
        <Radio.Button value='list'>List</Radio.Button>
        <Radio.Button value='grid'>Grid</Radio.Button>
      </Radio.Group>
    )
  }
}

export default ButtonElement
