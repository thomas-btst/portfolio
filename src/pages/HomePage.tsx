import { Presentation } from "../features/Presentation"
import { Profile } from "../features/Profile"

export function HomePage() {
  return (
    <div className="container mx-auto xl:px-20 my-10 space-y-16 lg:space-y-0 lg:space-x-16 flex flex-col lg:flex-row items-center lg:items-start">
      <Profile />
      <Presentation />
    </div>
  )
}

// import { motion } from "framer-motion";

// interface PortfolioProps {
//     name: string;
//     title: string;
//     socials?: Array<{ name: string; url: string; icon: string }>;
//   }

// export const Home: React.FC<PortfolioProps> = ({
//     name = "Jean Dupont",
//     title = "Développeur Web & Designer",
//     socials = []
//   }) => {
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//       const handleScroll = () => {
//         const isScrolled = window.scrollY > 50;
//         if (isScrolled !== scrolled) {
//           setScrolled(isScrolled);
//         }
//       };

//       window.addEventListener('scroll', handleScroll);
//       return () => window.removeEventListener('scroll', handleScroll);
//     }, [scrolled]);

//     return (
//       <div className="relative h-screen w-full overflow-x-hidden font-sans">
//         {/* Cercles animés en arrière-plan */}
//         <div className="absolute inset-0 overflow-hidden">
//           <motion.div
//             className="absolute w-96 h-96 rounded-full bg-blue-500/10 top-1/4 -left-20"
//             animate={{
//               x: [0, 50, 0],
//               scale: [1, 1.1, 1],
//             }}
//             transition={{
//               duration: 15,
//               repeat: Infinity,
//               repeatType: "reverse"
//             }}
//           />
//           <motion.div
//             className="absolute w-64 h-64 rounded-full bg-purple-500/10 bottom-1/3 right-1/4"
//             animate={{
//               y: [0, 40, 0],
//               scale: [1, 1.2, 1],
//             }}
//             transition={{
//               duration: 12,
//               repeat: Infinity,
//               repeatType: "reverse"
//             }}
//           />
//         </div>

//         {/* Navigation */}
//         <motion.nav
//           className={`fixed top-0 w-full flex justify-between items-center p-6 z-50 transition-all duration-300 ${
//             scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
//           }`}
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.div
//             className="text-xl font-bold"
//             whileHover={{ scale: 1.05 }}
//           >
//             {name.split(' ').map((part, index) => (
//               <span key={index} className={index === 0 ? "text-blue-600" : ""}>
//                 {part}{index === 0 ? " " : ""}
//               </span>
//             ))}
//           </motion.div>
//           <div className="flex space-x-6">
//             {['Portfolio', 'À propos', 'Compétences', 'Contact'].map((item, i) => (
//               <motion.a
//                 key={item}
//                 href={`#${item.toLowerCase().replace(' ', '-')}`}
//                 className="relative text-gray-800 hover:text-blue-600 transition-colors"
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 whileHover={{ scale: 1.1 }}
//               >
//                 {item}
//                 <motion.span
//                   className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600"
//                   whileHover={{ width: '100%' }}
//                   transition={{ duration: 0.2 }}
//                 />
//               </motion.a>
//             ))}
//           </div>
//         </motion.nav>

//         {/* Hero Section */}
//         <section className="relative h-screen flex flex-col justify-center items-center text-center px-4">
//           <motion.h1
//             className="text-5xl md:text-7xl font-bold mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="block">Bonjour, je suis</span>
//             <span className="block text-blue-600 mt-2">{name}</span>
//           </motion.h1>

//           <motion.h2
//             className="text-xl md:text-2xl text-gray-600 mb-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             {title}
//           </motion.h2>

//           <motion.div
//             className="flex space-x-4 mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             {socials.map((social, index) => (
//               <motion.a
//                 key={social.name}
//                 href={social.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white transition-colors duration-300"
//                 whileHover={{ scale: 1.2, rotate: 5 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <i className={social.icon}></i>
//               </motion.a>
//             ))}
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1, duration: 1 }}
//             className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//           >
//             <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//               className="flex flex-col items-center"
//             >
//               <span className="text-sm text-gray-500 mb-2">Défiler pour découvrir</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-blue-600"
//               >
//                 <path d="M12 5v14"></path>
//                 <path d="M19 12l-7 7-7-7"></path>
//               </svg>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* Sections qui défilent */}
//         <section id="portfolio" className="min-h-screen bg-gray-50 py-20 px-4 md:px-8">
//           <div className="max-w-6xl mx-auto">
//             <motion.h2
//               className="text-3xl md:text-4xl font-bold mb-12 text-center"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               Mon Portfolio
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[1, 2, 3, 4, 5, 6].map((item) => (
//                 <motion.div
//                   key={item}
//                   className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: item * 0.1 }}
//                   whileHover={{ y: -5 }}
//                 >
//                   <div className="h-52 bg-gray-200"></div>
//                   <div className="p-4">
//                     <h3 className="text-xl font-semibold mb-2">Projet {item}</h3>
//                     <p className="text-gray-600">Description courte du projet montrant les technologies utilisées.</p>
//                     <motion.button
//                       className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       Voir détails
//                     </motion.button>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   };

// const ScrollDownIcon = () => (
//     <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce">
//       <p className="mb-2 text-sm font-medium">Découvrir</p>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <polyline points="6 9 12 15 18 9"></polyline>
//       </svg>
//     </div>
//   );

// export const Home = () => {
//     const [showContent, setShowContent] = React.useState(false);
//     const introRef = React.useRef(null);
//     const fadeInElements = React.useRef([]);

//     // Animation d'introduction
//     React.useEffect(() => {
//       setTimeout(() => {
//         setShowContent(true);
//       }, 800);

//       // Configurer l'animation de défilement
//       const handleScroll = () => {
//         const scrollPosition = window.scrollY;
//         if (scrollPosition > window.innerHeight * 0.5) {
//           // Activer animations des sections suivantes une fois scrollé
//           fadeInElements.current.forEach((el, index) => {
//             if (el) {
//               setTimeout(() => {
//                 el.classList.add('animate-fadeIn');
//                 el.classList.remove('opacity-0');
//               }, index * 150);
//             }
//           });
//         }
//       };

//       window.addEventListener('scroll', handleScroll);
//       return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const setRef = (el, index) => {
//       if (el) {
//         fadeInElements.current[index] = el;
//       }
//     };

//     // Fonction pour scroll vers le contenu
//     const scrollToContent = () => {
//       window.scrollTo({
//         top: window.innerHeight,
//         behavior: 'smooth'
//       });
//     };

//     return (
//       <div className="-mx-5 bg-gradient-to-br from-gray-100 to-purple-50 dark:from-gray-900 dark:to-purple-950">
//         {/* Section d'introduction plein écran */}
//         <div
//           ref={introRef}
//           className="relative h-screen w-full flex items-center justify-center overflow-hidden"
//         >
//           <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-indigo-900 z-0">
//             {/* Animation de particules/lignes */}
//             <div className="absolute inset-0 overflow-hidden opacity-20">
//               {[...Array(10)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="absolute h-px bg-white"
//                   style={{
//                     left: `${Math.random() * 100}%`,
//                     top: `${Math.random() * 100}%`,
//                     width: `${Math.random() * 300 + 50}px`,
//                     transform: `rotate(${Math.random() * 360}deg)`,
//                     opacity: Math.random() * 0.7 + 0.3,
//                     animation: `pulse ${Math.random() * 3 + 2}s infinite alternate`
//                   }}
//                 />
//               ))}
//             </div>
//           </div>

//           <div className={`relative z-10 text-center px-6 transition-all duration-1000 transform ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
//             <div className="h-24 w-24 mx-auto mb-8 relative">
//               <div className="absolute inset-0 rounded-full bg-purple-600 animate-ping opacity-25"></div>
//               <div className="relative bg-white dark:bg-purple-900 rounded-full h-full w-full flex items-center justify-center shadow-lg">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-700 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//                 </svg>
//               </div>
//             </div>
//             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-200">Portfolio</span>
//             </h1>
//             <p className="text-purple-100 text-xl md:text-2xl max-w-2xl mx-auto mb-10">
//               Développeur Web Back-end spécialisé en applications modernes et performantes
//             </p>
//             <button
//               onClick={scrollToContent}
//               className="px-8 py-3 bg-white text-purple-800 hover:bg-purple-50 font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
//             >
//               Explorer mon univers
//             </button>
//           </div>

//           <ScrollDownIcon />
//         </div>

//         {/* Styles pour les animations */}
//         <style jsx>{`
//           @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(20px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           .animate-fadeIn {
//             animation: fadeIn 0.8s forwards;
//           }
//           @keyframes pulse {
//             from { opacity: 0.3; }
//             to { opacity: 0.8; }
//           }
//         `}</style>
//       </div>
//     );
//   };

//   Contenu principal (apparaît après défilement)
//   <div className="py-16 px-6">
//     <div className="max-w-6xl mx-auto">
//       {/* Hero Section */}
//       <div
//         ref={(el) => setRef(el, 0)}
//         className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-16 opacity-0 transition-all duration-700"
//       >
//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
//             <div className="transition-all duration-500">
//               <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
//                 <span className="text-purple-700 dark:text-purple-400">Développeur Web</span> passionné
//               </h2>
//               <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
//                 Spécialisé en développement back-end avec une solide expérience en conception d'applications web modernes et performantes.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <a href="#contact" className="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white font-medium rounded-lg text-center transition-colors duration-300">
//                   Me contacter
//                 </a>
//                 <a href="#portfolio" className="px-6 py-3 border border-purple-700 dark:border-purple-400 text-purple-700 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 font-medium rounded-lg text-center transition-colors duration-300">
//                   Voir mes projets
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden bg-purple-200 dark:bg-purple-900">
//             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/60 to-indigo-600/60 z-10"></div>
//             <div className="absolute inset-0 flex items-center justify-center z-20">
//               <div className="text-white text-center p-8">
//                 <div className="w-32 h-32 mx-auto rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center mb-4">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-700 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//                   </svg>
//                 </div>
//                 <p className="font-bold text-xl">Créativité & Technique</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Présentation */}
//       <div className="mb-16">
//         <div className="flex justify-center mb-12">
//           <Title>À propos de moi</Title>
//         </div>

//         <div
//           ref={(el) => setRef(el, 1)}
//           className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 opacity-0 transition-all duration-500"
//         >
//           <div className="max-w-none">
//             <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
//               Actuellement en dernière année de BUT Informatique, je suis passionné par le développement web et la création d'applications performantes.
//               Mon parcours m'a permis d'acquérir une expertise particulière dans le développement back-end, tout en maîtrisant les technologies front-end modernes.
//             </p>
//             <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
//               Mon expérience en alternance chez Dev-id Marseille m'a permis de travailler sur des projets concrets et de développer mes compétences en conditions réelles.
//               Je cherche constamment à améliorer mes connaissances et à me tenir informé des dernières avancées technologiques dans le domaine du développement web.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Compétences */}
//       <div className="mb-16">
//         <div className="flex justify-center mb-12">
//           <Title>Compétences</Title>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             { name: 'Frontend', items: ['React', 'Tailwind CSS', 'JavaScript', 'TypeScript'] },
//             { name: 'Backend', items: ['Node.js', 'Express', 'PHP', 'SQL'] },
//             { name: 'Outils', items: ['Git', 'Docker', 'VS Code', 'Figma'] }
//           ].map((skillGroup, groupIndex) => (
//             <div
//               key={groupIndex}
//               ref={(el) => setRef(el, 2 + groupIndex)}
//               className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-purple-200 dark:hover:shadow-purple-900/30 transition-shadow duration-300 opacity-0 transition-all duration-500"
//             >
//               <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4">{skillGroup.name}</h3>
//               <div className="flex flex-wrap gap-2">
//                 {skillGroup.items.map((skill, skillIndex) => (
//                   <span
//                     key={skillIndex}
//                     className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 rounded-full text-sm"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CTA */}
//       <div
//         ref={(el) => setRef(el, 5)}
//         className="bg-gradient-to-r from-purple-700 to-indigo-800 rounded-xl shadow-xl p-10 text-center text-white opacity-0 transition-all duration-700"
//       >
//         <h2 className="text-3xl font-bold mb-4">Intéressé par mon profil?</h2>
//         <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
//           Je suis ouvert aux opportunités professionnelles dans le développement web.
//           N'hésitez pas à consulter mon portfolio complet ou à me contacter directement.
//         </p>
//         <div className="flex flex-col sm:flex-row justify-center gap-4">
//           <a
//             href="#contact"
//             className="px-8 py-3 bg-white text-purple-800 hover:bg-purple-50 font-semibold rounded-lg transition-colors duration-300"
//           >
//             Me contacter
//           </a>
//           <a
//             href="/cv.pdf"
//             target="_blank"
//             className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-colors duration-300"
//           >
//             Télécharger mon CV
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
