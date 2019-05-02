import React from "react";
import { Modal, Button } from "semantic-ui-react";

const MapModal = props => {
  const { open, handleClick } = props;
  return (
    <Modal
      dimmer="blurring"
      open={open}
      size="fullscreen"
      onClose={handleClick(false)}
    >
      <Modal.Header>Map</Modal.Header>
      <Modal.Content>
        <div id="map" />
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
