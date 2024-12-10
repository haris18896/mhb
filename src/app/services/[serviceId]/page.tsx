'use client';
import React, {use} from 'react';
import {motion} from 'framer-motion';
import {notFound} from 'next/navigation';
import {Building2, Code, HomeIcon, CheckCircle, ArrowRight} from 'lucide-react';

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
  'software-solutions': {
    icon: Code,
    title: 'Software Solutions',
    description:
      'Custom software solutions that drive digital transformation and business growth.',
    image:
      'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Custom Software Development',
      'Mobile App Development',
      'Cloud Solutions',
      'System Integration',
      'API Development',
      'Database Management',
    ],
    benefits: [
      'Increased Productivity',
      'Streamlined Operations',
      'Better Data Management',
      'Enhanced User Experience',
      'Scalable Solutions',
    ],
    projects: [
      {
        title: 'Enterprise Management System',
        description: 'Custom ERP solution for a manufacturing company.',
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
      },
      {
        title: 'Mobile Banking App',
        description: 'Secure and user-friendly banking application.',
        image:
          'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600',
      },
    ],
  },
  'building-architecture': {
    icon: HomeIcon,
    title: 'Building Architecture',
    description:
      'Innovative architectural designs that combine aesthetics with functionality.',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Architectural Design',
      'Interior Planning',
      'Sustainable Architecture',
      '3D Visualization',
      'Construction Planning',
      'Project Management',
    ],
    benefits: [
      'Innovative Design',
      'Sustainable Solutions',
      'Optimal Space Utilization',
      'Energy Efficiency',
      'Enhanced Aesthetics',
    ],
    projects: [
      {
        title: 'Eco-Friendly Office Complex',
        description: 'Sustainable office building with modern amenities.',
        image:
          'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600',
      },
      {
        title: 'Luxury Residential Tower',
        description: 'High-rise residential building with smart features.',
        image:
          'https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?auto=format&fit=crop&q=80&w=600',
      },
    ],
  },
};

const ServiceDetailPage = ({params}: {params: {serviceId: string}}) => {
  const {serviceId} = use(params);
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

            <motion.div
              initial={{opacity: 0, x: 20}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}>
              <h2 className="text-3xl font-bold mb-8">Benefits</h2>
              <div className="space-y-4">
                {service.benefits.map(benefit => (
                  <div key={benefit} className="flex items-start">
                    <ArrowRight className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {service.projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: index * 0.2}}
                className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
