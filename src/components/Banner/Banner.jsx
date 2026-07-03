import { motion } from "framer-motion";

import offer1 from "../../assets/images/offer1.jpg";
import offer2 from "../../assets/images/offer2.png";

export default function Banner() {
    return (
        <section className="py-28 bg-white">

            <div className="max-w-7xl mx-auto px-2">

                <div className="grid lg:grid-cols-2 gap-8">

                    {/* Left Banner */}

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative rounded-[35px] overflow-hidden group"
                    >

                        <img
                            src={offer1}
                            alt=""
                            className="w-full h-[360px] object-fill transition duration-500 group-hover:scale-105"
                        />

                        <div className="absolute left-12 top-1/2 -translate-y-1/2 max-w-[230px]">

                            <h4
                                className="text-white text-[42px] leading-none mb-5"
                                style={{ fontFamily: "Yellowtail" }}
                            >
                                Новинки!
                            </h4>

                            <h2 className="text-white text-[52px] font-extrabold leading-[1.05]">
                                Свежайшее
                                <br />
                                штирийское
                                <br />
                                масло
                            </h2>

                        </div>

                    </motion.div>

                    {/* Right Banner */}

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative rounded-[35px] overflow-hidden group"
                    >

                        <img
                            src={offer2}
                            alt=""
                            className="w-full h-[360px] object-fill transition duration-500 group-hover:scale-105"
                        />

                        <div className="absolute left-12 top-1/2 -translate-y-1/2 max-w-[230px]">

                            <h4
                                className="text-[#7EB693] text-[42px] leading-none mb-5"
                                style={{ fontFamily: "Yellowtail" }}
                            >
                                Скидка!
                            </h4>

                            <h2 className="text-[#274C5B] text-[52px] font-extrabold leading-[1.05]">
                                Скидка 20%
                                <br />
                                за подписку
                            </h2>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}