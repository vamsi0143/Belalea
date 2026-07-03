import { motion } from "framer-motion";
import ecoImage from "../../assets/images/eco-image.png";

export default function Eco() {
    return (
        <section className="py-28 bg-white overflow-hidden">

            <div className="relative max-w-[1600px] mx-auto h-[700px]">

                {/* LEFT IMAGE */}

                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-[68%] h-full"
                >

                    <img
                        src={ecoImage}
                        alt="Eco"
                        className="w-[72%] h-full object-cover rounded-r-[35px]"
                    />

                </motion.div>

                {/* CONTENT */}

                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="
        absolute
        top-1/2
        right-0
        -translate-y-1/2
        -translate-x-16
        w-[51%]
        h-[560px]
        bg-white
        rounded-[30px]
        shadow-xl
        px-12
        py-10
        flex
        flex-col
        justify-center
        z-20
    "
                >

                    <h4
                        className="text-[#7EB693] text-4xl italic"
                        style={{ fontFamily: "Rosa Marena" }}
                    >
                        Eco Friendly
                    </h4>

                    <h2 className="mt-3 text-[#274C5B] text-5xl font-bold leading-tight">

                        Создаём здоровое будущее

                    </h2>

                    {/* Item */}

                    <div className="mt-6">

                        <h3 className="text-2xl font-bold text-[#274C5B]">

                            Современное сельское хозяйство

                        </h3>

                        <p className="mt-3 text-[#525C60] leading-8">

                            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium.
                            Sed ut perspiciatis.

                        </p>

                    </div>

                    <div className="mt-5">

                        <h3 className="text-2xl font-bold text-[#274C5B]">

                            Технологичный подход в производстве

                        </h3>

                        <p className="mt-2 text-[#525C60] leading-7">

                            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium.
                            Sed ut perspiciatis.

                        </p>

                    </div>

                    <div className="mt-8">

                        <h3 className="text-2xl font-bold text-[#274C5B]">

                            Популяризация натуральных продуктов

                        </h3>

                        <p className="mt-3 text-[#525C60] leading-8">

                            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium.
                            Sed ut perspiciatis.

                        </p>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}