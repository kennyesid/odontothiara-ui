import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Bell } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // 'success', 'error', 'sending'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
      console.log('Form data submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Contáctanos
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              <User className="inline-block w-4 h-4 mr-2 text-blue-600" />
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              <Mail className="inline-block w-4 h-4 mr-2 text-blue-600" />
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="tu.email@ejemplo.com"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
              <Bell className="inline-block w-4 h-4 mr-2 text-blue-600" />
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Motivo de tu mensaje"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Escribe tu mensaje aquí..."
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg w-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
          </motion.button>

          {status === 'success' && (
            <motion.p
              className="text-green-600 text-center mt-4 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ¡Mensaje enviado con éxito! Te responderemos pronto.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              className="text-red-600 text-center mt-4 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;