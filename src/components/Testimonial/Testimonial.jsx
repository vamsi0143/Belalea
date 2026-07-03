import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaStar } from "react-icons/fa";

import bg from "../../assets/images/testimonial-bg.jpg";
import customer from "../../assets/images/customer.png";

export default function Testimonial() {
    return (
        <section className="py-20 bg-white">

            <div
                className="max-w-[1400px] h-[620px] mx-auto rounded-[35px] overflow-hidden bg-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url(${bg})`,
                }}
            >

                <div className="max-w-5xl mx-auto px-10 py-14">

                    {/* Heading */}

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >

                        <h4
                            className="text-[#7EB693] text-4xl italic -skew-x-6"
                            style={{ fontFamily: "Rosa Marena" }}
                        >
                            Отзывы
                        </h4>

                        <h2 className="mt-4 text-[#274C5B] text-5xl lg:text-6xl font-bold">
                            Что говорят наши покупатели?
                        </h2>

                    </motion.div>

                    {/* Customer */}

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .2 }}
                        className="mt-12 flex flex-col items-center"
                    >

                        <img
                            src={customer}
                            alt="Customer"
                            className="w-32 h-32 rounded-full object-cover shadow-lg"
                        />

                        {/* Stars */}

                        <div className="flex gap-1 mt-8">

                            {[...Array(5)].map((_, i) => (

                                <FaStar
                                    key={i}
                                    className="text-[#FFA858] text-xl"
                                />

                            ))}

                        </div>

                        {/* Review */}

                        <p className="mt-8 text-[#525C60] text-lg leading-9 text-center max-w-3xl">

                            Simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been.

                        </p>

                        {/* Name */}

                        <h3 className="mt-8 text-3xl font-bold text-[#274C5B]">

                            Sara Taylor

                        </h3>

                        <span className="mt-2 text-[#525C60]">

                            Consumer

                        </span>

                    </motion.div>

                    {/* Divider */}

                    <div className="w-full h-[1px] bg-gray-300 my-12"></div>

                    {/* Counters */}

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

                        <Counter
                            value={100}
                            suffix="%"
                            title="Organic"
                        />

                        <Counter
                            value={285}
                            suffix=""
                            title="Active Product"
                        />

                        <Counter
                            value={350}
                            suffix="+"
                            title="Organic Orchards"
                        />

                        <Counter
                            value={25}
                            suffix="+"
                            title="Years of Farming"
                        />

                    </div>

                </div>
            </div>
        </section>
    );
}

function Counter({ value, suffix, title }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: .8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .5 }}
            className="flex justify-center"
        >

            <div className="w-52 h-52 rounded-full border-[5px] border-[#7EB693] p-[6px]">

                <div className="w-full h-full rounded-full bg-[#F9F8F8] flex flex-col justify-center items-center">

                    <h2 className="text-5xl font-bold text-[#274C5B]">
                        {value}
                        {suffix}
                    </h2>

                    <p className="mt-4 text-[#274C5B] font-semibold text-center">

                        {title}

                    </p>

                </div>

            </div>

        </motion.div>
    );
}