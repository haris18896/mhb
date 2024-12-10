import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const services = [
  {
    title: 'Building Automation',
    description:
      'State-of-the-art building automation solutions exclusively in Pakistan.',
    availability: 'Pakistan Only',
    icon: '🏢',
  },
  {
    title: 'Software Solutions',
    description:
      'Custom software development and digital transformation services worldwide.',
    availability: 'Global',
    icon: '💻',
  },
  {
    title: 'Architecture',
    description:
      'Innovative architectural design and planning services available globally.',
    availability: 'Global',
    icon: '🏗️',
  },
];

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-padding">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={inView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.6}}
          className="text-center mb-16">
          <h2 className="heading-2 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of services designed to meet your
            needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{opacity: 0, y: 20}}
              animate={inView ? {opacity: 1, y: 0} : {}}
              transition={{duration: 0.6, delay: index * 0.2}}
              className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                {service.availability}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
