import React from "react";
import { Drawer, Button } from "antd";
import "antd/dist/antd.css";
import { Connect } from "react-redux";

export class FileInfo extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          Info
        </Button>
        <Drawer
          title={this.props.value}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>Created: 3/25/19</p>
          <p>Last Modified: 3/25/19</p>
        </Drawer>
      </div>
    );
  }
}

export default FileInfo;
