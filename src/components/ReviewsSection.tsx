'use client';

import React from 'react';
import {Star} from 'lucide-react';
import {motion} from 'framer-motion';

const reviews = [
  {
    name: 'John Smith',
    role: 'CEO, Tech Solutions Inc.',
    content:
      'MHB transformed our office space with their building automation solutions. The results exceeded our expectations.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
  },
  {
    name: 'Sarah Johnson',
    role: 'Director, Innovation Hub',
    content:
      'Their software solutions have streamlined our operations significantly. Excellent service and support throughout.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
  },
  {
    name: 'Michael Chen',
    role: 'Property Developer',
    content:
      'The architectural designs by MHB are both innovative and practical. They truly understand modern building needs.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Reviews
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say
            about working with MHB.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: index * 0.1}}
              className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-gray-600 text-sm">{review.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600">{review.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
