import {useInView} from 'react-intersection-observer';
import PortfolioCard from './PortfolioCard';
import {motion} from 'framer-motion';

const portfolioItems = [
  {
    title: 'Smart Office Complex',
    description:
      'Complete building automation solution for a modern office complex in Islamabad.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    category: 'Building Automation',
  },
  {
    title: 'Enterprise Resource Planning',
    description:
      'Custom ERP solution for a multinational manufacturing company.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    category: 'Software Solutions',
  },
  {
    title: 'Eco-Friendly Housing',
    description:
      'Sustainable residential project featuring modern architectural design.',
    imageUrl: 'https://images.unsplash.com/photo-1448630360428-65456885c650',
    category: 'Architecture',
  },
];

export default function PortfolioSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" ref={ref} className="section-padding bg-gray-50">
      <div className="container-padding">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={inView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.6}}
          className="text-center mb-16">
          <h2 className="heading-2 mb-4">Our Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our successful projects across Building Automation, Software
            Solutions, and Architecture
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
