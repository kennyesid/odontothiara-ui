import React from 'react';
import { motion } from 'framer-motion';

const LocationMap = () => {
  // Estilos personalizados para el mapa (ejemplo de un estilo "oscuro" o "claro" simplificado)
  // En un entorno real, usarías un generador de estilos de Google Maps o una librería.
  const mapStyles = [
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        { "color": "#e9e9e9" },
        { "lightness": 17 }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
        { "color": "#f5f5f5" },
        { "lightness": 20 }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        { "color": "#ffffff" },
        { "lightness": 17 }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        { "color": "#ffffff" },
        { "lightness": 29 },
        { "weight": 0.2 }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        { "color": "#ffffff" },
        { "lightness": 18 }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
        { "color": "#ffffff" },
        { "lightness": 16 }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        { "color": "#f5f5f5" },
        { "lightness": 21 }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        { "color": "#dedede" },
        { "lightness": 21 }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        { "visibility": "on" },
        { "color": "#ffffff" },
        { "lightness": 16 }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        { "saturation": 36 },
        { "color": "#333333" },
        { "lightness": 40 }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        { "visibility": "off" }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        { "color": "#f2f2f2" },
        { "lightness": 19 }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
        { "color": "#fefefe" },
        { "lightness": 20 }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        { "color": "#fefefe" },
        { "lightness": 17 },
        { "weight": 1.2 }
      ]
    }
  ];

  // Para aplicar estilos a un iframe de Google Maps, necesitas añadir el parámetro 'style' a la URL.
  // Esto es un ejemplo simplificado y puede que no funcione con todos los estilos o requiera una API Key.
  // La forma más robusta sería usar una librería de React para Google Maps (ej. @react-google-maps/api)
  // y pasarle los estilos como un prop 'options'.
<<<<<<< HEAD

  const LATITUDE = -16.4917154; // Ejemplo: Coordenada de La Paz, Bolivia
  const LONGITUDE = -68.153224;
  const ZOOM = 15; // Nivel de zoom del mapa
  // const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.0000000000005!2d-77.043692!3d38.804836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b123456789ab%3A0x123456789abcdef0!2s1619%20Duke%20St%2C%20Alexandria%2C%20VA%2022314%2C%20USA!5e0!3m2!1sen!2ses!4v1678901234567!5m2!1sen!2ses&key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places&callback=initMap&v=weekly&language=en&region=US&maptype=roadmap&sensor=false&output=embed&${encodeURIComponent(JSON.stringify(mapStyles))}`;
  const mapUrl = `https://maps.google.com/maps?q=${LATITUDE},${LONGITUDE}&z=${ZOOM}&ie=UTF8&iwloc=&output=embed`;
=======
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.0000000000005!2d-77.043692!3d38.804836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b123456789ab%3A0x123456789abcdef0!2s1619%20Duke%20St%2C%20Alexandria%2C%20VA%2022314%2C%20USA!5e0!3m2!1sen!2ses!4v1678901234567!5m2!1sen!2ses&key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places&callback=initMap&v=weekly&language=en&region=US&maptype=roadmap&sensor=false&output=embed&${encodeURIComponent(JSON.stringify(mapStyles))}`;

>>>>>>> c6913f9503b8ce6c235e3762a8e8a6ecbcdf6ea2

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Encuéntranos
        </motion.h2>

        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de la oficina"
          ></iframe>
        </motion.div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-gray-700 font-semibold">
            Dirección: 1619 Duke Street, Alexandria, VA 22314-3406, USA
          </p>
          <p className="text-md text-gray-600 mt-2">
            ¡Esperamos tu visita!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationMap;