import Head from "next/head";
import React from "react";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import Login from "./Login";

const Layout = ({ title, keywords, description, children }) => {
    const user = useSelector((state) => state.user.value);

    return (
        <>
            {user.isLoggedIn ? (
                <div style={{ display: "flex", flexGrow: "1" }}>
                    <Head>
                        <title>{title}</title>
                        <meta name="description" content={description} />
                        <meta name="keywords" content={keywords} />
                    </Head>
                    <Nav />
                    <div
                        style={{
                            display: "flex",
                            flexGrow: "1",
                            justifyContent: "center",
                        }}
                    >
                        {children}
                    </div>
                </div>
            ) : (
                <Login />
            )}
        </>
    );
};
Layout.defaultProps = {
    title: "FIP Resource Center ",
    description: "Structured and organised selfpaced learning ",
    keywords: "education, self learning, FIP,",
};

export default Layout;
