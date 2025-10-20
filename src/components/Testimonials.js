import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Filter, ThumbsUp, ThumbsDown } from 'lucide-react';

const initialTestimonialsData = [
  {
    quote: "La IADR ha transformado mi carrera. Sus publicaciones y eventos son invaluables para cualquier investigador dental.",
    author: "Dr. Elena Rodríguez",
    title: "Investigadora Senior",
    rating: 5,
    category: "Investigación",
    likes: 15,
    dislikes: 2,
  },
  {
    quote: "La comunidad global de la IADR es increíblemente colaborativa. He hecho conexiones que han impulsado mis proyectos.",
    author: "Prof. Kenji Tanaka",
    title: "Catedrático de Odontología",
    rating: 5,
    category: "Comunidad",
    likes: 20,
    dislikes: 1,
  },
  {
    quote: "Gracias a los programas de becas de la IADR, pude financiar mi investigación y presentar mis hallazgos a una audiencia internacional.",
    author: "Dra. Sarah Chen",
    title: "Investigadora Postdoctoral",
    rating: 4,
    category: "Becas",
    likes: 10,
    dislikes: 0,
  },
  {
    quote: "Los recursos educativos de la IADR son de primera clase. Aprendí muchísimo y mejoré mis habilidades.",
    author: "Dr. Juan Pérez",
    title: "Odontólogo General",
    rating: 4,
    category: "Educación",
    likes: 8,
    dislikes: 3,
  },
  {
    quote: "Participar en los congresos de la IADR es una experiencia única. Siempre vuelvo con nuevas ideas y motivación.",
    author: "Dra. María García",
    title: "Especialista en Periodoncia",
    rating: 5,
    category: "Eventos",
    likes: 25,
    dislikes: 0,
  },
];

const Testimonials = () => {
  const [filterCategory, setFilterCategory] = useState('Todos');
  const [testimonials, setTestimonials] = useState(initialTestimonialsData);

  const categories = ['Todos', ...new Set(initialTestimonialsData.map(t => t.category))];

  const filteredTestimonials = filterCategory === 'Todos'
    ? testimonials
    : testimonials.filter(t => t.category === filterCategory);

  const handleVote = (id, type) => {
    setTestimonials(prevTestimonials =>
      previmonials.map(t => {
        if (t.id === id) {
          if (type === 'like') {
            return { ...t, likes: t.likes + 1 };
          } else if (type === 'dislike') {
            return { ...t, dislikes: t.dislikes + 1 };
          }
        }
        return t;
      })
    );
  };

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Lo que Dicen Nuestros Miembros
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-gray-700 font-medium flex items-center mr-2">
            <Filter className="w-5 h-5 mr-1" /> Filtrar por:
          </span>
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setFilterCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filterCategory === category
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-blue-100'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredTestimonials.length > 0 ? (
            filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id || index} // Use id if available, fallback to index
                className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-between"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600 mb-4">{testimonial.title}</p>
                  <div className="flex items-center justify-end space-x-4">
                    <motion.button
                      onClick={() => handleVote(testimonial.id || index, 'like')}
                      className="flex items-center text-gray-600 hover:text-green-600 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ThumbsUp className="w-5 h-5 mr-1" /> {testimonial.likes}
                    </motion.button>
                    <motion.button
                      onClick={() => handleVote(testimonial.id || index, 'dislike')}
                      className="flex items-center text-gray-600 hover:text-red-600 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ThumbsDown className="w-5 h-5 mr-1" /> {testimonial.dislikes}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.p
              className="md:col-span-3 text-center text-gray-600 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No hay testimonios para esta categoría.
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
