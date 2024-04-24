import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar_wrapper}>
      <nav className={styles.navbar}>
        <div className={styles.brand}>EssBee</div>
        {/* Add username here if available */}
      </nav>
    </div>
  );
};

export default Navbar;
