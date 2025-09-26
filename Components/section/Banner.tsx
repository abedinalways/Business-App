'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Banner() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-5">
      {/* Left Content */}
      <motion.div
        className="relative w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Flare effect with animation */}
        <motion.div
          className="absolute inset-0 top-10 -left-130 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <div className="absolute w-[600px] h-[600px] bg-[#9DFF99]/40 blur-[90px] rounded-full hidden lg:block"></div>
        </motion.div>

        <div className="background">
          <h1 className="text-3xl sm:text-4xl md:text-[80px] font-bold text-[#212B36] pt-12 pb-4">
            All Your Jobs One Smart App
          </h1>
        </div>
        <p className="mt-4 text-sm sm:text-base md:text-base text-[#637381] w-full md:w-3/4">
          Built for business owners, employees, and clients streamline job
          scheduling, service tracking, and team management in one powerful app.
        </p>
        <div className="flex gap-5 mt-10 md:mt-14">
          <Image
            src="https://i.ibb.co/Q70qTW7t/Pstore.png"
            alt="App Store"
            width={150}
            height={50}
          />
          <Image
            src="https://i.ibb.co/cKKMFqQd/Istore.png"
            alt="Play Store"
            width={150}
            height={50}
          />
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="relative w-full md:w-1/2 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="https://i.ibb.co/dJDSjXN4/Banner-Pic.png"
          alt="Banner"
          width={720}
          height={665}
          className="w-full h-auto max-w-md md:max-w-full"
        />
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-white to-transparent z-20"></div>
      </motion.div>
    </section>
  );
}
