import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const images = [
  'https://www.iadr.org/sites/default/files/styles/hero_image/public/2023-09/iStock-1365000000.jpg?itok=12345',
  'https://www.iadr.org/sites/default/files/styles/hero_image/public/2023-09/iStock-1365000000.jpg?itok=12345', // Replace with actual image URLs
  'https://www.iadr.org/sites/default/files/styles/hero_image/public/2023-09/iStock-1365000000.jpg?itok=12345',
  'https://www.iadr.org/sites/default/files/styles/hero_image/public/2023-09/iStock-1365000000.jpg?itok=12345',
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Nuestra Galería
        </motion.h2>

        <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-96 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          <motion.button
            onClick={prevImage}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={nextImage}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowRight className="w-6 h-6" />
          </motion.button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-gray-400'
                } transition-colors duration-300`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;