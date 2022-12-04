import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import {
    FaHome,
    FaBookReader,
    FaFirstOrder,
    FaSmile,
    FaBrain,
} from "react-icons/fa";

const Nav = () => {
    const [visible, setVisible] = useState(false);
    const handleClick = () => {
        setVisible((visible) => !visible);
        // console.log(visible);
    };

    return (
        <>
            <button
                aria-controls="primaryNav"
                aria-expanded={visible}
                className={styles.mobileToggle}
                onClick={handleClick}
            ></button>
            <header className={`${styles.header}`} data-visible={visible}>
                <div className={styles.logo}>
                    <FaBrain style={{ fontSize: "30px" }} />
                    <h3>Resource Center</h3>
                </div>

                <nav className={styles.nav}>
                    <ul
                        id="primaryNav"
                        data-visible={visible}
                        className={`${styles.PrimaryNav}`}
                    >
                        <li onClick={handleClick}>
                            <FaHome />
                            <Link href="/">HOME</Link>
                        </li>
                        <li onClick={handleClick}>
                            <FaBookReader />{" "}
                            <Link href="/curriculum">CURRICULUM</Link>
                        </li>
                        <li onClick={handleClick}>
                            <FaFirstOrder /> <Link href="/mentor">MENTOR</Link>
                        </li>
                        <li onClick={handleClick}>
                            {" "}
                            <FaSmile />
                            <Link href="/profile">PROFILE</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Nav;
