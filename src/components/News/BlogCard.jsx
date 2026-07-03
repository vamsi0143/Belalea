import { motion } from "framer-motion";
import { FaArrowRight, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
    return (
        <Link to={`/blog-single/${blog.id}`}>

            <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35 }}
                className="relative overflow-hidden rounded-[32px] group cursor-pointer"
            >

                <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="relative overflow-hidden rounded-[32px] group cursor-pointer"
                >
                    {/* Blog Image */}

                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-[550px] object-cover rounded-[32px] duration-500 group-hover:scale-105"
                    />

                    {/* Date Badge */}

                    <div className="absolute top-8 left-8 w-20 h-20 bg-white rounded-full shadow-xl flex flex-col justify-center items-center">

                        <h3 className="text-2xl font-bold text-[#274C5B] leading-none">
                            {blog.date}
                        </h3>

                        <span className="text-sm font-semibold text-[#274C5B]">
                            {blog.month}
                        </span>

                    </div>

                    {/* Content Card */}

                    <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-[88%] bg-white rounded-[30px] shadow-2xl p-8">

                        {/* Author */}

                        <div className="flex items-center gap-3">

                            <FaUser className="text-[#EFD372]" />

                            <span className="text-[#274C5B] font-medium">
                                {blog.author}
                            </span>

                        </div>

                        {/* Title */}

                        <h2 className="mt-5 text-[28px] leading-snug font-bold text-[#274C5B]">

                            {blog.title}

                        </h2>

                        {/* Description */}

                        <p className="mt-4 text-[#525C60] leading-8">

                            {blog.description}

                        </p>

                        {/* Button */}

                        <button className="mt-8 inline-flex items-center gap-4 bg-[#EFD372] hover:bg-[#e5c94b] duration-300 text-[#274C5B] font-bold px-6 py-4 rounded-2xl">

                            Подробнее

                            <span className="w-8 h-8 rounded-full bg-[#274C5B] flex justify-center items-center">

                                <FaArrowRight size={11} className="text-white" />

                            </span>

                        </button>

                    </div>
                </motion.div>
            </motion.div>

        </Link>
    );
}