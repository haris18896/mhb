'use client';

import React from 'react';
import {ArrowRight} from 'lucide-react';
import {motion} from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-16 lg:py-24 gap-12">
          <motion.div
            className="flex-1 max-w-xl"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {`Building Tomorrow's`}
              <span className="text-blue-600 block">Innovations Today</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              MHB Pvt. Ltd. specializes in building automation, software
              solutions, and architectural excellence. We transform your vision
              into reality with cutting-edge technology and innovative design.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Contact Us
              </button>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 w-full max-w-xl lg:max-w-2xl"
            initial={{opacity: 0, x: 20}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8, delay: 0.2}}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                alt="Modern building architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
