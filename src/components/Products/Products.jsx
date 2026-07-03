import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import products from "../../data/products";
import ProductCard from "./ProductCard";

export default function Products() {
    return (
        <section className="py-32 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >

                    <h4
                        className="text-[#7EB693] text-4xl italic"
                        style={{ font: "Rosa Marena" }}
                    >
                        Категории
                    </h4>

                    <h2 className="text-5xl font-bold text-[#274C5B] mt-4">
                        Наши продукты
                    </h2>

                </motion.div>

                {/* Products */}

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}

                </div>

                {/* Button */}

                <div className="flex justify-center mt-20">

                    <button className="bg-[#274C5B] hover:bg-[#7EB693] duration-300 text-white px-10 py-5 rounded-2xl flex items-center gap-5 font-semibold">

                        Смотреть всё

                        <span className="w-9 h-9 rounded-full bg-[#335B6B] flex justify-center items-center">

                            <FaArrowRight />

                        </span>

                    </button>

                </div>

            </div>

        </section>
    );
}