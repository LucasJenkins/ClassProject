import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
// import './index.css'

import { Layout, Input } from "antd";
import ButtonElement from "../../components/ButtonElement";

const { Header } = Layout;
const Search = Input.Search;

const HeaderNav = props => (
  <Header className="header">
    <Search
      className="search"
      placeholder="input search text"
      onSearch={props.handleSearch}
      enterButton
    />
    <ButtonElement handleView={props.handleView} view={props.view} />
  </Header>
);

HeaderNav.propTypes = {
  handleSearch: PropTypes.func,
  handleView: PropTypes.func,
  view: PropTypes.string
};

export default HeaderNav;
