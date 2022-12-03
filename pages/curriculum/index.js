import React from "react";
import styles from "@/styles/curriculum.module.css";
const index = () => {
    return <div className={styles.container}>curriculum</div>;
};

export default index;

const curriculum = {
    beginner: [
        {
            activity: "Lesson: HTML 5",
            details:
                "An introduction to HTML 5 - Learn HTML Tags,Anchor Tag,Self Closing HTML Tags, Semantic Elements,Pass Supervisor Assessment",
            duration: "2 weeks",
            done: false,
        },
        {
            activity: "Lesson: Advance HTML 5",
            details:
                "HTML Forms,HTML Forms 2,Submitting A Form,HTML Tags 3,  Pass Supervisor Assessment: Presentation of Completed Form created using HTML. Intern may also get createive by using 3rd-Party Applications such as Forms.io to collect data submitted using form.",
            duration: "1 week",
            done: false,
        },
        {
            activity: "Lesson: CSS",
            details:
                "CSS Properties CSS Selectors Text and Font Images In CSS Box Modelpx vs em vs rem ",
            duration: "2 weeks",
            done: false,
        },
        {
            activity: "Lesson: Advance CSS 3",
            details: "Grid Flexbox Responsiveness",
            duration: "1 week",
            done: false,
        },
        {
            activity: "Lesson: Javascript",
            details:
                "Variables Number, String, Boolean, Comparisons Function Array Object Loop",
            duration: "3 weeks",
            done: false,
        },
        {
            activity: "Lesson: DOM Manipulation",
            details:
                "Document Object Model DOM Selectors DOM Events Callback Functions ",
            duration: "2 weeks",
            done: false,
        },
    ],

    intermmediate: [
        {
            activity: "Lesson: Advance Javascript",
            details:
                "ES6 features Scope, Let, Const, Arrow functions, Array (map, filter, reduce, foreach, ... ETC....) Objects",
            duration: "2 weeks",
            done: false,
        },

        {
            activity: "Lesson: CSS Refresher",
            details:
                "CSS Properties CSS Selectors Text and Font Images In CSS Box Model px vs em vs rem Layout Flexbox Responsiveness",
            duration: "1 week",
            done: false,
        },
        {
            activity: "Lesson: CSS pre-processor",
            details: "Understanding CSS pre-processor Sass/Scss",
            duration: "1 week",
            done: false,
        },
        {
            activity: "Lesson: Version Control",
            details:
                "Learn how to use git and github. <br/>'Creating repositories, cloning repositories, creating branches, committing and reverting commits, pulling and pushing changes downstream and upstream, fetching, merging and renaming branches, creating, reviewing merging, reverting pull requests etc.' ",
            duration: "2 weeks",
            done: false,
        },
        {
            activity: "Lesson: npm or yarn",
            details: "understanding basics of nodejs and npm or yarn ",
            duration: "1 week",
            done: false,
        },
        {
            activity: "Lesson: Intro to React",
            details:
                "Virtual DOM State Props JSX Components (functional and class) Lifecycle components Fragment  Use Event Handlers with React",
            duration: "1 week",
            done: false,
        },
        {
            activity: "Lesson: Styled Component",
            details: "Learning how to use styled component",
            duration: "2 weeks",
            done: false,
        },
        {
            activity: "Lesson: Reusable Components",
            details: "Learn how to build a reusable components",
            duration: "1 week",
            done: false,
        },
    ],
    advanced: [
        {
            activity: "Javascript Refresher",
            details:
                "ES6 features Scope Let Const Arrow functions Array (map, filter, reduce, foreach) Objects",
            duration: "1 week",
            done: false,
        },
        {
            activity: "Hands-on: Version Control (Git, Bitbucket)",
            details:
                "Creating repositories, cloning repositories, creating branches, committing and reverting commits, pulling and pushing changes downstream and upstream, fetching, merging and renaming branches, creating, reviewing merging, reverting pull requests etc.",
            duration: "1 week",
            done: false,
        },
        {
            activity: "Basic React JS",
            details:
                "Virtual DOM State Props JSX Components (functional and class) Lifecycle components Fragment  Use Event Handlers with React",
            duration: "1 week",
            done: false,
        },
        {
            activity: "Lesson: RESTful API",
            details: "Learn how to make a API calls (GET, POST, PUT and DELETE",
            duration: "1 week",
            done: false,
        },
        {
            activity: "Lesson: React Hooks",
            details: "how to build a custom hooks",
            duration: "1 week",
            done: false,
        },
        {
            activity: "Lesson: Asynchronous React",
            details: "JSON Form Data Promises Async Await ",
            duration: "1 week",
            done: false,
        },
        {
            activity: "Lesson: State Management system",
            details: "Learn how to use Redux and Context API",
            duration: "1 week",
            done: false,
        },
        {
            activity: "Lesson: React UI components",
            details: "Learn how integerate react UIs",
            duration: "1 week",
            done: false,
        },
        {
            activity: "Lesson: Testing React App",
            details:
                "Learn how to write Unit Testing, Integration testing and end to end testing",
            duration: "1 week",
            done: false,
        },
    ],
};
