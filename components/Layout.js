import Head from "next/head";
import React from "react";
import Nav from "./Nav";

const Layout = ({ title, keywords, description, children }) => {
    return (
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
                    border: "2px solid red",
                }}
            >
                {children}
            </div>
        </div>
    );
};
Layout.defaultProps = {
    title: "FIP Resource Center ",
    description: "Structured and organised selfpaced learning ",
    keywords: "education, self learning, FIP,",
};

export default Layout;
