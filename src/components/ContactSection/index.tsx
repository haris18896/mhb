'use client';
// import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import ContactForm from './ContactForm';

export default function ContactSection() {
  // const [ref, inView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });

  return (
    <section
      // ref={ref}
      id="contact"
      className="section-padding">
      <div className="container-padding">
        <motion.div
          initial={{opacity: 0, y: 20}}
          // animate={inView ? {opacity: 1, y: 0} : {}}
          animate={{}}
          transition={{duration: 0.6}}
          className="text-center mb-16">
          <h2 className="heading-2 mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a
            message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{opacity: 0, x: -20}}
            // animate={inView ? {opacity: 1, x: 0} : {}}
            animate={{}}
            transition={{duration: 0.6, delay: 0.2}}>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Address:</strong>
                <br />
                Islamabad, Pakistan
              </p>
              <p>
                <strong>Email:</strong>
                <br />
                info@mhb.com
              </p>
              <p>
                <strong>Phone:</strong>
                <br />
                +92 XXX XXXXXXX
              </p>
              <p>
                <strong>Working Hours:</strong>
                <br />
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{opacity: 0, x: 20}}
            // animate={inView ? {opacity: 1, x: 0} : {}}
            animate={{}}
            transition={{duration: 0.6, delay: 0.4}}
            className="bg-white p-6 rounded-lg shadow-lg">
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
