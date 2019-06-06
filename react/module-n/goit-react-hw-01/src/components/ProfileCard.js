import React from "react";
import PropTypes from "prop-types";
import styles from "./ProfileCard.module.css";

const ProfileCard = ({ props }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={props.avatar} alt="avatar" className={styles.avatar} />
      <p className={styles.name}>{props.name}</p>
      <p className={styles.tag}>{props.tag}</p>
      <p className={styles.location}>{props.location}</p>
    </div>
    <ul className={styles.stats}>
      <li>
        <span className={styles.label}>followers</span>
        <span className={styles.quantity}>{props.stats.followers}</span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{props.stats.views}</span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{props.stats.likes}</span>
      </li>
    </ul>
  </div>
);

ProfileCard.propTypes = {
  props: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  })
};
export default ProfileCard;
