import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

import notFound from "../assets/images/404.png";
import { FaArrowRight } from "react-icons/fa";

export default function NotFound() {
    return (
        <>
            <Navbar />

            <section
                className="relative h-[850px] bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${notFound})`,
                }}
            >
                <div className="absolute right-[10%] top-1/2 -translate-y-1/2 max-w-[520px]">

                    <h1 className="text-[180px] font-bold leading-none text-[#8BC220]">
                        404
                    </h1>

                    <h2 className="text-[60px] font-bold text-[#274C5B] leading-tight mt-2">
                        Page Not Found
                    </h2>

                    <p className="mt-6 text-[#525C60] leading-8 text-lg">
                        The page you are looking for doesn't exist or has been moved.
                        Please return to the homepage and continue exploring our
                        organic products.
                    </p>

                    <Link to="/">
                        <button className="mt-10 bg-[#274C5B] hover:bg-[#7EB693] duration-300 text-white px-10 py-5 rounded-2xl font-semibold">
                            Back to Home
                        </button>
                    </Link>

                </div>
            </section>
            <Footer />
        </>
    );
}