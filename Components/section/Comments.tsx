'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const comments = [
  {
    name: 'Farzana H.',
    role: 'Owner, CleanPro Services',
    image: '/pic/Ellipse 452 (1).png',
    text: 'This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.',
  },
  {
    name: 'Ahmed R.',
    role: 'Technician',
    image: '/pic/Ellipse 452 (2).png',
    text: 'I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.',
  },
  {
    name: 'Rafiq M.',
    role: 'Homeowner',
    image: '/pic/Ellipse 452.png',
    text: 'As a client, I love being able to see exactly when my service is on the way. No calls, no guessing — just clear updates.',
  },
];

export default function Comments() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#212B36]">
          What Our Users Are Saying
        </h1>
        <p className="text-sm sm:text-base text-[#637381] mt-4">
          Real stories from clients, employees, and business owners who use our
          app every day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {comments.map((comment, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* User Info */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={comment.image}
                  alt={comment.name}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h2 className="text-base font-semibold text-[#212B36]">
                  {comment.name}
                </h2>
                <p className="text-sm text-[#637381]">{comment.role}</p>
              </div>
            </div>

            {/* Comment Text */}
            <p className="text-sm sm:text-base text-[#637381] mt-4 flex-1">
              {comment.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
