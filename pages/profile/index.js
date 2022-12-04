import React, { use } from "react";
import styles from "@/styles/profile.module.css";
import Login from "@/components/Login";
import picture from "@/public/images/studyImage.jpg";
import Image from "next/image";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaUserEdit,
    FaArrowAltCircleRight,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "features/user";

const Profile = () => {
    const user = useSelector((state) => state.user.value);
    const dispatch = useDispatch();
    const hancleLogout = () => {
        const exploreProfile = {
            firstName: "",
            lastName: "",
            email: "email@mail.com",
            role: "Intern",
            phone: "+234xxxxxxxx",
            stage: "Beginner",
            bio: "",
            isLoggedIn: false,
        };
        dispatch(logout(exploreProfile));
    };
    return (
        <div className={styles.container}>
            <div className={styles.profileCard}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div className={styles.profileImage}>
                        <Image
                            src={picture}
                            alt="profile picture"
                            fill
                            sizes="(max-width: 200px)"
                        />
                    </div>
                    <div>
                        <button className={styles.editBtn}>
                            edit <FaUserEdit />
                        </button>{" "}
                        <button
                            className={styles.editBtn}
                            onClick={() => {
                                hancleLogout();
                            }}
                        >
                            logout
                        </button>
                    </div>
                </div>
                <div className={styles.mentorDetails}>
                    <h3 style={{ fontSize: "3rem" }}>
                        {user.firstName} {user.lastName}
                    </h3>
                    <p>
                        <FaArrowAltCircleRight /> Stage: {user.stage}
                    </p>
                    <p>
                        <FaEnvelope /> {user.email}
                    </p>
                    <p>
                        <FaPhoneAlt /> {user.phone}
                    </p>
                    <p className={styles.bio}>{user.bio}</p>
                </div>
            </div>
            {/* <Login /> */}
        </div>
    );
};

Profile.defaultProps = {
    picture: picture,
};
export default Profile;
