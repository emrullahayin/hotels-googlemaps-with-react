import React, { useState } from "react";
import "./App.css";
import { Button } from "semantic-ui-react";

import MapModal from "./components/MapModal";

const App = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <div className="App">
      <Button inverted primary onClick={handleClick}>
        Open Map
      </Button>
      <MapModal open={open} />
    </div>
  );
};

export default App;
