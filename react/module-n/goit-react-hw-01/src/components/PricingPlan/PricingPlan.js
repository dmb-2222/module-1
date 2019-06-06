import React from "react";
import propTypes from "prop-types";
import PricingItem from "./PricingItem";
import styles from "./PricingPlan.module.css";

const PricingPlan = ({ items = []}) => (
  <div className={styles.container}>
    <ul className={styles.pricing_plan}>
      {items.map(item => (
        <li key={item.label} className={styles.item}>
          <PricingItem {...item} />
        </li>
      ))}
    </ul>
  </div>
);

// ProductList.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
//     .isRequired
// };

PricingPlan.propTypes = {
  items: propTypes.array.isRequired,
}


export default PricingPlan;
