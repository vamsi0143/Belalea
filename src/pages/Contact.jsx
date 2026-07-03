import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaPhoneAlt,
    FaInstagram,
    FaFacebookF,
    FaTwitter,
    FaPinterestP
} from "react-icons/fa";

import banner from "../assets/images/banner.jpg";
import contactImage from "../assets/images/contact-image.jpg";
import locationImage from "../assets/images/contact-location.png";

export default function Contact() {
    return (
        <>
            <Navbar />

            {/* Banner */}

            <section
                className="h-[320px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: `url(${banner})`,
                }}
            >
                <h1 className="text-6xl font-bold text-[#274C5B]">
                    Contact Us
                </h1>
            </section>

            {/* Contact Intro */}

            <section className="py-28 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        {/* Left Image */}

                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .8 }}
                            viewport={{ once: true }}
                        >

                            <img
                                src={contactImage}
                                alt=""
                                className="w-full rounded-[35px]"
                            />

                        </motion.div>

                        {/* Right Content */}

                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .8 }}
                            viewport={{ once: true }}
                        >

                            <h2 className="text-5xl font-bold text-[#274C5B] leading-tight">

                                We'd love to talk about how we can work together.

                            </h2>

                            <p className="mt-8 text-[#525C60] leading-8">

                                Simply dummy text of the printing and
                                typesetting industry. Lorem had ceased to
                                been the industry's standard dummy text ever
                                since the 1500s.

                            </p>

                            {/* Email */}

                            <div className="mt-10 flex items-center gap-6 border rounded-[20px] p-6 hover:shadow-xl duration-300">

                                <div className="w-20 h-20 rounded-full bg-[#F4F4F4] flex justify-center items-center">

                                    <FaEnvelope
                                        className="text-[#7EB693]"
                                        size={28}
                                    />

                                </div>

                                <div>

                                    <h3 className="text-2xl font-bold text-[#274C5B]">

                                        Message

                                    </h3>

                                    <p className="text-[#525C60]">

                                        support@organic.com

                                    </p>

                                </div>

                            </div>

                            {/* Phone */}

                            <div className="mt-6 flex items-center gap-6 border rounded-[20px] p-6 hover:shadow-xl duration-300">

                                <div className="w-20 h-20 rounded-full bg-[#F4F4F4] flex justify-center items-center">

                                    <FaPhoneAlt
                                        className="text-[#7EB693]"
                                        size={25}
                                    />

                                </div>

                                <div>

                                    <h3 className="text-2xl font-bold text-[#274C5B]">

                                        Contact Us

                                    </h3>

                                    <p className="text-[#525C60]">

                                        +01 123 456 789

                                    </p>

                                </div>

                            </div>

                            {/* Social */}

                            <div className="flex gap-5 mt-10">

                                {[
                                    <FaInstagram />,
                                    <FaFacebookF />,
                                    <FaTwitter />,
                                    <FaPinterestP />
                                ].map((icon, index) => (

                                    <button
                                        key={index}
                                        className="w-14 h-14 rounded-full bg-[#EFF6F1] hover:bg-[#7EB693] hover:text-white duration-300 flex justify-center items-center text-[#274C5B] text-xl"
                                    >
                                        {icon}
                                    </button>

                                ))}

                            </div>

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* Location Section */}

            <section className="pb-28 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div
                        className="relative h-[650px] rounded-[35px] overflow-hidden bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${locationImage})`,
                        }}
                    >

                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="
                    absolute
                    right-16
                    top-1/2
                    -translate-y-1/2
                    w-[520px]
                    bg-white
                    rounded-[30px]
                    shadow-2xl
                    p-12
                "
                        >

                            <h4
                                className="text-[#7EB693] text-4xl italic"
                                style={{ fontFamily: "Rosa Marena" }}
                            >
                                Location
                            </h4>

                            <h2 className="mt-4 text-5xl font-bold text-[#274C5B]">

                                Our Farms

                            </h2>

                            <p className="mt-6 text-[#525C60] leading-8">

                                Established fact that a reader will be distracted by
                                the readable content of a page when looking a layout.

                            </p>

                            {/* Address 1 */}

                            <div className="mt-10 flex gap-5">

                                <div className="w-12 h-12 rounded-full bg-[#7EB693] text-white flex justify-center items-center font-bold">

                                    1

                                </div>

                                <div>

                                    <h3 className="text-2xl font-bold text-[#274C5B]">

                                        New York, USA

                                    </h3>

                                    <p className="mt-2 text-[#525C60] leading-7">

                                        299 Park Avenue
                                        <br />
                                        New York, NY 10171

                                    </p>

                                </div>

                            </div>

                            {/* Address 2 */}

                            <div className="mt-10 flex gap-5">

                                <div className="w-12 h-12 rounded-full bg-[#7EB693] text-white flex justify-center items-center font-bold">

                                    2

                                </div>

                                <div>

                                    <h3 className="text-2xl font-bold text-[#274C5B]">

                                        London, UK

                                    </h3>

                                    <p className="mt-2 text-[#525C60] leading-7">

                                        30 Stamford Street
                                        <br />
                                        London SE1 9LQ

                                    </p>

                                </div>

                            </div>

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* Contact Form */}

            <section className="pb-28 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >

                        <form className="space-y-8">

                            {/* Row 1 */}

                            <div className="grid md:grid-cols-2 gap-8">

                                <div>

                                    <label className="block text-[#274C5B] font-bold mb-3">
                                        Full Name*
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full h-16 border border-[#7EB693] rounded-2xl px-6 outline-none focus:ring-2 focus:ring-[#7EB693]"
                                    />

                                </div>

                                <div>

                                    <label className="block text-[#274C5B] font-bold mb-3">
                                        Your Email*
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="example@gmail.com"
                                        className="w-full h-16 border border-[#7EB693] rounded-2xl px-6 outline-none focus:ring-2 focus:ring-[#7EB693]"
                                    />

                                </div>

                            </div>

                            {/* Row 2 */}

                            <div className="grid md:grid-cols-2 gap-8">

                                <div>

                                    <label className="block text-[#274C5B] font-bold mb-3">
                                        Company*
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Your Company"
                                        className="w-full h-16 border border-[#7EB693] rounded-2xl px-6 outline-none focus:ring-2 focus:ring-[#7EB693]"
                                    />

                                </div>

                                <div>

                                    <label className="block text-[#274C5B] font-bold mb-3">
                                        Subject*
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="How can we help?"
                                        className="w-full h-16 border border-[#7EB693] rounded-2xl px-6 outline-none focus:ring-2 focus:ring-[#7EB693]"
                                    />

                                </div>

                            </div>

                            {/* Message */}

                            <div>

                                <label className="block text-[#274C5B] font-bold mb-3">
                                    Message*
                                </label>

                                <textarea
                                    rows={8}
                                    placeholder="Write your message..."
                                    className="w-full border border-[#7EB693] rounded-2xl p-6 outline-none resize-none focus:ring-2 focus:ring-[#7EB693]"
                                ></textarea>

                            </div>

                            {/* Button */}

                            <button
                                type="submit"
                                className="bg-[#274C5B] hover:bg-[#7EB693] duration-300 text-white font-bold px-12 py-5 rounded-2xl"
                            >
                                Send Message
                            </button>

                        </form>

                    </motion.div>

                </div>

            </section>

            <Newsletter />
            <Footer />

        </>
    );
}