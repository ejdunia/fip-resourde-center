import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from "swiper";
// import AssignmentContainer from "./styles/AssignmentsContainer.styled";
import styles from "@/styles/cards.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AssignmentsCard from "./AssignmentsCard";

const Assignments = () => {
    return (
        <div className={styles.assignmentContainer}>
            <h2>Upcomming Projects</h2>
            <Swiper
                style={{
                    width: "100%",
                    height: "fit-content",
                    padding: "10px",
                    // border: "2px solid blue",
                }}
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    540: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },

                    800: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                navigation={true}
                mousewheel={true}
                modules={[Mousewheel, Pagination, Navigation]}
                className="mySwiper"
            >
                {projects.map((assignment, index) => {
                    return (
                        <SwiperSlide
                            key={index}
                            style={{
                                borderRadius: "20px",
                                background: "#006EDC",
                                color: "#fff",
                                height: "fit-content",
                            }}
                        >
                            <AssignmentsCard
                                title={assignment.title}
                                details={assignment.details}
                            />{" "}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

const projects = [
    {
        title: "Calculator",
        details: "Build a javascript calculator and its functionalities",
    },
    { title: "Drum", details: "Build a Drum Machine functionalities" },
];
export default Assignments;
