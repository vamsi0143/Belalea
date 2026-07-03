import { motion } from "framer-motion";
import {
    FaLeaf,
    FaSeedling,
    FaArrowRight,
} from "react-icons/fa";

import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import products from "../data/products";
import { FaStar } from "react-icons/fa";

import banner from "../assets/images/about-banner.png";
import aboutImg1 from "../assets/images/about1.png";
import aboutImg2 from "../assets/images/category2.png";

export default function About() {
    return (
        <>
            <Navbar />

            {/* ================= Banner ================= */}

            <section
                className="h-[420px] bg-center bg-cover flex items-center justify-center"
                style={{
                    backgroundImage: `url(${banner})`,
                }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    className="text-[#274C5B] text-6xl lg:text-7xl font-bold"
                >
                    О нас
                </motion.h1>
            </section>

            {/* ================= First About ================= */}

            <section className="py-24 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        {/* Image */}

                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .8 }}
                            viewport={{ once: true }}
                        >

                            <img
                                src={aboutImg1}
                                alt=""
                                className="w-full"
                            />

                        </motion.div>

                        {/* Content */}

                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .8 }}
                            viewport={{ once: true }}
                        >

                            <h4
                                className="text-[#7EB693] text-4xl italic"
                                style={{
                                    fontFamily: "Rosa Marena",
                                }}
                            >
                                О нас
                            </h4>

                            <h2 className="text-[#274C5B] text-5xl font-bold mt-4 leading-tight">

                                Натуральные продукты -
                                <br />
                                здоровье населения

                            </h2>

                            <p className="mt-8 text-[#525C60] leading-8">

                                Simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s.

                            </p>

                            <p className="mt-6 text-[#525C60] leading-8">

                                Simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text.

                            </p>

                            <div className="flex gap-12 mt-10">

                                <div className="flex gap-4">

                                    <div className="w-14 h-14 rounded-xl bg-[#F9F8F8] flex justify-center items-center">

                                        <FaLeaf className="text-[#7EB693] text-2xl" />

                                    </div>

                                    <div>

                                        <h3 className="font-bold text-[#274C5B]">

                                            Современная
                                            <br />

                                            сельхоз. техника

                                        </h3>

                                    </div>

                                </div>

                                <div className="flex gap-4">

                                    <div className="w-14 h-14 rounded-xl bg-[#F9F8F8] flex justify-center items-center">

                                        <FaSeedling className="text-[#7EB693] text-2xl" />

                                    </div>

                                    <div>

                                        <h3 className="font-bold text-[#274C5B]">

                                            Выращивание
                                            <br />

                                            без гормонов

                                        </h3>

                                    </div>

                                </div>

                            </div>

                            <button className="mt-10 px-8 py-4 bg-[#274C5B] rounded-xl text-white flex items-center gap-4">

                                Подробнее

                                <span className="w-8 h-8 rounded-full bg-[#335B6B] flex justify-center items-center">

                                    <FaArrowRight size={12} />

                                </span>

                            </button>

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* ================= Second About ================= */}

            <section className="py-20 bg-[#F9F8F8]">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-24 items-center">

                        {/* Left */}

                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .8 }}
                            viewport={{ once: true }}
                        >

                            <h4
                                className="text-[#7EB693] text-4xl italic"
                                style={{
                                    fontFamily: "Rosa Marena",
                                }}
                            >
                                Почему мы?
                            </h4>

                            <h2 className="text-[#274C5B] text-5xl font-bold mt-4 leading-tight">

                                Мы закупаем семена и
                                орехи у лучших фермеров.

                            </h2>

                            <p className="text-[#525C60] mt-8 leading-8">

                                Simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been.

                            </p>

                            <div className="mt-10 space-y-6">

                                <div className="bg-white rounded-full px-8 py-5 shadow-sm">

                                    ✓ 100% натуральные продукты

                                </div>

                                <div className="bg-white rounded-full px-8 py-5 shadow-sm">

                                    ✓ Сертифицированное качество

                                </div>

                            </div>

                        </motion.div>

                        {/* Image */}

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .8 }}
                            viewport={{ once: true }}
                        >

                            <img
                                src={aboutImg2}
                                alt=""
                                className="w-full rounded-[30px]"
                            />

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* ================= Feature Cards ================= */}

            <section className="py-24 bg-white">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="grid md:grid-cols-3 gap-8">

                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .6 }}
                            viewport={{ once: true }}
                            className="bg-[#F9F8F8] rounded-[30px] p-10 text-center"
                        >

                            <div className="w-20 h-20 rounded-full bg-white shadow flex items-center justify-center mx-auto">

                                <FaLeaf className="text-[#7EB693] text-3xl" />

                            </div>

                            <h3 className="mt-8 text-2xl font-bold text-[#274C5B]">

                                Доступность

                            </h3>

                            <p className="mt-5 text-[#525C60] leading-8">

                                Натуральные продукты по
                                самым доступным ценам.

                            </p>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .8 }}
                            viewport={{ once: true }}
                            className="bg-[#F9F8F8] rounded-[30px] p-10 text-center"
                        >

                            <div className="w-20 h-20 rounded-full bg-white shadow flex items-center justify-center mx-auto">

                                <FaSeedling className="text-[#7EB693] text-3xl" />

                            </div>

                            <h3 className="mt-8 text-2xl font-bold text-[#274C5B]">

                                100% Свежесть

                            </h3>

                            <p className="mt-5 text-[#525C60] leading-8">

                                Только свежая фермерская
                                продукция высокого качества.

                            </p>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="bg-[#F9F8F8] rounded-[30px] p-10 text-center"
                        >

                            <div className="w-20 h-20 rounded-full bg-white shadow flex items-center justify-center mx-auto">

                                <FaArrowRight className="text-[#7EB693] text-3xl" />

                            </div>

                            <h3 className="mt-8 text-2xl font-bold text-[#274C5B]">

                                Поддержка

                            </h3>

                            <p className="mt-5 text-[#525C60] leading-8">

                                Мы всегда готовы помочь
                                каждому покупателю.

                            </p>

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* ================= Green Product Section ================= */}

            <section className="py-28 bg-[#7EB693]">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="flex justify-between items-center mb-16">

                        <div>

                            <h2 className="text-white text-5xl font-bold">

                                Лучшие предложения месяца

                            </h2>

                        </div>

                        <button className="bg-[#EFD372] px-8 py-4 rounded-xl font-semibold text-[#274C5B] flex items-center gap-3">

                            Смотреть всё

                            <span className="w-8 h-8 rounded-full bg-[#274C5B] text-white flex justify-center items-center">

                                <FaArrowRight size={11} />

                            </span>

                        </button>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {products.slice(0, 4).map((product) => (

                            <motion.div
                                key={product.id}
                                whileHover={{ y: -10 }}
                                transition={{ duration: .3 }}
                                className="bg-white rounded-[30px] p-6 shadow-sm hover:shadow-xl"
                            >

                                {/* Category */}

                                <span className="inline-block bg-[#274C5B] text-white px-5 py-2 rounded-full text-sm">

                                    {product.category}

                                </span>

                                {/* Image */}

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-[220px] object-contain my-6"
                                />

                                {/* Product Name */}

                                <h3 className="text-[#274C5B] text-xl font-bold">

                                    {product.name}

                                </h3>

                                <hr className="my-5" />

                                {/* Price & Rating */}

                                <div className="flex justify-between items-center">

                                    <div>

                                        <span className="text-gray-400 line-through mr-2">

                                            $20.00

                                        </span>

                                        <span className="text-[#274C5B] font-bold">

                                            $13.00

                                        </span>

                                    </div>

                                    <div className="flex text-[#FFA858]">

                                        {[...Array(5)].map((_, index) => (

                                            <FaStar
                                                key={index}
                                                size={14}
                                            />

                                        ))}

                                    </div>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>

            <Newsletter />

            <Footer />

        </>
    );
}