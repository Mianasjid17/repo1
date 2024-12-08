export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold">Categories</h3>
              <ul className="mt-4 space-y-2">
                {['Ceramics', 'Tables', 'Cookery', 'Gallery'].map((link, i) => (
                  <li key={i}>{link}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Our Company</h3>
              <ul className="mt-4 space-y-2">
                {['About us', 'Contact', 'Careers'].map((link, i) => (
                  <li key={i}>{link}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Join Us</h3>
              <form className="mt-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full p-2 bg-gray-700 rounded mb-2"
                />
                <button className="w-full p-2 bg-blue-600 rounded text-white">Sign up</button>
              </form>
            </div>
          </div>
          <p className="text-center mt-6">&copy; 2024 Avion</p>
        </div>
      </footer>
    );
  }