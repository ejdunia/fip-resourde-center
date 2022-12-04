import React from "react";
import styles from "@/styles/curriculum.module.css";
import { useState } from "react";

const Accordion = ({ title, content, done }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={styles.accordionItem}>
            <div
                className={styles.accordionTitle}
                onClick={() => handleClick()}
            >
                <div>{title}</div>
                <div> {isOpen ? "-" : "+"}</div>
            </div>
            {isOpen && <div className={styles.accordionContent}>{content}</div>}
        </div>
    );
};

export default Accordion;


