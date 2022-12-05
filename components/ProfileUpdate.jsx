import React, { useState } from "react";
import styles from "@/styles/login.module.css";
import { useSelector, useDispatch } from "react-redux";
import { update } from "features/user";
import { show, hide } from "features/modal";
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
const ProfileUpdate = () => {
    const user = useSelector((state) => state.user.value);
    const modal = useSelector((state) => state.modal.value);

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [bio, setBio] = useState(user.bio);

    const dispatch = useDispatch();

    const hideModal = (e) => {
        e.preventDefault();
        dispatch(hide());
    };

    const handleUpdate = (e) => {
        const userDetails = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            role: "Intern",
            phone: phone,
            stage: "Beginner",
            bio: bio,
            isLoggedIn: true,
        };
        e.preventDefault();
        dispatch(update(userDetails));
        dispatch(hide());
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <h2>Update Profile</h2>
                <form>
                    <div className={styles.userBox}>
                        <input
                            type="text"
                            required=""
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label>First Name</label>
                    </div>
                    <div className={styles.userBox}>
                        <input
                            type="text"
                            required=""
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <label>Last Name</label>
                    </div>
                    <div className={styles.userBox}>
                        <input
                            type="text"
                            required=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>email</label>
                    </div>
                    <div className={styles.userBox}>
                        <input
                            type="text"
                            required=""
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <label>Phone No</label>
                    </div>
                    <div className={styles.userBox}>
                        <input
                            type="text"
                            required=""
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                        <label>Bio</label>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <button className="btnSec" onClick={handleUpdate}>
                            Update
                        </button>
                        <button className="btnSec" onClick={hideModal}>
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileUpdate;
