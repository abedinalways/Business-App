'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Users',
    heading: 'Book services, track progress \nand stay updated',
    description:
      'Easily schedule appointments, get real-time updates, and enjoy a smooth, transparent service experience.',
    features: [
      { text: 'Book services in seconds', color: '#3BA334' },
      { text: 'Track real-time job updates', color: '#3BA33470' },
      { text: 'Schedule appointments at your convenience', color: '#3BA33440' },
    ],
    image: 'https://i.ibb.co/ks0bMM2c/Build-1.png',
  },
  {
    title: 'Business Owners',
    heading: 'Assign jobs, monitor performance, and streamline operations',
    description:
      'Gain full control of your workforce with real-time tracking, smart scheduling, and service management in one app.',
    features: [
      { text: 'Assign jobs to the right team member', color: '#3BA334' },
      { text: 'Monitor performance in real time', color: '#3BA33470' },
      { text: 'Manage clients and services seamlessly', color: '#3BA33440' },
    ],
    image: 'https://i.ibb.co/whKm7gLb/Group-15349.png',
  },
  {
    title: 'Employees',
    heading: 'See tasks, track time, and navigate routes with ease',
    description:
      'Everything you need to manage your workday from job assignments to optimized routes and time logging.',
    features: [
      { text: 'Assign jobs to the right team member', color: '#3BA334' },
      { text: 'Monitor performance in real time', color: '#3BA33470' },
      { text: 'Manage clients and services seamlessly', color: '#3BA33440' },
    ],
    image: 'https://i.ibb.co/67wNx13D/Rectangle-161124259.png',
  },
];

export default function Build() {
  return (
    <section className="px-4 md:px-12 py-16 relative">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#212B36] pb-2 build-for-everyone">
          Build for Everyone
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-4">
          Whether you&apos;re booking services, managing tasks, or running
          operations,
          <br /> we&apos;ve designed the perfect experience for you.
        </p>
      </div>

      {/* User Arrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Image
          src={'https://i.ibb.co/tppfCwTb/arrow-user-dfklm1.png'}
          width={221}
          height={124}
          alt="User Arrow"
          className="absolute left-30 top-45 hidden lg:block"
        />
      </motion.div>

      {/* Employee Arrows */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        viewport={{ once: true }}
      >
        <Image
          src={'https://i.ibb.co/608PvSdb/arrow-busineess-otzzat.png'}
          width={341.54}
          height={1253.11}
          alt="Employee Arrow"
          className="absolute left-70 top-34 z-50 hidden lg:block"
        />
      </motion.div>

      {/* Business Owner Arrows */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        viewport={{ once: true }}
      >
        <Image
          src={'https://i.ibb.co/21c6nPVG/arrow-employee-g454cn.png'}
          width={308.35}
          height={732.28}
          alt="Employee Arrow"
          className="absolute right-0 top-40 z-50 hidden lg:block"
        />
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col gap-20 mt-20">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`flex flex-col-reverse md:flex-row items-center gap-12 md:gap-10 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {/* Text Content */}
            <div className="w-full md:w-1/2 flex flex-col">
              <p>
                <span className="text-green-600 border border-green-600 rounded-2xl font-semibold text-sm px-3 py-1">
                  {card.title}
                </span>
              </p>
              <h3 className="text-2xl font-bold text-[#212B36] mt-2 whitespace-pre-line">
                {card.heading}
              </h3>
              <p className="text-[18px] text-[#637381] mt-4">
                {card.description}
              </p>
              <div className="mt-10 space-y-4 gap-2 text-[18px]">
                {card.features.map((feature, idx) => (
                  <p
                    key={idx}
                    className="border-l-4 pl-3 font-medium"
                    style={{ borderColor: feature.color }}
                  >
                    {feature.text}
                  </p>
                ))}
              </div>
            </div>

            {/* Image Content */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <Image
                src={card.image}
                alt={card.title}
                width={610}
                height={516}
                className="w-full h-auto max-w-xs md:max-w-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
