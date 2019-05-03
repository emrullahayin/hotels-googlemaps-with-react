import React, { useState } from "react";
import "./App.scss";
import { Button } from "semantic-ui-react";

import MapModal from "./components/MapModal";

import logo from "./bg.jpg";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleClick = value => e => {
    e.preventDefault();
    setOpen(value);
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${logo})` }}>
      <Button inverted primary onClick={handleClick(true)}>
        Open Map
      </Button>
      <MapModal open={open} handleClick={handleClick} />
    </div>
  );
};

export default App;
