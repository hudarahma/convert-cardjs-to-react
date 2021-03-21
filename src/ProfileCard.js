import React from "react";
import "./ProfileCard.css";
import ProfileInfo from "./ProfileInfo.js";
import ProfileStats from "./ProfileStats.js";

const dataInfo = {
  image: "https://i.imgur.com/LFBLQgj.jpg",
  name: "Victor Crest",
  age: 26,
  location: "London",
  followers: "80K",
  likes: "803K",
  photos: "1.4K"
};
function ProfileCard() {
  return (
    <div className="profile-card-container">
      <div className="profile-card">
        <ProfileInfo info={{ dataInfo }} />
        <ProfileStats stats={{ dataInfo }} />
      </div>
    </div>
  );
}

export default ProfileCard;
