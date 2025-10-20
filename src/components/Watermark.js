
import React from 'react';
const Watermark = () => (
  <div className="fixed bottom-4 right-4 z-50">
  <a href="https://www.nerd.lat" target="_blank" rel="noopener noreferrer">
    <div className="flex items-center gap-1 bg-black text-white rounded-[5px] px-3 py-2 text-sm font-medium shadow-lg opacity-70 pointer-events-none select-none">
        <span>Hecho con</span>
        <img src="https://www.nerd.lat/lentes.svg" alt="Logo" className="h-4" />
        <span className="font-bold">nerd.lat</span>
        </div>
    </a>
  </div>
);
export default Watermark;

            