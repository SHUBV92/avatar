import React, { useState } from "react";

import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";
import avatar5 from "../../assets/avatar5.png";
import avatar6 from "../../assets/avatar6.png";

const ListAvatar = (props) => {
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
    console.log("Set Avatar as a prop", props)
    props.setAvatar(id)

  };



  return (
    <div>
      <h1>Choose Your Avatar</h1>
      {AvatarList.map((x) => (
        <div
          onClick={() => {
            props.onClick(x.src);
          }}
        >
          <label>{x.label}</label>
          <img
            src={x.src}
            id={x.id}
            alt={x.id}
          />
        </div>
      ))}
    </div>
  );
};

export default ListAvatar;
