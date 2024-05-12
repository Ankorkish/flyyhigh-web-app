import { useState } from "react";
import styles from "./Card.module.css";
import { motion } from "framer-motion";

function Card({
  color,
  accentColor,
  header,
  price,
  features,
  delay,
  dark,
  changeBorder = true,
}) {
  let [btnIsHovered, setBtnIsHovered] = useState(false);

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 50, delay: delay }}
      viewport={{ once: true }}
    >
      <h2>{header}</h2>
      <div className={styles.price}>
        ${price}
        <span className={styles.info}>
          {price === "0" ? "(Free)" : "/month"}
        </span>
      </div>
      <div className={styles.whats}>What`s included:</div>
      <ul className={styles.list}>
        {features?.map((text, index) => (
          <motion.li
            className={styles.item}
            key={text}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 70,
              delay: delay + index / 15,
            }}
            viewport={{ once: true }}
          >
            <svg width="10" height="10" viewBox="0 0 42 42">
              <path
                d="M39.9258 7.24838C39.6343 6.9834 39.2934 6.77846 38.9227 6.64526C38.5519 6.51205 38.1586 6.45319 37.7651 6.47204C37.3716 6.49089 36.9857 6.58709 36.6294 6.75512C36.2731 6.92316 35.9534 7.15975 35.6885 7.45137L14.9181 30.3107L8.05055 21.5073C7.80826 21.1967 7.50715 20.9369 7.16444 20.7426C6.82172 20.5484 6.44411 20.4236 6.05315 20.3753C5.26358 20.2777 4.46759 20.4978 3.84031 20.9872C3.21302 21.4765 2.80582 22.195 2.70828 22.9846C2.61074 23.7742 2.83085 24.5701 3.32019 25.1974L12.3375 36.7557C12.3375 36.7557 12.5995 37.0681 12.7256 37.183C13.0171 37.4481 13.3581 37.6532 13.7289 37.7865C14.0997 37.9198 14.4932 37.9787 14.8868 37.9599C15.2804 37.941 15.6664 37.8448 16.0228 37.6767C16.3792 37.5086 16.699 37.2719 16.9639 36.9801L40.1288 11.4856C40.3938 11.1941 40.5987 10.8533 40.7319 10.4825C40.8651 10.1118 40.924 9.71844 40.9051 9.32495C40.8863 8.93146 40.7901 8.54554 40.622 8.18924C40.454 7.83293 40.2174 7.51322 39.9258 7.24838Z"
                fill={color}
              />
            </svg>
            <div></div>

            {text}
          </motion.li>
        ))}
      </ul>
      <button
        className={styles.btn}
        style={{
          backgroundColor: btnIsHovered ? dark : color,
          borderColor: btnIsHovered && changeBorder ? dark : accentColor,
        }}
        onMouseEnter={() => setBtnIsHovered(() => true)}
        onMouseLeave={() => setBtnIsHovered(() => false)}
      >
        Start for free
      </button>
    </motion.div>
  );
}

export default Card;
