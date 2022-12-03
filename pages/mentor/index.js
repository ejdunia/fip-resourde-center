import React from "react";
import MentorProfile from "@/components/MentorProfile";
import maryam from "../../public/images/maryam.png";
import styles from '@/styles/mentorStyles.module.css'

const index = () => {
    return (
        <div className={styles.container}>
            <MentorProfile />
            <MentorProfile
                name={"Maryam ALi A."}
                role={"Internship Cordinator"}
                email={"maryamA@flexisaf.com"}
                phone={"+2340812345678"}
                image={maryam}
            />
        </div>
    );
};

export default index;
