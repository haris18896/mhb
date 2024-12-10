'use client';

import React from 'react';
import {Building, Factory, Building2, Home} from 'lucide-react';
import {motion} from 'framer-motion';

const idealClients = [
  {
    icon: Building,
    title: 'Commercial Buildings',
    description: 'Smart solutions for office complexes and commercial spaces',
  },
  {
    icon: Factory,
    title: 'Industrial Facilities',
    description: 'Automation systems for manufacturing and industrial plants',
  },
  {
    icon: Building2,
    title: 'Corporate Offices',
    description: 'Integrated technology solutions for modern workplaces',
  },
  {
    icon: Home,
    title: 'Residential Projects',
    description: 'Smart home solutions for luxury residential developments',
  },
];

const IdealForSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ideal For
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our solutions are perfect for various sectors and industries looking
            to embrace modern technology and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {idealClients.map((client, index) => (
            <motion.div
              key={client.title}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: index * 0.1}}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <client.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{client.title}</h3>
              <p className="text-gray-600">{client.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdealForSection;
