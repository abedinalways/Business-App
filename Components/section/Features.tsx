'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Features() {
  const cards = [
    {
      icon: '/pic/Easy.svg',
      title: 'Easy Service Booking',
      desc: 'Streamlined booking process for clients with service catalogs and availability.',
    },
    {
      icon: '/pic/Real.svg',
      title: 'Real-Time Tracking',
      desc: 'Monitor job progress, employee hours, and project timelines with live updates.',
    },
    {
      icon: '/pic/Performance.svg',
      title: 'Performance Analytics',
      desc: 'Comprehensive reporting and insights to improve business operations and efficiency.',
    },
    {
      icon: '/pic/Secure.svg',
      title: 'Secure & Reliable',
      desc: 'Enterprise-grade security with 99.9% uptime guarantee and data protection.',
    },
  ];

  // Motion variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start p-6 transition-transform"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Icon */}
            <div className="mb-4">
              <Image src={card.icon} alt={card.title} width={40} height={40} />
            </div>

            {/* Title */}
            <h3 className="text-[16px] font-bold text-[#212B36] mb-2">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-[14px] text-[#637381]">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
