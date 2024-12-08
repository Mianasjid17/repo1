const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-[#2C2541] text-white min-h-screen px-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-4">
            The furniture brand for the future, with timeless designs
          </h1>
          <button
  aria-label="View collection"
  className="mt-6 px-8 py-3 bg-[#4B4A57] rounded-lg text-white hover:bg-[#6c6b7a] transition"
>
  View collection
</button>
          <p className="mt-8 text-base text-gray-300">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way to
            display things digitally using modern web technologies.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div
            className="bg-[#78A1AC] w-full md:w-4/5 h-[300px] md:h-[400px] flex items-center justify-center rounded-lg"
          >
            <img
              src="/img-1.png"
              alt="Chair Design"
              className="h-1280 w-584 object-contain"
            />
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="px-10 py-20 bg-white text-gray-800">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          What makes our brand different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="font-semibold mb-2">Next day as standard</p>
            <p>Order before 2pm and get your order the next day as standard.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Made by true artisans</p>
            <p>Handmade crafted goods made with real passion and craftsmanship.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Unbeatable prices</p>
            <p>We aim for the best quality you need for the lowest prices anywhere.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Recycled packaging</p>
            <p>We use 100% recycled packaging to ensure our footprint is manageable.</p>
          </div>
        </div>
      </section>

      {/* New Ceramics Section */}
      <section className="px-10 py-20 bg-gray-100">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">
          New Ceramics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <img src="/img-1.png" alt="The Dandy Chair" className="w-full h-auto mb-4 rounded" />
            <h3 className="font-semibold">The Dandy Chair</h3>
            <p className="text-gray-500">£250</p>
          </div>
          <div className="text-center">
            <img src="/gamly.png" alt="Rustic Vase Set" className="w-full h-auto mb-4 rounded" />
            <h3 className="font-semibold">Rustic Vase Set</h3>
            <p className="text-gray-500">£95</p>
          </div>
          <div className="text-center">
            <img src="/bottle.png" alt="The Silky Vase" className="w-full h-auto mb-4 rounded" />
            <h3 className="font-semibold">The Silky Vase</h3>
            <p className="text-gray-500">£125</p>
          </div>
          <div className="text-center">
            <img src="/Parent.png" alt="The Lucy Lamp" className="w-full h-auto mb-4 rounded" />
            <h3 className="font-semibold">The Lucy Lamp</h3>
            <p className="text-gray-500">£399</p>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="px-10 py-20 bg-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">
          Our popular products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <img src="/sofa.png" alt="The Poplar Suede Sofa" className="w-full h-auto mb-4 rounded" />
            <h3 className="font-semibold">The Poplar Suede Sofa</h3>
            <p className="text-gray-500">£980</p>
          </div>
          <div className="text-center">
            <img src="/img-1.png" alt="The Dandy Chair" className="w-full h-auto mb-4 rounded" />
            <h3 className="font-semibold">The Dandy Chair</h3>
            <p className="text-gray-500">£250</p>
          </div>
          <div className="text-center">
            <img src="/chair.png" alt="The Dandy Chair Alt" className="w-full h-auto mb-4 rounded" />
            <h3 className="font-semibold">The Dandy Chair</h3>
            <p className="text-gray-500">£250</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <button className="px-8 py-3 bg-[#4B4A57] text-white rounded hover:bg-[#6c6b7a] transition">
            View collection
          </button>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="px-10 py-20 bg-gray-100 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            From a studio in London to a global brand with over 400 outlets
          </h2>
          <p className="text-gray-600 mb-4">
            When we started Avion, the idea was simple. Make high-quality furniture
            affordable and available for the mass market.
          </p>
          <p className="text-gray-600 mb-6">
            Handmade, and lovingly crafted furniture and homeware is what we live,
            breathe and design so our Chelsea boutique becomes the hotbed for the
            London interior design community.
          </p>
          <button className="px-8 py-3 bg-white border border-gray-400 text-gray-800 rounded hover:bg-gray-200 transition">
            Get in touch
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img src="/soaf.png" alt="Brand Story" className="w-full h-auto rounded-lg" />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-10 py-20 bg-gray-100 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Join the club and get the benefits
        </h2>
        <p className="text-gray-600 mb-8">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop-up stores, and more.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="your@email.com"
            className="px-4 py-3 border rounded-md w-full md:w-1/3"
          />
          <button className="px-8 py-3 bg-[#4B4A57] text-white rounded hover:bg-[#6c6b7a] transition">
            Sign up
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;