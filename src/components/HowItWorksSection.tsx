'use client';

import React from 'react';
import {ClipboardCheck, MessageSquare, Settings, Zap} from 'lucide-react';
import {motion} from 'framer-motion';

const steps = [
  {
    icon: MessageSquare,
    title: 'Initial Consultation',
    description:
      'We discuss your needs and objectives to understand your vision.',
  },
  {
    icon: ClipboardCheck,
    title: 'Planning & Design',
    description:
      'Our team creates a detailed plan and design tailored to your requirements.',
  },
  {
    icon: Settings,
    title: 'Implementation',
    description: 'We execute the plan with precision and attention to detail.',
  },
  {
    icon: Zap,
    title: 'Deployment & Support',
    description: 'Launch your solution with ongoing support and maintenance.',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures efficient delivery of your project
            from concept to completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: index * 0.1}}
              className="relative">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <step.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-blue-600"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
