import React from 'react'
import 'antd/dist/antd.css'
import { Icon } from 'antd'

const File = props => (
  <span>
    <Icon type='file' />
    {`${props.input}.txt`}
  </span>
)

export default File
