import React from "react";
import styles from "@/styles/cards.module.css";

const AssignmentsCard = ({ title, details }) => {
    return (
        <div className={styles.assignmentCard}>
            <h5>{title}</h5>
            <p>{details}</p>
        </div>
    );
};

export default AssignmentsCard;
