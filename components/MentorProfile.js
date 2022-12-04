import React from "react";
import mentorImage from "../public/images/mentorImage.jpg";
import Image from "next/image";
import {
    FaPhoneAlt,
    FaTwitter,
    FaLinkedin,
    FaFacebook,
    FaEnvelope,
    FaCertificate,
} from "react-icons/fa";
import styles from "@/styles/mentorStyles.module.css";

const MentorProfile = ({ name, role, email, phone, image }) => {
    return (
        <div className={styles.mentorCard}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div className={styles.mentorImage}>
                    <Image
                        src={image}
                        alt="mentor"
                        fill
                        style={{ display: "block", width: "100%" }}
                        sizes="(max-width: 200px)"
                    />
                </div>
                <button className="btnPri">Message</button>
                <button className="btnSec">Schedule a meeting</button>
            </div>
            <div className={styles.mentorDetails}>
                <h3 style={{ fontSize: "3rem" }}> {name}</h3>
                <p>
                    {" "}
                    <FaCertificate /> {role}
                </p>
                <p>
                    <FaEnvelope /> {email}
                </p>
                <p>
                    <FaPhoneAlt /> {phone}
                </p>
                <div
                    style={{
                        display: "flex",
                        gap: "15px",
                    }}
                >
                    <div>
                        <FaTwitter />
                    </div>
                    <div>
                        <FaLinkedin />
                    </div>
                    <div>
                        <FaFacebook />
                    </div>
                </div>
            </div>
        </div>
    );
};
MentorProfile.defaultProps = {
    name: "Jane D",
    email: "jane.doe@mail.com",
    role: "Mentor",
    phone: "+2348012345678",
    image: mentorImage,
};

export default MentorProfile;
