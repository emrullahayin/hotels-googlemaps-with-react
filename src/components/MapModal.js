import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

import { Modal, Button } from "semantic-ui-react";

const mapStyles = {
  width: "100%",
  height: "100%"
};

const MapModal = props => {
  const { open, handleClick } = props;
  console.log("props", props);
  return (
    <Modal
      dimmer="blurring"
      open={open}
      size="fullscreen"
      onClose={handleClick(false)}
    >
      <Modal.Actions>
        <Button color="blue" onClick={handleClick(false)}>
          Close
        </Button>
      </Modal.Actions>
      <Modal.Content>
        <div id="map">
          <Map
            google={props.google}
            zoom={10}
            style={mapStyles}
            initialCenter={{
              lat: 35.37865,
              lng: 34.08991
            }}
          />
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAsltXKoovLalXgYA1v9ltsOUuTiwhPHv0"
})(MapModal);
