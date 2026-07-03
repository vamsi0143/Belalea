import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import ProductCard from "../components/Products/ProductCard";

import products from "../data/products";

import shopBanner from "../assets/images/shop-banner.png";

export default function Shop() {
    return (
        <>
            <Navbar />

            <main>

                {/* Banner */}

                <section
                    className="h-[340px] bg-cover bg-center flex items-center justify-center"
                    style={{
                        backgroundImage: `url(${shopBanner})`,
                    }}
                >

                    <h1 className="text-6xl font-bold text-[#274C5B]">

                        Каталог

                    </h1>

                </section>

                {/* Products */}

                <section className="py-28 bg-white">

                    <div className="max-w-7xl mx-auto px-6">

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                            {products.map((product) => (

                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />

                            ))}

                        </div>

                    </div>

                </section>

                <Newsletter />

                <Footer />

            </main>
        </>
    );
}