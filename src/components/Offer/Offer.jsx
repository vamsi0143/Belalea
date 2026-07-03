import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import ProductCard from "../Products/ProductCard";
import products from "../../data/products";

export default function Offer() {

    // First 4 products
    const offerProducts = products.slice(0, 4);

    return (

        <section className="bg-[#7EB693] py-16">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8">

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .8 }}
                    >

                        <h4
                            className="text-[#7EB693] text-4xl"
                            style={{ fontFamily: "Yellowtail" }}
                        >
                            Offer
                        </h4>

                        <h2 className="text-white text-5xl font-bold mt-4 leading-tight">

                            Лучшие предложения месяца
                        </h2>

                    </motion.div>

                    <motion.button

                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .8 }}

                        className="bg-[#EFD372] hover:bg-white duration-300 px-8 py-5 rounded-2xl flex items-center gap-5 font-semibold text-[#274C5B]"

                    >
                        Смотреть все

                        <span className="w-9 h-9 rounded-full bg-[#274C5B] text-white flex items-center justify-center">

                            <FaArrowRight />

                        </span>

                    </motion.button>

                </div>

                {/* Products */}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

                    {offerProducts.map((item) => (

                        <ProductCard

                            key={item.id}

                            product={item}

                        />

                    ))}

                </div>

            </div>

        </section>

    );

}