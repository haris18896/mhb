'use client';
import React from 'react';
import {motion} from 'framer-motion';
import {Building2, Code, HomeIcon, ArrowRight} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Building2,
    title: 'Building Automation',
    description:
      'Comprehensive smart building solutions that enhance efficiency, comfort, and security through advanced automation systems.',
    features: [
      'HVAC Control',
      'Lighting Automation',
      'Security Systems',
      'Energy Management',
    ],
    path: '/services/building-automation',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
  },
  {
    icon: Code,
    title: 'Software Solutions',
    description:
      'Custom software development services that streamline operations and drive digital transformation for businesses.',
    features: [
      'Custom Development',
      'Mobile Apps',
      'Cloud Solutions',
      'System Integration',
    ],
    path: '/services/software-solutions',
    image:
      'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=1200',
  },
  {
    icon: HomeIcon,
    title: 'Building Architecture',
    description:
      'Innovative architectural designs that blend aesthetics with functionality for modern spaces.',
    features: [
      'Design Planning',
      'Interior Design',
      'Sustainable Architecture',
      '3D Visualization',
    ],
    path: '/services/building-architecture',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1200',
  },
];

const ServicesPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive solutions tailored to meet your needs in automation,
              software, and architecture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: index * 0.2}}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}>
                <div className="flex-1">
                  <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map(feature => (
                      <li
                        key={feature}
                        className="flex items-center text-gray-700">
                        <ArrowRight className="w-5 h-5 text-blue-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.path}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
                <div className="flex-1">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
