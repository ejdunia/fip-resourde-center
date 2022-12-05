import React from "react";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import styles from "@/styles/sidebar.module.css";
import CalenderStyles from "@/styles/calendar.module.css";
import { AiOutlineMessage } from "react-icons/ai";
import { FaSmile } from "react-icons/fa";
const SideBar = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className={styles.sidebar}>
            <div className={styles.flex}>
                <FaSmile />
                <AiOutlineMessage />
            </div>
            <div className={CalenderStyles.calendarContainer}>
                <Calendar onChange={onChange} value={value} />
            </div>
            <h4 className={styles.title}>Notes</h4>
            <div className={styles.taskContainer}>
                {notes.map((note, index) => (
                    <div className={styles.tasks} key={index}>
                        {note}
                    </div>
                ))}
            </div>
            <button className="btnPri"> +Create New </button>
        </div>
    );
};

const notes = [
    " Add a note to get started",
    "Note 1",
    "Note 2",
    "Note 3",
    "Bonus note",
    " Long text test lorem ipsum domet sec ammit ad asa oekw dowedwp edw ndpwpdwpedw odwpndw edb pvf",
];

export default SideBar;
