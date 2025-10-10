import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section
      className="relative bg-cover bg-center h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center text-white"
      // style={{ backgroundImage: "url('https://www.iadr.org/sites/default/files/styles/hero_image/public/2023-09/iStock-1365000000.jpg?itok=12345')" }}
      style={{ backgroundImage: "url('images/wallpaper-02.jpg')" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Avanzando la Investigación Oral y Craneofacial
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          La Asociación Internacional para la Investigación Dental, una comunidad global dedicada a la investigación y el avance de la salud oral.
        </motion.p>
        <motion.button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-base sm:text-lg shadow-lg"
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