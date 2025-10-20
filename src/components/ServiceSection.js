import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Extracción dental',
    image: 'images/extraction-01.jpg',
    description: 'La extracción dental puede ser necesaria en casos de dientes irrecuperables, fracturas radiculares, dientes impactados, apiñamiento y consideraciones ortodóncicas.'
  },
  {
    icon: Shield,
    title: 'Coronas Dentales',
    image: 'images/corona-01.jpg',
    description: 'Una corona dental es una restauración dental de cobertura completa. Protege la integridad de un diente con antecedentes de caries avanzada, endodoncia o fractura.'
  },
  {
    icon: Users,
    title: 'Carillas Dentales',
    image: 'images/carilla-01.webp',
    description: 'Con las carillas dentales, los dentistas pueden cambiar la forma, el color y la posición de los dientes. Las carillas pueden dar como resultado una sonrisa completamente nueva.'
  },
  {
    icon: Users,
    title: 'Muelas del juicio',
    image: 'images/muela-juicio-01.jpg',
    description: 'Una muela del juicio impactada no erupciona completamente debajo de la encía. Puede ejercer presión sobre el diente contiguo y causar dolor.'
  },
  {
    icon: Users,
    title: 'Blanqueamiento dental',
    image: 'images/blancamiento-01.jpg',
    description: 'El blanqueamiento dental es realizado por un dentista profesional. El blanqueamiento puede durar aproximadamente una hora y es muy efectivo en muchos casos.'
  },
  {
    icon: Users,
    title: 'Tratamiento de Conducto',
    image: 'images/conducto-01.webp',
    description: 'El tratamiento de conducto es un intento de reparar un diente gravemente dañado. Puede curar la inflamación alrededor de las raíces. Salva tu diente natural.'
  },
];

const ServiceSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Nuestros Servicios
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative shadow-xl overflow-hidden min-h-80 group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Contenedor de imagen con zoom */}
              <div className="relative w-full h-full">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-120"
                  style={{ backgroundImage: `url('${feature.image}')` }}
                ></div>
              </div>

              {/* Overlay gradiente en hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Título normal (parte inferior) */}
              <div className="absolute bottom-3 left-3 right-3 z-10 transition-all duration-500 group-hover:opacity-0">
                <div className="flex items-center justify-center">
                  <h3 className="text-base font-semibold text-white text-center drop-shadow-lg bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    {feature.title}
                  </h3>
                </div>
              </div>

              {/* Contenido hover (centrado) */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 z-10 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-500">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-7 h-7 text-white mr-2 drop-shadow-lg" />
                  <h3 className="text-xl font-bold text-white drop-shadow-lg">{feature.title}</h3>
                </div>

                <p className="text-white/90 text-sm leading-relaxed text-center max-w-xs px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
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
        </motion.div> */}
      </div>
    </section>
  );
};

export default ServiceSection;