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

const AboutUs = () => {
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
          Sobre Nosotros
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="p-2 text-center bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: "url('images/umsa-01.png')",
              backgroundSize: "200px 300px",
              backgroundBlendMode: "overlay",
              backgroundPosition: 'center',
              backgroundColor: "rgba(255, 255, 255, 0.8)"
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 1 * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Thiara Arte Dental</h3>
            <p className="text-gray-600 text-justify">La <strong>Dra. Cinthia Clara Sacaca Carrasco</strong> llegó a la odontología por una razón fundamental: su genuino interés por las personas. Graduada de la <strong>Universidad Mayor de San Andrés</strong> en 2017, complementó su formación en el consultorio <strong>Miradent</strong> bajo la tutela del experimentado <strong>Dr. Roberto Landivar.</strong></p>
            <p className="text-gray-600 text-justify">Lo que nuestros pacientes más valoran de la <strong>Dra. Cinthia</strong> es su excepcional paciencia. En un mundo donde el tiempo es escaso, ella dedica todo el necesario para escuchar, explicar y asegurar que cada tratamiento se realice con total <strong>confianza y comodidad.</strong></p>
            <p className="text-gray-600 text-justify">Heredera de un consultorio que abrió sus puertas el <strong>10 de enero de 2024</strong>, la <strong>Dra. Cinthia</strong> mantiene viva la esencia de la odontología de siempre: <strong>trato personalizado, calidad profesional y calidez humana.</strong></p>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-[#74c4d0] via-[#62c1d0] to-[#5bc8d4] shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 1 * 0.2 }}
          >
            <img
              src="images/smile-05.png"
              alt="Decoración"
              className="absolute top-0 right-0 h-full w-auto "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;