import React from "react";
import styles from "./style.module.css";
import adrenalin from "../assets/adrenalin.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.footer}>
      <Link className={styles.logo} to="/adrenalin">
        <img src={adrenalin} alt="logo" />
      </Link>

      <ul>
        <li>privacy</li>
        <li>sitemap</li>
        <li>facebook</li>
        <li>linkedin</li>
        <li>instagram</li>
        <li>twitter</li>
      </ul>
    </nav>
  );
};

export default Nav;
