import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-400 py-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1: Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <img className="h-8 w-auto mb-4 filter invert brightness-0" src="https://www.iadr.org/themes/custom/iadr/logo.svg" alt="Logo" />
            <p className="text-sm leading-relaxed">
              La Asociación Internacional para la Investigación Dental (IADR) es una organización sin fines de lucro dedicada a avanzar la investigación y mejorar la salud oral en todo el mundo.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">Acerca de Nosotros</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">Membresía</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">Eventos</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">Publicaciones</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li>1619 Duke Street, Alexandria, VA 22314-3406, USA</li>
              <li>Tel: +1.703.548.0066</li>
              <li>Fax: +1.703.548.1883</li>
              <li><a href="mailto:info@iadr.org" className="hover:text-blue-500 transition-colors duration-200">info@iadr.org</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} IADR. Todos los derechos reservados.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;