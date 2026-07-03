import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";
import { PiPlantLight } from "react-icons/pi";

import aboutImage from "../../assets/images/about-main.png";

export default function About() {
    return (
        <section className="bg-[#F9F8F8] py-28">

            <div className="relative max-w-[1600px]  mx-auto h-[720px]">

                {/* LEFT IMAGE */}

                <motion.img
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: true }}
                    src={aboutImage}
                    alt=""
                    className=" w-[100%] h-[720px] object-cover "
                />

                {/* RIGHT CARD */}

                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: true }}
                    className="
                    absolute
                     right-0
                    top-1/2
                    -translate-y-1/2
                    w-[46%]
                    h-[720px]
                    rounded-1-[40px]
                    px-4
                    py-6
                    flex
                    flex-col
                    justify-center
                    "
                >

                    <h4
                        className="text-[#7EB693] text-4xl"
                        style={{ fontFamily: "Yellowtail" }}
                    >
                        О нас
                    </h4>

                    <h2 className="mt-2 text-[#274C5B] text-[50px] font-bold leading-tight">

                        Мы работаем только с
                        качественным сырьём
                        от местных фермеров

                    </h2>

                    <p className="mt-6 text-[#525C60] leading-8">

                        Работа с местными фермерами приносит производственным
                        компаниям преимущество в виде высококачественного
                        сырья, укрепляет местное сообщество,
                        снижает экологический след и способствует
                        устойчивости цепочки поставок.

                    </p>

                    {/* Feature 1 */}

                    <div className="flex items-start gap-5 mt-8">

                        <div className="w-16 h-16 rounded-2xl bg-[#F9F8F8] flex justify-center items-center">

                            <GiFruitBowl
                                size={34}
                                className="text-[#7EB693]"
                            />

                        </div>

                        <div>

                            <h3 className="text-2xl font-bold text-[#274C5B]">

                                Только натуральная продукция

                            </h3>

                            <p className="text-[#525C60] mt-2 leading-7">

                                Полагаясь на природу, мы предлагаем
                                продукты без искусственных добавок.

                            </p>

                        </div>

                    </div>

                    {/* Feature 2 */}

                    <div className="flex items-start gap-5 mt-7">

                        <div className="w-16 h-16 rounded-2xl bg-[#F9F8F8] flex justify-center items-center">

                            <PiPlantLight
                                size={34}
                                className="text-[#7EB693]"
                            />

                        </div>

                        <div>

                            <h3 className="text-2xl font-bold text-[#274C5B]">

                                Высокие стандарты качества

                            </h3>

                            <p className="text-[#525C60] mt-2 leading-7">

                                На каждом этапе производства мы стремимся
                                к совершенству, чтобы вы могли
                                наслаждаться продуктами превосходного
                                качества.

                            </p>

                        </div>

                    </div>

                    {/* BUTTON */}

                    <button className="mt-10 bg-[#274C5B] hover:bg-[#7EB693] duration-300 text-white px-8 py-4 rounded-2xl flex items-center gap-4 w-fit">

                        Подробнее

                        <span className="w-8 h-8 rounded-full bg-[#335B6B] flex justify-center items-center">

                            <FaArrowRight size={12} />

                        </span>

                    </button>

                </motion.div>

            </div>

        </section>
    );
}