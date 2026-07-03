import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

import BlogCard from "../components/News/BlogCard";
import blogData from "../data/blogData";

import banner from "../assets/images/blog-banner.png";

export default function Blog() {
    return (
        <>
            <Navbar />

            {/* Banner */}

            <section
                className="h-[340px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: `url(${banner})`,
                }}
            >
                <h1 className="text-6xl font-bold text-[#274C5B]">

                    Новости

                </h1>
            </section>

            {/* Blog Section */}

            <section className="py-28 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {blogData.map((blog) => (

                            <BlogCard
                                key={blog.id}
                                blog={blog}
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