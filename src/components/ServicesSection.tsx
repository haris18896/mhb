'use client';

import React from 'react';
import {Building2, Code, HomeIcon} from 'lucide-react';
import {motion} from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    icon: Building2,
    title: 'Building Automation',
    description:
      'Smart building solutions that enhance efficiency, comfort, and security.',
    path: '/services/building-automation',
  },
  {
    icon: Code,
    title: 'Software Solutions',
    description:
      'Custom software development to streamline your business operations.',
    path: '/services/software-solutions',
  },
  {
    icon: HomeIcon,
    title: 'Building Architecture',
    description:
      'Innovative architectural designs that blend form and function.',
    path: '/services/building-architecture',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your needs in automation,
            software, and architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: index * 0.1}}>
              <Link href={service.path} className="block">
                <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
