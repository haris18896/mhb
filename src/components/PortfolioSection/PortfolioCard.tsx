import {motion} from 'framer-motion';
import Image from 'next/image';

interface PortfolioCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  index: number;
}

export default function PortfolioCard({
  title,
  description,
  imageUrl,
  category,
  index,
}: PortfolioCardProps) {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.6, delay: index * 0.2}}
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg">
      <div className="relative h-64 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
          {category}
        </span>
        <h3 className="mt-4 text-xl font-bold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}
