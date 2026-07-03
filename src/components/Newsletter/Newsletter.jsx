import { useState } from "react";
import { motion } from "framer-motion";

import newsletterBg from "../../assets/images/newsletter.png";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex =
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (!email.trim()) {
            setError("Email is required");
            return;
        }

        if (!emailRegex.test(email)) {
            setError("Please enter a valid email.");
            return;
        }

        alert("Subscribed Successfully!");

        setEmail("");
        setError("");
    };

    return (
        <section className="py-28 bg-white">

            <div
                className="max-w-7xl mx-auto rounded-[35px] overflow-hidden bg-cover bg-center"
                style={{
                    backgroundImage: `url(${newsletterBg})`,
                }}
            >

                <div className="bg-[#274C5B]/30 px-8 lg:px-16 py-20">

                    <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

                        {/* Left */}

                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: .8 }}
                        >

                            <h2 className="text-white text-4xl lg:text-5xl font-bold leading-tight max-w-md">

                                Узнайте первыми
                                <br />
                                о новых акциях!

                            </h2>

                        </motion.div>

                        {/* Right */}

                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: .8 }}
                            className="w-full lg:w-auto"
                        >

                            <div className="flex flex-col sm:flex-row gap-5">

                                <input
                                    type="email"
                                    placeholder="Введите ваш e-mail адресс"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setError("");
                                    }}
                                    className="w-full sm:w-[360px] h-16 rounded-2xl px-6 outline-none text-[#274C5B] bg-white"
                                />

                                <button
                                    type="submit"
                                    className="h-16 px-10 rounded-2xl bg-[#274C5B] text-white font-semibold hover:bg-[#7EB693] duration-300"
                                >
                                    Подписаться
                                </button>

                            </div>

                            {error && (
                                <p className="text-red-200 mt-3 ml-2">
                                    {error}
                                </p>
                            )}

                        </motion.form>

                    </div>

                </div>

            </div>

        </section>
    );
}