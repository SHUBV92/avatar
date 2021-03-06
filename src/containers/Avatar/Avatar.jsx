import React from "react";
import avatar from "../../assets/avatar1.png";
import "./Avatar.css";

const Avatar = (props) => {
  return (
    <div className="Avatar">
      <h1>Avatar</h1>
      <div className="loader">
        <img
          className="ImageAvatar"
          src={props.chosenAvatar}
        />
      </div>
    </div>
  );
};

export default Avatar;
