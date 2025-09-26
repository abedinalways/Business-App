'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  {
    question: 'Is the app free to use?',
    answer:
      'Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.',
  },
  {
    question: 'Can I assign multiple employees to one job?',
    answer:
      'Absolutely! You can assign multiple team members to a single job, making team management efficient and seamless.',
  },
  {
    question: 'Does it work on both mobile and desktop?',
    answer:
      'Yes! Our app is fully responsive and works smoothly on both mobile devices and desktop computers.',
  },
  {
    question: 'How secure is my data?',
    answer:
      'We use enterprise-grade encryption and follow strict security practices to keep your data safe and private.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 md:px-12 max-w-5xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#212B36]">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-[#637381] mt-4">
          Quick answers to help you get the most out of our app.
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              className="bg-white border rounded-2xl"
              style={{ borderColor: '#C7E6C5' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Question */}
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-[#212B36] text-lg focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {isOpen ? (
                  <FiMinus className="text-[#212B36]" size={22} />
                ) : (
                  <FiPlus className="text-[#212B36]" size={22} />
                )}
              </button>

              {/* Answer */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  isOpen
                    ? { height: 'auto', opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden px-6"
              >
                <p className="pb-4 text-sm text-[#637381]">{faq.answer}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
