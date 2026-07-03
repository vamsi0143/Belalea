import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

import banner from "../assets/images/banner.jpg";
import flour from "../assets/images/products6.jpeg";

import products from "../data/products";
import ProductCard from "../components/Products/ProductCard";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ShopSingle() {
    return (
        <>
            <Navbar />

            {/* Banner */}

            <section
                className="h-[320px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: `url(${banner})`,
                }}
            >
                <h1 className="text-6xl font-bold text-[#274C5B]">
                    Мука
                </h1>
            </section>

            {/* Product Section */}

            <section className="py-24 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-24 items-start">

                        {/* LEFT */}

                        <div>

                            <div className="bg-[#F9F8F8] rounded-[25px] p-12 relative">

                                <span className="absolute top-6 left-6 bg-[#274C5B] text-white px-4 py-1 rounded-lg text-sm">

                                    Мука

                                </span>

                                <img
                                    src={flour}
                                    alt=""
                                    className="w-full object-contain h-[420px]"
                                />

                            </div>

                            {/* Thumbnails */}

                            <div className="flex gap-5 mt-8">

                                {[1, 2, 3, 4].map((item) => (
                                    <div
                                        key={item}
                                        className="bg-[#F9F8F8] rounded-xl p-3 w-24 h-24 cursor-pointer hover:border border-[#7EB693]"
                                    >
                                        <img
                                            src={flour}
                                            alt=""
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                ))}

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="pt-6">

                            <h2 className="text-4xl font-bold text-[#274C5B]">

                                Мука Рисовая

                            </h2>

                            <p className="mt-8 leading-8 text-[#525C60]">

                                Simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever
                                since the 1500s.

                            </p>

                            <p className="mt-6 leading-8 text-[#525C60]">

                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. When an
                                unknown printer took a galley.

                            </p>

                            {/* Buttons */}

                            <div className="flex gap-5 mt-10">

                                <button className="bg-[#C218C9] text-white px-10 py-4 rounded-lg font-semibold">

                                    Wildberries

                                </button>

                                <button className="bg-[#2939F2] text-white px-10 py-4 rounded-lg font-semibold">

                                    OZON

                                </button>

                            </div>

                            {/* Slider Buttons */}

                            <div className="flex gap-4 mt-12">

                                <button className="w-12 h-12 rounded-full border flex justify-center items-center hover:bg-[#7EB693] hover:text-white">

                                    <FaChevronLeft />

                                </button>

                                <button className="w-12 h-12 rounded-full border flex justify-center items-center hover:bg-[#7EB693] hover:text-white">

                                    <FaChevronRight />

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Related Products */}

            <section className="pb-28 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-center text-5xl font-bold text-[#274C5B] mb-16">

                        Похожие продукты

                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {products.slice(0, 4).map((item) => (

                            <ProductCard
                                key={item.id}
                                product={item}
                            />

                        ))}

                    </div>

                </div>

            </section>
            <Newsletter />
            <Footer />

        </>
    );
}
