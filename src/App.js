import React, { useState } from "react";
import Avatar from "./containers/Avatar/Avatar";
import ListAvatar from "./containers/ListAvatar/ListAvatar";
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
    <div>
      <Avatar
      chosenAvatar={chosenAvatar}  
      />
      <ListAvatar
      onClick={
        setAvatar
      } />
    </div>
  );
};

export default App;
