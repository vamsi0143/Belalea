import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import heroBanner from "../../assets/images/hero-image.png";

export default function Hero() {
    return (
        <section className="relative mt-0">

            {/* Background Banner */}

            <img
                src={heroBanner}
                alt="Hero"
                className="w-full h-[620px] md:h-[700px] lg:h-[850px] object-cover"
            />

            {/* Content */}

            <div className="absolute inset-0 flex items-center">

                <div className="max-w-7xl mx-auto w-full px-6">

                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl"
                    >

                        {/* Subtitle */}

                        <h3
                            className="text-[#7EB693] text-3xl lg:text-4xl"
                            style={{ fontFamily: "Yellowtail" }}
                        >
                            100% натурально
                        </h3>

                        {/* Heading */}

                        <h1 className="mt-5 text-[#274C5B] text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">

                            Масла и мука
                            <br />
                            из фермерского
                            <br />
                            сырья

                        </h1>

                        {/* Button */}

                        <button
                            className="mt-12 bg-[#EFD372] hover:bg-[#274C5B] hover:text-white duration-300 px-8 py-5 rounded-2xl flex items-center gap-5 text-lg font-semibold"
                        >

                            В КАТАЛОГ

                            <span
                                className="w-9 h-9 rounded-full bg-[#274C5B] flex justify-center items-center"
                            >
                                <FaArrowRight className="text-white text-sm" />
                            </span>

                        </button>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}