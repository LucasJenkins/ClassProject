import React from "react";
import { Modal, Button } from "antd";

export class DeleteButton extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Delete
        </Button>
        <Modal
          title="Delete!"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Are you sure you want to delete the following file</p>
          <p>index.js</p>
        </Modal>
      </div>
    );
  }
}

export default DeleteButton;
