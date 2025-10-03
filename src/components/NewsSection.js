import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Search, ArrowLeft, ArrowRight } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: "Descubrimiento Revolucionario en Regeneración Dental",
    date: "15 de Marzo, 2024",
    summary: "Científicos de la IADR anuncian un avance significativo en la capacidad de regenerar tejido dental dañado.",
    link: "#",
    image: "https://www.iadr.org/sites/default/files/styles/hero_image/public/2023-09/iStock-1365000000.jpg?itok=12345", // Placeholder image
  },
  {
    id: 2,
    title: "Conferencia Anual IADR 2024: Un Éxito Rotundo",
    date: "10 de Marzo, 2024",
    summary: "Miles de investigadores se reunieron para compartir los últimos hallazgos y colaborar en futuros proyectos.",
    link: "#",
    image: "https://www.iadr.org/sites/default/files/styles/hero_image/public/2023-09/iStock-1365000000.jpg?itok=12345", // Placeholder image
  },
  {
    id: 3,
    title: "Nuevas Directrices para la Investigación en Salud Oral",
    date: "5 de Marzo, 2024",
    summary: "La IADR publica un conjunto de directrices actualizadas para asegurar la ética y la calidad en la investigación.",
    link: "#",
    image: "https://www.iadr.org/sites/default/files/styles/hero_image/public/2023-09/iStock-1365000000.jpg?itok=12345", // Placeholder image
  },
  {
    id: 4,
    title: "Avances en la Prevención de Caries en Niños",
    date: "28 de Febrero, 2024",
    summary: "Un estudio reciente de la IADR muestra prometedores resultados en nuevas estrategias para combatir la caries infantil.",
    link: "#",
    image: "https://www.iadr.org/sites/default/files/styles/hero_image/public/2023-09/iStock-1365000000.jpg?itok=12345", // Placeholder image
  },
  {
    id: 5,
    title: "Impacto de la Dieta en la Salud Periodontal",
    date: "20 de Febrero, 2024",
    summary: "Investigación de la IADR revela la fuerte conexión entre los hábitos alimenticios y la salud de las encías.",
    link: "#",
    image: "https://www.iadr.org/sites/default/files/styles/hero_image/public/2023-09/iStock-1365000000.jpg?itok=12345", // Placeholder image
  },
  {
    id: 6,
    title: "Innovación en Materiales Dentales",
    date: "18 de Febrero, 2024",
    summary: "Nuevos materiales prometen mayor durabilidad y estética en restauraciones dentales.",
    link: "#",
    image: "https://www.iadr.org/sites/default/files/styles/hero_image/public/2023-09/iStock-1365000000.jpg?itok=12345", // Placeholder image
  },
  {
    id: 7,
    title: "La Genética y la Enfermedad Periodontal",
    date: "10 de Febrero, 2024",
    summary: "Estudios recientes exploran la influencia genética en la susceptibilidad a enfermedades de las encías.",
    link: "#",
    image: "https://www.iadr.org/sites/default/files/styles/hero_image/public/2023-09/iStock-1365000000.jpg?itok=12345", // Placeholder image
  },
  {
    id: 8,
    title: "Avances en Diagnóstico Temprano de Cáncer Oral",
    date: "3 de Febrero, 2024",
    summary: "Nuevas técnicas de imagen y biomarcadores mejoran la detección precoz del cáncer oral.",
    link: "#",
    image: "https://www.iadr.org/sites/default/files/styles/hero_image/public/2023-09/iStock-1365000000.jpg?itok=12345", // Placeholder image
  },
];

const ARTICLES_PER_PAGE = 3;

const NewsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredAndSortedNews = newsArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.summary.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date, newest first

  const totalPages = Math.ceil(filteredAndSortedNews.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const currentArticles = filteredAndSortedNews.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
          Últimas Noticias
        </motion.h2>

        <motion.div
          className="relative mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <input
            type="text"
            placeholder="Buscar noticias..."
            className="w-full px-5 py-3 pl-12 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentArticles.length > 0 ? (
            currentArticles.map((article, index) => (
              <motion.div
                key={article.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-sm text-gray-500 mb-4 flex items-center">
                    <Bell className="w-4 h-4 mr-2" /> {article.date}
                  </p>
                  <p className="text-gray-700 mb-4">{article.summary}</p>
                  <a href={article.link} className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                    Leer más &rarr;
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.p
              className="md:col-span-3 text-center text-gray-600 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No se encontraron noticias que coincidan con tu búsqueda.
            </motion.p>
          )}
        </div>

        {totalPages > 1 && (
          <motion.div
            className="flex justify-center items-center space-x-2 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            {[...Array(totalPages)].map((_, i) => (
              <motion.button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  currentPage === i + 1
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {i + 1}
              </motion.button>
            ))}
            <motion.button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-colors duration-300"
          >
            Ver Todas las Noticias
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;