import { useState } from "react";
import studyImage from "../public/images/studyImage.jpg";
import Image from "next/image";
import styles from "@/styles/cards.module.css";
import { useSelector } from "react-redux";

const ProfileContent = () => {
    const user = useSelector((state) => state.user.value);
    const [completionPercentage, setCompletionPercentage] = useState(100);

    return (
        <div className={styles.profileCard}>
            <div className={styles.profileCardImage}>
                <Image src={studyImage} alt="study" layout="fill" />
            </div>
            <div className={styles.details}>
                <h2>Your Profile</h2>
                <p>
                    HI! <spn className={styles.bold}>{user.firstName}</spn>, you
                    are on the {user.stage} stage and have completed{" "}
                    <span className={styles.bold}>{completionPercentage}%</span>{" "}
                    of the curriculum.
                </p>
                <p>Keep learning, you{"'"}ve got this!</p>
                <button className="btnSec">Set a Goal</button>
            </div>
        </div>
        //
    );
};

export default ProfileContent;
