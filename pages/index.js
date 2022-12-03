import Content from "@/components/Content";
import SideBar from "@/components/SideBar";
import styles from "@/styles/Home.module.css";

export default function Home() {
    return (
        <>
            <div className={styles.container}>
                <Content />
                <SideBar />
            </div>
        </>
    );
}
