import Link from "next/link";

function Header() {
  return (
    <header className="border-b py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Left Section: Search Icon */}
        <div className="text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m2.85-6.15a8.25 8.25 0 11-16.5 0 8.25 8.25 0 0116.5 0z"
            />
          </svg>
        </div>

        {/* Center Section: Brand Logo */}
        <div className="text-2xl font-bold text-gray-900">Avion</div>

        {/* Right Section: Icons */}
        <div className="flex space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.375 6.75h17.25M3.375 12h17.25m-17.25 5.25h17.25"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3l1.664 16.708a2.25 2.25 0 002.244 2.042h10.184a2.25 2.25 0 002.244-2.042L21 3M8.625 8.25h6.75m-6.75 3h6.75m-6.75 3h6.75"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6.75a3 3 0 11-6 0 3 3 0 016 0zm0 0v.75a3 3 0 003 3h2.25m-14.25 0h2.25a3 3 0 003-3v-.75m0 0a3 3 0 016 0"
            />
          </svg>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="border-t py-2">
        <div className="container mx-auto px-6 flex justify-center space-x-6 text-gray-500">
        {[ 
  <Link key="tables" href="/Page2" className="text-sm hover:text-gray-900 transition">
    Tables
  </Link>,
  'Plant pots',
  'Ceramics',
  'Chairs',
  'Crockery',
  'Tableware',
  'Cutlery',
].map((item, i) => (
  typeof item === "string" ? (
    <span key={i} className="text-sm hover:text-gray-900 transition">{item}</span>
  ) : (
    item
  )
))}

          
        </div>
      </div>
    </header>
  );
}

export default Header;