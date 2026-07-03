import { motion } from "framer-motion";

import category1 from "../../assets/images/category1.png";
import category2 from "../../assets/images/category2.png";
import category3 from "../../assets/images/category3.png";

const categories = [
    {
        id: 1,
        title: "Натуральные масла",
        image: category1,
    },
    {
        id: 2,
        title: "НОВИНКИ",
        image: category2,
    },
    {
        id: 3,
        title: "Полезная мука",
        image: category3,
    },
];

export default function Categories() {
    return (
        <section className="bg-[#F1F8F4] py-28">

            <div className="max-w-[1700px] mx-auto px-4">

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">

                    {categories.map((item, index) => (

                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 70 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.2,
                            }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-[30px] group cursor-pointer"
                        >

                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-[520px] object-cover duration-500 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-black/20"></div>

                            <div className="absolute inset-0 flex justify-center items-center">

                                <button
                                    className="
                  bg-white
                  px-10
                  py-5
                  rounded-2xl
                  text-[#274C5B]
                  text-2xl
                  font-bold
                  shadow-xl
                  hover:bg-[#7EB693]
                  hover:text-white
                  duration-300"
                                >
                                    {item.title}
                                </button>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}