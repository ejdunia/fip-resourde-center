import React from "react";
import ProfileContent from "./ProfileContent";
import Assignments from "./Assignments";
import styles from "@/styles/Home.module.css";
const Content = () => {
    return (
        <div className={styles.content} >
            {/* initial card with profile picture */}
            <ProfileContent />
            {/* assignment/projects goes here  */}
            <Assignments />
        </div>
    );
};

export default Content;
