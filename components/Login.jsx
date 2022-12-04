import React from "react";
import styles from "@/styles/login.module.css";
import { useDispatch } from "react-redux";
import { login } from "features/user";

const Login = () => {
    const dispatch = useDispatch();
    const explore = () => {
        const exploreProfile = {
            firstName: "John",
            lastName: "doe",
            email: "johndoe@mail.com",
            role: "Intern",
            phone: "+23480111111111",
            stage: "Beginner",
            bio: "This is a demo profile for the app",
            isLoggedIn: true,
        };
        dispatch(login(exploreProfile));
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
            <h1>FIP Resource Center</h1>
                <h2>Login</h2>
                <form>
                    <div className={styles.userBox}>
                        <input type="text" name="" required="" />
                        <label>Username</label>
                    </div>
                    <div className={styles.userBox}>
                        <input type="password" name="" required="" />
                        <label>Password</label>
                    </div>
                    <div className={styles.buttonContainer}>
                        <a href="#">Login</a>
                        <a href="#" onClick={() => explore()}>
                            Explore
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
