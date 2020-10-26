import React from "react";
import avatar from "../../assets/avatar1.png"

const Avatar = (props) => {
  return (
    <div>
      <h1>Avatar</h1>
      <img src={props.chosenAvatar} />
    </div>
  );
};

export default Avatar;
