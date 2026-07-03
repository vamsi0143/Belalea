import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";


export default function ProductCard({ product }) {
    return (
        <motion.div
            whileHover={{
                y: -10,
                scale: 1.03,
            }}
            transition={{ duration: 0.3 }}
            className="bg-[#F9F8F8] rounded-[30px] p-6 cursor-pointer shadow-sm hover:shadow-xl duration-300"
        >
            {/* Category */}

            <span className="bg-[#274C5B] text-white text-sm px-4 py-2 rounded-lg">
                {product.category}
            </span>

            {/* Product */}

            <div className="flex justify-center mt-8">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-56 object-contain duration-500 hover:scale-110"
                />
            </div>

            {/* Name */}

            <h3 className="mt-6 text-lg font-bold text-[#274C5B]">
                {product.name}
            </h3>

            <hr className="my-5 border-gray-300" />

            <div className="flex justify-between items-center">

                {/* <div>

                    <span className="line-through text-gray-400 mr-2">
                        {product.oldPrice}
                    </span>

                    <span className="font-bold text-[#274C5B]">
                        {product.price}
                    </span>

                </div> */}

                {/* <div className="flex gap-1">

                    {[...Array(product.rating)].map((_, i) => (
                        <FaStar
                            key={i}
                            className="text-[#FFA858]"
                        />
                    ))}

                </div> */}

            </div>
        </motion.div>
    );
}