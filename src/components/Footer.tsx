// components/Footer.tsx
import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail, FiClock, FiInstagram } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gold mb-4">
              Elevate
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Experience culinary artistry crafted with authentic flavor. 
              Where every meal tells a story and every moment is memorable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-300">
                <FiInstagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-300">
                <FaTiktok size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FiMapPin className="text-gold" />
                <span className="text-gray-300">123 Gourmet Avenue, Culinary District</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="text-gold" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="text-gold" />
                <span className="text-gray-300">hello@elevate.restaurant</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Opening Hours</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>5:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>5:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>5:00 PM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Brunch</span>
                <span>Sat-Sun: 10AM-2PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {['Home', 'Menu', 'About', 'Reservations', 'Gallery', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-gold transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Elevate Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}