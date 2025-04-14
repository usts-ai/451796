import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/mockData';

const FormationsPage: React.FC = () => {
  const categories = ['Tous', 'Entrepreneuriat', 'Finance', 'Marketing', 'Management', 'Stratégie'];
  const levels = ['Tous', 'Débutant', 'Intermédiaire', 'Avancé'];
  
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedLevel, setSelectedLevel] = useState('Tous');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'Tous' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'Tous' || course.level === selectedLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Formations pour entrepreneurs</h1>
            <p className="text-xl text-indigo-100 max-w-3xl">
              Développez vos compétences avec nos formations de qualité, conçues par des experts pour vous aider à réussir dans votre parcours entrepreneurial.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher une formation..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="w-full sm:w-auto">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
                <select
                  id="category"
                  className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div className="w-full sm:w-auto">
                <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">Niveau</label>
                <select
                  id="level"
                  className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                >
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredCourses.length} formation{filteredCourses.length !== 1 ? 's' : ''} disponible{filteredCourses.length !== 1 ? 's' : ''}
          </h2>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <CourseCard {...course} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">Aucune formation trouvée</h3>
            <p className="mt-1 text-gray-500">Essayez de modifier vos critères de recherche ou de filtrage.</p>
            <div className="mt-6">
              <button
                onClick={() => {
                  setSelectedCategory('Tous');
                  setSelectedLevel('Tous');
                  setSearchTerm('');
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Réinitialiser les filtres
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Featured Section */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Formez-vous à votre rythme</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nos formations sont conçues pour s'adapter à votre emploi du temps chargé. Apprenez où vous voulez, quand vous voulez, et progressez à votre propre rythme.
              </p>
              <ul className="space-y-4">
                {[
                  'Accès illimité à toutes les formations',
                  'Certificats reconnus par l\'industrie',
                  'Exercices pratiques et études de cas',
                  'Support personnalisé de nos experts'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-500 transition-colors"
                >
                  Découvrir notre abonnement
                </motion.button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-blue-500 opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Entrepreneurs en formation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Questions fréquentes</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur nos formations
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'Comment accéder aux formations ?',
                answer: 'Après votre inscription, vous aurez accès à toutes les formations via votre espace membre. Vous pouvez y accéder depuis n\'importe quel appareil connecté à internet.'
              },
              {
                question: 'Les formations sont-elles certifiantes ?',
                answer: 'Oui, chaque formation complétée vous donne droit à un certificat que vous pouvez partager sur votre profil LinkedIn ou inclure dans votre CV.'
              },
              {
                question: 'Puis-je annuler mon abonnement à tout moment ?',
                answer: 'Absolument. Vous pouvez annuler votre abonnement à tout moment depuis votre espace membre, sans frais supplémentaires.'
              },
              {
                question: 'Y a-t-il un support disponible si j\'ai des questions ?',
                answer: 'Oui, notre équipe de support est disponible par chat et par email pour répondre à toutes vos questions concernant les formations.'
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="mb-6 border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à développer vos compétences ?</h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-10">
            Rejoignez plus de 10 000 entrepreneurs qui ont déjà transformé leur carrière grâce à nos formations.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-lg shadow-lg hover:bg-indigo-50 transition-colors"
          >
            Commencer maintenant
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default FormationsPage;
