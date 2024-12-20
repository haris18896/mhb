'use client';
import React from 'react';
import {motion} from 'framer-motion';
import {Award, Users, Target, Clock} from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
  const stats = [
    {icon: Users, value: '500+', label: 'Clients Served'},
    {icon: Target, value: '95%', label: 'Client Satisfaction'},
    {icon: Clock, value: '15+', label: 'Years Experience'},
    {icon: Award, value: '200+', label: 'Projects Completed'},
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About MHB Pvt. Ltd.
              </h1>
              <p className="text-xl text-gray-600">
                Leading the way in building automation, software solutions, and
                architectural innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600">
                  To deliver innovative and sustainable solutions that transform
                  spaces and enhance lives through cutting-edge technology and
                  exceptional design.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{opacity: 0, x: 20}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-600">
                  To be the global leader in integrated building solutions,
                  setting new standards in automation, software development, and
                  architectural excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: index * 0.1}}>
                <div className="text-center text-white">
                  <stat.icon className="w-8 h-8 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Mehran Ahmad',
                role: 'CEO & Co-Founder',
                image: '/images/mehran_ahmad.jpg',
              },
              {
                name: 'Haris Ahmad',
                role: 'Director & Head of Development',
                image: '/images/haris_ahmad.jpg',
              },
              {
                name: 'Bilal Ahmad',
                role: 'Head of Architecture',
                image: '/images/bilal_ahmad.jpg',
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: index * 0.1}}>
                <div className="text-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
