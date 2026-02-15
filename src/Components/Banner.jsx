import React from "react";
import bannerImg1 from "../assets/banner.img/img1.jpg";
import bannerImg2 from "../assets/banner.img/img2.jpg";
import bannerImg3 from "../assets/banner.img/img3.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={4000}
      >
        {/* Slide 1 */}
        <div className="relative h-[80vh]">
          <img
            src={bannerImg1}
            alt="Garment Production"
            className="h-[80vh] object-cover"
          />
          <div className="absolute inset-0  bg-opacity-50 flex items-center">
            <div className="text-white px-10 md:px-20 max-w-xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Premium Garments Manufacturing
              </h1>
              <p className="mb-6 text-lg">
                We deliver high-quality textile production with modern
                technology and skilled workforce.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition duration-300">
                View Products
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative h-[80vh]">
          <img
            src={bannerImg2}
            alt="Garment Warehouse"
            className="h-[80vh] object-cover"
          />
          <div className="absolute inset-0  bg-opacity-50 flex items-center">
            <div className="text-white px-10 md:px-20 max-w-xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Efficient Order Management
              </h1>
              <p className="mb-6 text-lg">
                Track, manage, and deliver orders smoothly with our smart
                production system.
              </p>
              <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition duration-300">
                Book an Order
              </button>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative h-[80vh]">
          <img
            src={bannerImg3}
            alt="Fashion Industry"
            className="h-[80vh] object-cover"
          />
          <div className="absolute inset-0  bg-opacity-50 flex items-center">
            <div className="text-white px-10 md:px-20 max-w-xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Trusted by Global Brands
              </h1>
              <p className="mb-6 text-lg">
                Delivering excellence in fashion manufacturing worldwide.
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
