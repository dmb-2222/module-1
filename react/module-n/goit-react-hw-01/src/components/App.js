import React from "react";
// import PropTypes from "prop-types";
import ProfileCard from "./ProfileCard";
import Stats from "./Stats";
import PriceProduct from "../pricing-plan.json";
import PricingPlan from "./PricingPlan/PricingPlan";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import Transactions from "../transactions.json";
// =========== Task1
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
// ===========Task2
const stats = [
  { id: "id-1", label: ".docx", percentage: 22 },
  { id: "id-2", label: ".pdf", percentage: 4 },
  { id: "id-3", label: ".mp3", percentage: 17 },
  { id: "id-4", label: ".psd", percentage: 47 },
  { id: "id-5", label: ".pdf", percentage: 10 },
  { id: "id-6", label: ".pdf", percentage: 10 },
  { id: "id-7", label: ".mp3", percentage: 47 }
];
// let { name, tag, location, avatar, stats} = user;
const App = () => (
  <>
    <ProfileCard props={user} />
    {/* // Убрать title не будет рендериться */}
    <Stats title="Upload stats" stats={stats} />
    <PricingPlan items={PriceProduct} />
    <TransactionHistory items={Transactions} />
  </>
);

export default App;
