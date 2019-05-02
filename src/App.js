import React, { useState } from "react";
import "./App.css";
import { Button } from "semantic-ui-react";

import MapModal from "./components/MapModal";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleClick = value => e => {
    e.preventDefault();
    setOpen(value);
  };

  return (
    <div className="App">
      <Button inverted primary onClick={handleClick(true)}>
        Open Map
      </Button>
      <MapModal open={open} handleClick={handleClick} />
    </div>
  );
};

export default App;
