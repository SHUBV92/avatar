import React, { useState } from "react";
import Avatar from "./containers/Avatar/Avatar";
import AvatarIcons from "./containers/AvatarIcons/AvatarIcons";
import Popover from "./containers/Popover/Popover";
const App = () => {
  const [
    chosenAvatar,
    setChosenAvatar,
  ] = useState("");
  console.log("App Chosen Avatar", chosenAvatar);

  const setAvatar = (src) => {
    setChosenAvatar(src);
  };

  return (
    <div className="App">
      <Avatar
      chosenAvatar={chosenAvatar}  
      />
      <Popover />
      <AvatarIcons
      onClick={
        setAvatar
      } />
    </div>
  );
};

export default App;
