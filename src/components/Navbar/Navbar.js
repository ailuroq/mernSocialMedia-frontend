import React from 'react'
import styles from './Navbar.module.css'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navigation}>
                <ul className={styles.menu}>
                    <li className={styles.menu__item}>
                        <Link>My profile</Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link>News</Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link>Friends</Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link>Messenger</Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link>Photos</Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link>Games</Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar