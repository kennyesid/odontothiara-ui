import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section
      className="relative bg-cover bg-center h-screen w-full flex items-center justify-center text-white"
      // className="relative bg-cover bg-center h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center text-white"
      // style={{ backgroundImage: "url('https://www.iadr.org/sites/default/files/styles/hero_image/public/2023-09/iStock-1365000000.jpg?itok=12345')" }}
      style={{ backgroundImage: "url('images/wallpaper-02.jpg')" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 drop-shadow-[0_0_2px_black]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Tu sonrisa, nuestra pasión
        </motion.h1>
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 drop-shadow-[0_0_2px_black]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Tu salud, nuestro compromiso
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-3xl mb-8 max-w-3xl mx-auto text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Descubre nuestra diferencia
          {/* Con más de 8 años sonriendo contigo, somos expertos en crear sonrisas que transforman vidas, tratándote siempre como familia */}
        </motion.p>
        <motion.button
          className="bg-[#1d9198] hover:bg-[#5bd3db] text-white font-bold py-3 px-6 sm:py-4 sm:px-8 text-base sm:text-lg shadow-lg"
          // style={{ background: '#1d9198' }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Descubre Más
        </motion.button>
      </div>
    </motion.section>
  );
};

export default HeroSection;