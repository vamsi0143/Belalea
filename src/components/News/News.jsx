import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import BlogCard from "./BlogCard";
import blogData from "../../data/blogData";

export default function News() {
    return (
        <section className="py-28 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">

                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4
                            className="text-[#7EB693] text-4xl italic"
                            style={{ fontFamily: "Yellowtail" }}
                        >
                            Новости
                        </h4>

                        <h2 className="max-w-2xl mt-4 text-5xl font-bold text-[#274C5B] leading-tight">
                            Новости об органических продуктах и многом другом
                        </h2>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="border-2 border-[#274C5B] rounded-2xl px-8 py-5 flex items-center gap-4 font-semibold hover:bg-[#274C5B] hover:text-white duration-300"
                    >
                        Больше новостей

                        <span className="w-8 h-8 rounded-full bg-[#274C5B] flex items-center justify-center text-white">
                            <FaArrowRight size={12} />
                        </span>
                    </motion.button>
                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">

                    {blogData.map((blog, index) => (

                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.2,
                            }}
                        >
                            <BlogCard blog={blog} />
                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}