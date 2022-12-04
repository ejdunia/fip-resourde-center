import React from "react";
import MentorProfile from "@/components/MentorProfile";
import maryam from "../../public/images/maryam.png";
import styles from "@/styles/mentorStyles.module.css";

const Mentor = () => {
    return (
        <div className={styles.container}>
            <MentorProfile
                name={"Maryam A."}
                role={"Internship Cordinator"}
                email={"maryamA@flexisaf.com"}
                phone={"+2340812345678"}
                image={maryam}
            />
            <MentorProfile />
        </div>
    );
};

export default Mentor;
