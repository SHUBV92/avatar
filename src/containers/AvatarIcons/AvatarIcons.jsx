import React, { useState } from "react";
import "./AvatarIcons.css";

import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";
import avatar5 from "../../assets/avatar5.png";
import avatar6 from "../../assets/avatar6.png";

const AvatarIcons = (props) => {
  const [
    chosenAvatar,
    setChosenAvatar,
  ] = useState("");

  const AvatarList = [
    {
      src: avatar1,
      label: "Avatar 1",
      id: 1,
    },
    {
      src: avatar2,
      label: "Avatar 2",
      id: 2,
    },
    {
      src: avatar3,
      label: "Avatar 3",
      id: 3,
    },
    {
      src: avatar4,
      label: "Avatar 4",
      id: 4,
    },
    {
      src: avatar5,
      label: "Avatar 5",
      id: 5,
    },
    {
      src: avatar6,
      label: "Avatar 6",
      id: 6,
    },
  ];

  const chooseAvatar = (id) => {
    setChosenAvatar(id);
    props.setAvatar(id);
  };

  return (
    <div>
      {AvatarList.map((x) => (
        <div
          className="container"
          onClick={() => {
            props.onClick(x.src);
          }}
        >
          <img
            className="ImageListAvatar"
            src={x.src}
            id={x.id}
            alt={x.id}
          />
          <div id="middle">
            <label className="text">{x.label}</label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvatarIcons;
