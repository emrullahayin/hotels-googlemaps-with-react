import React from "react";
import { Header, Modal, Button } from "semantic-ui-react";

const MapModal = props => {
  const { open, handleClick } = props;
  return (
    <Modal
      dimmer="blurring"
      open={open}
      size="fullscreen"
      onClose={handleClick(false)}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={handleClick(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default MapModal;
