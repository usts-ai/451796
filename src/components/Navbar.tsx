import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.div 
              className="flex-shrink-0 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="text-white font-bold text-xl">EntrepreneurConnect</Link>
            </motion.div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/" className="text-white hover:text-indigo-100 px-3 py-2 rounded-md text-sm font-medium">Accueil</Link>
              <Link to="/formations" className="text-white hover:text-indigo-100 px-3 py-2 rounded-md text-sm font-medium">Formations</Link>
              <Link to="/" className="text-white hover:text-indigo-100 px-3 py-2 rounded-md text-sm font-medium">Ressources</Link>
              <Link to="/" className="text-white hover:text-indigo-100 px-3 py-2 rounded-md text-sm font-medium">Communauté</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-4 py-2 rounded-md text-sm font-medium shadow-md hover:bg-indigo-50"
            >
              Connexion
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-md hover:bg-indigo-400"
            >
              Inscription
            </motion.button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-indigo-100 focus:outline-none"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-indigo-700">
            <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Accueil</Link>
            <Link to="/formations" className="text-white block px-3 py-2 rounded-md text-base font-medium">Formations</Link>
            <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Ressources</Link>
            <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Communauté</Link>
            <div className="flex flex-col space-y-2 mt-4">
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-md text-sm font-medium shadow-md">Connexion</button>
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-md">Inscription</button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
