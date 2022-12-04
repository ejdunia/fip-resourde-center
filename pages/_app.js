import "../styles/globals.css";
import Layout from "@/components/Layout";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "../features/user";

const store = configureStore({
    reducer: { user: userReducer },
});



function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Layout>
                <div>
                    <Component {...pageProps} />
                </div>
            </Layout>
        </Provider>
    );
}

export default MyApp;
