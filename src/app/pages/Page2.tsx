import React from "react";

const Page2HeroSection = () => {
  return (
    <div className="bg-[#F3EDE8] text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold">
            Luxury homeware for people who love timeless design quality
          </h1>
          <p className="text-gray-600 text-lg">
            Shop the new Spring 2022 collection today
          </p>
          <button className="px-6 py-3 bg-[#2C2541] text-white rounded-lg hover:bg-[#4B4A57] transition">
            View collection
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <img
            src="/table.png"
            alt="Luxury Homeware"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-10 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          What makes our brand different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <img src="/path-to-icon1.png" alt="Feature 1" className="w-16 h-16 mb-4" />
            <h3 className="font-bold text-lg">Next day as standard</h3>
            <p className="text-gray-600">
              Order before 5 pm and get your order the next day as standard.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <img src="/path-to-icon2.png" alt="Feature 2" className="w-16 h-16 mb-4" />
            <h3 className="font-bold text-lg">Made by true artisans</h3>
            <p className="text-gray-600">
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <img src="/path-to-icon3.png" alt="Feature 3" className="w-16 h-16 mb-4" />
            <h3 className="font-bold text-lg">Unbeatable prices</h3>
            <p className="text-gray-600">
              For the materials and quality, you won’t find better prices anywhere.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
            <img src="/path-to-icon4.png" alt="Feature 4" className="w-16 h-16 mb-4" />
            <h3 className="font-bold text-lg">Recycled packaging</h3>
            <p className="text-gray-600">
              We use 100% recycled packaging to ensure our footprint is manageable.
            </p>
          </div>
        </div>
      </section>

      {/* New Ceramics Section */}
      <section className="py-16 px-10 bg-[#F9F9F9]">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">New Ceramics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="text-center">
            <img src="/img-1.png" alt="Chair" className="rounded-lg mb-4" />
            <h3 className="font-bold">The Dandy Chair</h3>
            <p className="text-gray-600">£250</p>
          </div>

          {/* Product 2 */}
          <div className="text-center">
            <img src="/gamly.png" alt="Rustic Vase Set" className="rounded-lg mb-4" />
            <h3 className="font-bold">Rustic Vase Set</h3>
            <p className="text-gray-600">£55</p>
          </div>

          {/* Product 3 */}
          <div className="text-center">
            <img src="/bottle.png" alt="The Silky Vase" className="rounded-lg mb-4" />
            <h3 className="font-bold">The Silky Vase</h3>
            <p className="text-gray-600">£125</p>
          </div>

          {/* Product 4 */}
          <div className="text-center">
            <img src="/Parent.png" alt="The Lucy Lamp" className="rounded-lg mb-4" />
            <h3 className="font-bold">The Lucy Lamp</h3>
            <p className="text-gray-600">£399</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page2HeroSection;