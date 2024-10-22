import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Chatbot.css';

const Chatbot = () => {
    const [message, setMessage] = useState('');
    const [responses, setResponses] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const sessionId = Math.random().toString(36).substr(2, 9);

        const res = await fetch(`http://localhost:5000/api/website?text=${message}&mysession=${sessionId}`);
        const data = await res.text();

        setResponses([...responses, { user: message, bot: data }]);
        setMessage('');
    };

    return (
        <motion.div
            className="chatbot-floating-container"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4 }}
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        >
            <div className="chatbot-container">
                <h2>Chatbot</h2>
                <div className="chatbox">
                    {responses.map((response, index) => (
                        <motion.div
                            key={index}
                            className="chat-message"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered effect
                        >
                            <p><strong>You:</strong> {response.user}</p>
                            <p><strong>Bot:</strong> {response.bot}</p>
                        </motion.div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className="chatbot-form">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type a message..."
                        required
                        className="chat-input"
                    />
                    <motion.button
                        type="submit"
                        className="send-button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Send
                    </motion.button>
                </form>
            </div>
        </motion.div>
    );
};

export default Chatbot;
