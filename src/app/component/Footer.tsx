import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin, faSkype, faPinterest } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
                className="w-full p-2 bg-gray-700 rounded mb-2 text-sm"
              />
              <button className="w-full p-2 bg-blue-600 rounded text-white">Sign up</button>
            </form>
          </div>
          <div>
            <h3 className="font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://skype.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg"
              >
                <FontAwesomeIcon icon={faSkype} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg"
              >
                <FontAwesomeIcon icon={faPinterest} />
              </a>
            </div>
          </div>
        </div>
        <p className="text-center mt-6 text-sm">&copy; 2024 Avion</p>
      </div>
    </footer>
  );
}
