import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div>
            <h5 className="font-semibold text-lg mb-4 text-white">Company Info</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:underline">About Venda Shop</a></li>
              <li><a href="/" className="hover:underline">Affiliate Program</a></li>
              <li><a href="/" className="hover:underline">Careers</a></li>
              <li><a href="/" className="hover:underline">Press</a></li>
              <li><a href="/" className="hover:underline">Sustainability</a></li>
              <li><a href="/" className="hover:underline">Get the Cheapest Prices in Kenya on any Product</a></li>

            </ul>
          </div>

          {/* Column 2: Customer Service */}
          <div>
            <h5 className="font-semibold text-lg mb-4 text-white">Customer Service</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:underline">Return and Refund Policy</a></li>
              <li><a href="/" className="hover:underline">Shipping Info</a></li>
              <li><a href="/" className="hover:underline">Report Suspicious Activity</a></li>
            </ul>
          </div>

          {/* Column 3: Help */}
          <div>
            <h5 className="font-semibold text-lg mb-4 text-white">Help</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:underline">Support Center</a></li>
              <li><a href="/" className="hover:underline">Safety Center</a></li>
              <li><a href="/" className="hover:underline">Sell on Venda</a></li>
            </ul>
          </div>

          {/* Column 4: Download App */}
          <div>
            <h5 className="font-semibold text-lg mb-4 text-white">Download the Venda App</h5>
            <p className="text-sm mb-4">
              Get price-drop alerts, track orders, and more!
            </p>
            <div className="flex">
              <img
                src="/playstore.png"
                alt="Download on the Play Store"
                className="h-10 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-center text-sm">
          {/* Social Media */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a href="/" className="hover:text-white transition-colors duration-200">
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="/" className="hover:text-white transition-colors duration-200">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="/" className="hover:text-white transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="sr-only">X</span>
            </a>
            <a href="/" className="hover:text-white transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 448 512"
                fill="currentColor"
              >
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
              </svg>
              <span className="sr-only">TikTok</span>
            </a>
          </div>

          {/* Payment & Security Certifications */}
          <div className="flex flex-wrap space-x-4 items-center">
            {/* Security Logos */}
            <img src="/security2.jpg" alt="Security 2" className="h-6 rounded-full" />
            <img src="/security3.jpg" alt="Security 3" className="h-6 rounded-full" />
            
            {/* Payment Logos */}
            <img src="/mpesa.png" alt="MPesa" className="h-8 rounded-lg" />
            <img src="/paypal.png" alt="PayPal" className="h-8 rounded-lg" />
            <img src="/visa.png" alt="VISA" className="h-8 rounded-lg" />
            <img src="/mastercard.png" alt="Mastercard" className="h-8 rounded-lg" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;