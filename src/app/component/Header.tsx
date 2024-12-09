import Link from "next/link";

function Header() {
  return (
    <header className="border-b py-4">
    <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
      {/* Left Section */}
      <div className="text-gray-600">
        {/* Search Icon */}
      </div>
      {/* Brand Logo */}
      <div className="text-2xl font-bold text-gray-900">Avion</div>
      {/* Right Section */}
      <div className="hidden md:flex space-x-4">
        {/* Icons */}
      </div>
      <div className="block md:hidden">
        {/* Mobile Menu Icon */}
      </div>
    </div>
    {/* Navigation Links */}
    <div className="border-t py-2">
      <div className="container mx-auto flex flex-wrap justify-center gap-4 text-gray-500">
        {['Tables', 'Plant pots', 'Ceramics', 'Chairs', 'Crockery', 'Tableware', 'Cutlery'].map(
          (item, i) => (
            <span key={i} className="text-sm hover:text-gray-900 transition">
              {item}
            </span>
          )
        )}
      </div>
    </div>
  </header>
  );
}

export default Header;