import { FaHandPointRight } from "react-icons/fa6";

const About = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
            <div className="flex items-center gap-3 mb-6">
                <img
                    className="w-10"
                    src="https://user-images.githubusercontent.com/69080584/119517399-c6f10280-bda1-11eb-9af9-4bdc197dcd65.png"
                    alt="Task Buddy Logo"
                />
                <h1 className="text-3xl font-bold text-gray-800">Task Buddy V2.1.7.24</h1>
            </div>

            <p className="text-lg max-w-[80%] text-center text-gray-700 mb-6">
                Task Buddy is an optimized web app designed to help you manage your daily, weekly, and monthly tasks. By planning effectively and breaking down your goals, achieving success becomes much more attainable.
            </p>

            <ul className="text-lg space-y-2 text-gray-800">
                <li className="flex items-center gap-2"><FaHandPointRight /> Plan</li>
                <li className="flex items-center gap-2"><FaHandPointRight /> Strategize</li>
                <li className="flex items-center gap-2"><FaHandPointRight /> Execute</li>
            </ul>
        </div>
    );
};

export default About;
