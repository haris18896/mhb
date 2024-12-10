import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">MHB Pvt. Ltd.</h3>
            <p className="text-gray-400">
              Transforming spaces and solutions for a better tomorrow.
            </p>
            <div className="flex space-x-4 mt-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-400" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-400" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-400" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-400 cursor-pointer">Building Automation</li>
              <li className="hover:text-blue-400 cursor-pointer">Software Solutions</li>
              <li className="hover:text-blue-400 cursor-pointer">Building Architecture</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-400 cursor-pointer">About Us</li>
              <li className="hover:text-blue-400 cursor-pointer">Projects</li>
              <li className="hover:text-blue-400 cursor-pointer">Careers</li>
              <li className="hover:text-blue-400 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>123 Business Avenue, Tech City</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>contact@mhb.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} MHB Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;