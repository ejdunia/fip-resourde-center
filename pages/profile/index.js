import React from "react";
import styles from "@/styles/profile.module.css";
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
import ProfileUpdate from "@/components/ProfileUpdate";
import ReactModal from "react-modal";
import { useState } from "react";
import { show, hide } from "features/modal";

const Profile = () => {
    const user = useSelector((state) => state.user.value);
    const modal = useSelector((state) => state.modal.value);

    const dispatch = useDispatch();
    const hancleLogout = () => {
        dispatch(logout());
    };
    const showModal = (e) => {
        e.preventDefault();
        dispatch(show());
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
                        <button className={styles.editBtn} onClick={showModal}>
                            edit <FaUserEdit />
                        </button>{" "}
                        <button
                            className={styles.editBtn}
                            onClick={hancleLogout}
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
            <ReactModal isOpen={modal}>
                <ProfileUpdate />
            </ReactModal>
        </div>
    );
};

Profile.defaultProps = {
    picture: picture,
};
export default Profile;
