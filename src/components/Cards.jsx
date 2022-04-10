import React from "react";
import Card from "./Card.jsx";
import { useSelector } from "react-redux";
import { useTransition, animated } from "@react-spring/web";
import styles from "./styles/Cards.module.css";

export default function Cards() {
  const cities = useSelector((state) => state.cities);

  const transitions = useTransition(
    cities.map((data) => ({ ...data })).reverse(),
    {
      key: (city) => city.id,
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    }
  );
  return (
    <div className={styles.cards}>
      {transitions((style, city) => (
        <animated.div className={styles.card} style={{ ...style }}>
          <Card city={city} />
        </animated.div>
      ))}
    </div>
  );
}

// without animations

// export default function Cards() {
//   const cities = useSelector((state) => state.cities);

//   if (cities) {
//     return (
//       <div className={styles.cards}>
//         {cities.map((city) => <Card city={city} key={city.id} />).reverse()}
//       </div>
//     );
//   } else {
//     return <div>Sin ciudades</div>;
//   }
// }
