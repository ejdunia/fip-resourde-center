import "../styles/globals.css";
import Layout from "@/components/Layout";
import { Provider } from "react-redux";
import store from "features/store";

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
