import React from 'react'
import 'antd/dist/antd.css'
// import './index.css'

import { Layout, Input } from 'antd'
import ButtonElement from '../../components/ButtonElement'

const { Header } = Layout
const Search = Input.Search

const HeaderNav = props => (
  <Header className='header'>
    <Search
      className='search'
      placeholder='input search text'
      onSearch={value => console.log(value)}
      enterButton
    />
    <ButtonElement handleView={props.handleView} view={props.view} />
  </Header>
)

export default HeaderNav
