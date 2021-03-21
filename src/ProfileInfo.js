import React from "react";
import "./ProfileInfo.css";

function ProfileInfo(props) {
  return (
    <div className="profile-info">
      <div className="profile-image">
        <img src={props.info.dataInfo.image} />
      </div>
      <div className="profile-name">
        <span>{props.info.dataInfo.name}</span>
      </div>
      <span className="age">{props.info.dataInfo.age}</span>
      <div className="profile-location">{props.info.dataInfo.location}</div>
    </div>
  );
}

export default ProfileInfo;
