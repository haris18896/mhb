'use client';
import React from 'react';
import {motion} from 'framer-motion';
import {notFound} from 'next/navigation';
import {Building2, CheckCircle} from 'lucide-react';

const serviceDetails = {
  'building-automation': {
    icon: Building2,
    title: 'Building Automation',
    description:
      'Transform your building into an intelligent, efficient, and sustainable space with our cutting-edge automation solutions.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Smart HVAC Control Systems',
      'Automated Lighting Solutions',
      'Integrated Security Systems',
      'Energy Management',
      'Access Control',
      'Environmental Monitoring',
    ],
    benefits: [
      'Reduced Energy Costs',
      'Enhanced Comfort',
      'Improved Security',
      'Better Operational Efficiency',
      'Environmental Sustainability',
    ],
    projects: [
      {
        title: 'Tech Hub Automation',
        description:
          'Complete building automation for a 20-story tech company headquarters.',
        image:
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
      },
      {
        title: 'Smart Hotel System',
        description: 'Integrated automation system for a luxury hotel chain.',
        image:
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600',
      },
    ],
  },
  // Other services omitted for brevity
};

const ServiceDetailPage = async ({params}: {params: {serviceId: string}}) => {
  const {serviceId} = params;
  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center"
        style={{
          backgroundImage: `url(${service.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative text-white">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}>
            <service.icon className="w-16 h-16 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl max-w-2xl">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}>
              <h2 className="text-3xl font-bold mb-8">Key Features</h2>
              <div className="space-y-4">
                {service.features.map(feature => (
                  <div key={feature} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
