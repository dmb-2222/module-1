import React from "react";
import propTypes from "prop-types";
import styles from'./PricingPlan.module.css'
const PricingItem = ({  icon, label, capacity, price, description }) => (
    <div>
    {/* <i className="icon" style={{backgroundImage: `url(${icon})`}}></i> */}
    <i className={styles.icon}><img src={icon} alt = {label} className={styles.icon_img}/></i> 
    <h2 className={styles.label}>{label}</h2>
    <p className={styles.capacity}>{capacity}</p>
    <p className={styles.description}> {description}  </p>
    <p className={styles.price}>${price}/MO</p>
    <button className={styles.button}>Get Started</button>
    </div>
  );

// Один из вариантов записи дефолтного значения
// Product.defaultProps = {
//   alt: "product image"
// };

PricingItem.propTypes = {
  icon: propTypes.string.isRequired,
  label: propTypes.string,
  capacity: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  description:propTypes.string.isRequired
};

export default PricingItem;