import React from "react";
import "./ProfileStats.css";

function ProfileStats(props) {
  return (
    <div className="profile-stats">
      <div className="profile-stats-value">
        <span className="stats-number">{props.stats.dataInfo.followers}</span>
        <span className="stats-text">Followers</span>
      </div>
      <div className="profile-stats-value">
        <span className="stats-number">{props.stats.dataInfo.likes}</span>
        <span className="stats-text">Likes</span>
      </div>
      <div className="profile-stats-value">
        <span className="stats-number">{props.stats.dataInfo.photos}</span>
        <span className="stats-text">Photos</span>
      </div>
    </div>
  );
}
export default ProfileStats;
