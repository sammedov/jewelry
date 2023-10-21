import React from "react";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={`${styles.footer} mx-10 grid grid-cols-2 gap-x-20 md:grid-cols-4  my-10`}>
      <div className={styles.logo}>
        <div className="my-5">LOGO</div>
        <div className={styles.logoContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          voluptas reiciendis quibusdam minus ipsam fugiat itaque eligendi non
          quam illo sequi sunt saepe deleniti, praesentium cumque quos incidunt
          expedita qui harum
        </div>
      </div>

      <div className={styles.container}>
        <div className="my-5">Contact</div>
        <div className={styles.containerContent}>
          <div>Lorem ipsum dolor sit.</div>
          <div>Lorem ipsum dolor sit.</div>
          <div>Lorem ipsum dolor sit.</div>
        </div>
      </div>

      <div className={styles.customer}>
        <div className="my-5">Customer Service</div>
        <div className={styles.containerContent}>
          <div>Lorem ipsum dolor sit.</div>
          <div>Lorem ipsum dolor sit.</div>
          <div>Lorem ipsum dolor sit.</div>
        </div>
      </div>

      <div className={styles.customer}>
        <div className="my-5">Category</div>
          <div className={styles.containerContent}>
            <div>Lorem ipsum dolor sit.</div>
            <div>Lorem ipsum dolor sit.</div>
            <div>Lorem ipsum dolor sit.</div>
          </div>
      </div>
    </div>
  );
};

export default Footer;
