import React from "react";
import piggy from "../assets/porco.png";
import styles from "../styles/nav.module.css";


const Nav = () => {
	return (
		<div className={styles.navWrapper}>
			<span className={styles.headerText}>HogWild</span>
			<div className={styles.twirlyPig}>
				<img src={piggy} className={styles.logo} alt="piggy" />
			</div>
			<span className={styles.normalText}>
				A React App for County Fair Hog Fans
			</span>
		</div>
	);
};

export default Nav;
