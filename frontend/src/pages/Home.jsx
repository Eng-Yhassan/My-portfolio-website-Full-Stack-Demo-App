import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../images/yaa.jpg"

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-gray-900 px-6">
            {/* Profile Picture */}
            <img
                src={profileImage}
                alt="Profile"
                className="w-40 h-40 rounded-full shadow-lg border-4 border-blue-500 mb-6"
            />

            {/* Intro */}
            <h1 className="text-4xl font-bold mb-2">Hi, I'm Yahye Hassan 👋</h1>
            <p className="text-lg text-gray-600 mb-6 text-center max-w-2xl">
                I'm a passionate <span className="font-semibold">Computer Science student</span> and
                <span className="font-semibold"> Graphic Designer</span> who loves building creative projects,
                from modern websites to unique brand designs. My focus is on learning and mastering
                <span className="text-blue-600"> Full Stack Development </span> and
                <span className="text-blue-600"> UI/UX design</span>.
            </p>

            {/* Buttons */}
            <div className="flex space-x-4">
                <Link to="/projects">
                    <button
                        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
                    >
                        View My Projects
                    </button>
                </Link>

                <Link to="/contact">
                    <button
                        className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl shadow hover:bg-gray-300 transition"
                    >
                        Contact Me
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
