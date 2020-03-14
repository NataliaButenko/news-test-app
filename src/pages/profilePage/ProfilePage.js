import React, { useState } from "react";
import "./stylesProfilePage.css";

const ProfilePage = (props) => {
  const [profile, setProfile] = useState({
    username: "admin",
    img: ""
  });
  return (
    <div className="container is-widescreen hero is-fullheight profile_wrapper">
      <div className="card profile_card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={profile.img} alt={profile.username} />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-3 has-text-centered">{profile.username}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
