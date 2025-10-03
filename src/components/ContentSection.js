import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Innovación Constante',
    description: 'Impulsamos la investigación de vanguardia para descubrir nuevas soluciones en salud oral y craneofacial.'
  },
  {
    icon: Shield,
    title: 'Estándares de Excelencia',
    description: 'Nos comprometemos con la más alta calidad en la investigación, garantizando resultados fiables y éticos.'
  },
  {
    icon: Users,
    title: 'Comunidad Global',
    description: 'Conectamos a investigadores de todo el mundo para fomentar la colaboración y el intercambio de conocimientos.'
  },
];

const ContentSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Nuestros Pilares
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-6">
                <feature.icon className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Únete a Nuestra Misión
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Descubre cómo puedes contribuir al avance de la salud oral global.
          </p>
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Más Información
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentSection;