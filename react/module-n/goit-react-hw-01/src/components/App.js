import React from "react";
// import PropTypes from "prop-types";
import ProfileCard from "./ProfileCard";

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308
  }
};
// let { name, tag, location, avatar, stats} = user;
// console.log(stats.likes)

const App = () => (
  <>
    <ProfileCard props={user} />
  </>
);

export default App;
