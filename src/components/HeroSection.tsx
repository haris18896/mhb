import {motion} from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="container-padding relative z-10">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          className="max-w-3xl">
          <h1 className="heading-1 mb-6">
            Innovating the Future with
            <span className="text-primary"> MHB Pvt. Ltd.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Leading the way in Building Automation, Software Solutions, and
            Architecture with global expertise and local excellence.
          </p>
          <div className="flex gap-4">
            <button className="button-primary">Get Started</button>
            <button className="button-secondary">Learn More</button>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-100 to-white/50" />
    </section>
  );
}
