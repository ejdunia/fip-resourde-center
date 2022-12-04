import { useState } from "react";
import studyImage from "../public/images/studyImage.jpg";
import Image from "next/image";
import styles from "@/styles/cards.module.css";
import { useSelector } from "react-redux";

const ProfileContent = () => {
    const user = useSelector((state) => state.user.value);

    // const [user, setUser] = useState("Josh");
    const [completionPercentage, setCompletionPercentage] = useState(100);

    return (
        <div className={styles.profileCard}>
            <div>
                <h2>Your Profile</h2>
                <p>
                    Hi <span>{user.firstName} </span> you are in the {user.stage} stage and you have completed{" "}
                    {completionPercentage}% of your weekly targets.
                </p>
                <p>Keep learning, you{"'"}ve got this!</p>
                <button className="btnSec">Set a Goal</button>
            </div>
            <div className={styles.profileCardImage}>
                <Image src={studyImage} alt="study" layout="fill" />
            </div>
        </div>
        //
    );
};

export default ProfileContent;
