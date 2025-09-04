import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate()

    const handleCreateData =  (e) => {
        e.preventDefault();
        axios.post("http://localhost:4444/create/contact", {
            "name": name,
            "email": email,
            "message": message
        }).then(() => {
            alert("Thanks! We will contact you soon.");
            navigate("/")
        })
    };

    return (
        <section className="w-full bg-white py-16 px-6 md:px-20 mt-10">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
                    Get In Touch
                </h2>

                <form className="space-y-6">
                    {/* Top Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Name"
                            className="w-full rounded-full px-5 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                            className="w-full rounded-full px-5 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Message Box */}
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="6"
                        placeholder="Your Message"
                        className="w-full rounded-2xl px-5 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    ></textarea>

                    {/* Send Button */}
                    <button
                        onClick={handleCreateData}
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-8 py-3 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
