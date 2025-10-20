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

const BannerToothDoomsday = () => {
  return (
    // <div className="relative bg-gradient-to-r from-blue-50 to-cyan-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div className="relative bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.3)_0%,_rgba(247,167,18,0)_70%)] bg-[#f7a712] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna de texto */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Muelas del Juicio{' '}
              <span className="text-blue-600WHITE">Extracción</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-white mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Consulte a un dentista para que le evalúe las muelas del juicio{' '}
              <span className="font-semibold text-white">
                antes de que se enfermen...
              </span>
            </motion.p>

            {/* Información de contacto */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p className="text-2xl font-bold text-white mb-2">
                Llame al número de teléfono de nuestro consultorio dental en Thiara Arte Dental
              </p>
              <a
                href="tel:0735434860"
                className="text-3xl font-bold text-white hover:text-blue-700 transition-colors duration-300"
              >
                (+591) 71993433
              </a>
            </motion.div>

            {/* Botón CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="absolute -top-4 left-44 w-24 h-24 bg-amber-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-600 rounded-full opacity-20"></div>
            </motion.div>
          </motion.div>

          {/* Columna de imagen/ilustración */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-80 lg:h-96 flex items-center justify-center">
              {/* Placeholder para imagen dental - puedes reemplazar con tu PNG */}
              <img
                src="images/smile-05.png"
                alt="Decoración"
                className="absolute top-0 right-0 h-full w-auto "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BannerToothDoomsday;