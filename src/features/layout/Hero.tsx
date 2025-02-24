import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// const Icons = {
//     code: (props: any) => (
//         <svg viewBox="0 0 24 24" {...props}>
//           <path
//             fill="currentColor"
//             d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1.04-.84 1.87-1.87 1.87-1.03 0-1.87-.83-1.87-1.87 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9.03 12.6 9 12 9c-.6 0-1.17.03-1.71.07-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.04 1.11.07 1.71.07.6 0 1.17-.03 1.71-.07.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96.77-.16 1.58-.28 2.4-.36.48-.67.99-1.31 1.51-1.9Z"
//           />
//         </svg>
//       ),
//     react: (props: any) => (
//       <svg viewBox="0 0 24 24" {...props}>
//         <path
//           fill="currentColor"
//           d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1.04-.84 1.87-1.87 1.87-1.03 0-1.87-.83-1.87-1.87 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9.03 12.6 9 12 9c-.6 0-1.17.03-1.71.07-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.04 1.11.07 1.71.07.6 0 1.17-.03 1.71-.07.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96.77-.16 1.58-.28 2.4-.36.48-.67.99-1.31 1.51-1.9Z"
//         />
//       </svg>
//     ),
//     typescript: (props: any) => (
//       <svg viewBox="0 0 24 24" {...props}>
//         <path
//           fill="currentColor"
//           d="M3,3H21V21H3V3M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86M13,11.25H8V12.75H9.5V20H11.25V12.75H13V11.25Z"
//         />
//       </svg>
//     ),
//     nodejs: (props: any) => (
//       <svg viewBox="0 0 24 24" {...props}>
//         <path
//           fill="currentColor"
//           d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.3,6.63 3,7.15 3,7.71V16.29C3,16.85 3.3,17.37 3.78,17.65L5.73,18.77C6.68,19.23 7,19.24 7.44,19.24C8.84,19.24 9.65,18.39 9.65,16.91V8.44C9.65,8.32 9.55,8.22 9.43,8.22H8.5C8.37,8.22 8.27,8.32 8.27,8.44V16.91C8.27,17.57 7.59,18.22 6.5,17.67L4.45,16.5C4.38,16.45 4.34,16.37 4.34,16.29V7.71C4.34,7.62 4.38,7.54 4.45,7.5L11.89,3.21C11.95,3.17 12.05,3.17 12.11,3.21L19.55,7.5C19.62,7.54 19.66,7.62 19.66,7.71V16.29C19.66,16.37 19.62,16.45 19.55,16.5L12.11,20.79C12.05,20.83 11.95,20.83 11.89,20.79L10,19.65C9.92,19.62 9.84,19.61 9.79,19.64C9.26,19.94 9.16,20 8.67,20.15C8.55,20.19 8.36,20.26 8.74,20.47L11.22,21.94C11.46,22.08 11.72,22.15 12,22.15C12.28,22.15 12.54,22.08 12.78,21.94L20.22,17.65C20.7,17.37 21,16.85 21,16.29V7.71C21,7.15 20.7,6.63 20.22,6.35L12.78,2.05C12.55,1.92 12.27,1.85 12,1.85M14,8C11.88,8 10.61,8.89 10.61,10.39C10.61,12 11.87,12.47 13.91,12.67C16.34,12.91 16.53,13.27 16.53,13.75C16.53,14.58 15.86,14.93 14.3,14.93C12.32,14.93 11.9,14.44 11.75,13.46C11.73,13.36 11.64,13.28 11.53,13.28H10.57C10.45,13.28 10.36,13.37 10.36,13.5C10.36,14.74 11.04,16.24 14.3,16.24C16.65,16.24 18,15.31 18,13.69C18,12.08 16.92,11.66 14.63,11.35C12.32,11.05 12.09,10.89 12.09,10.35C12.09,9.9 12.29,9.3 14,9.3C15.5,9.3 16.09,9.63 16.32,10.66C16.34,10.76 16.43,10.83 16.53,10.83H17.5C17.55,10.83 17.61,10.81 17.65,10.76C17.69,10.72 17.72,10.66 17.7,10.6C17.56,8.82 16.38,8 14,8Z"
//         />
//       </svg>
//     ),
//     python: (props: any) => (
//       <svg viewBox="0 0 24 24" {...props}>
//         <path
//           fill="currentColor"
//           d="M19.14,7.5A2.86,2.86 0 0,1 22,10.36V14.14A2.86,2.86 0 0,1 19.14,17H12C12,17.39 12.32,17.96 12.71,17.96H17V19.64A2.86,2.86 0 0,1 14.14,22.5H9.86A2.86,2.86 0 0,1 7,19.64V15.89C7,14.31 8.28,13.04 9.86,13.04H15.11C16.69,13.04 17.96,11.76 17.96,10.18V7.5H19.14M14.86,19.29C14.46,19.29 14.14,19.59 14.14,20.18C14.14,20.77 14.46,20.89 14.86,20.89A0.71,0.71 0 0,0 15.57,20.18C15.57,19.59 15.25,19.29 14.86,19.29M4.86,17.5C3.28,17.5 2,16.22 2,14.64V10.86C2,9.28 3.28,8 4.86,8H12C12,7.61 11.68,7.04 11.29,7.04H7V5.36C7,3.78 8.28,2.5 9.86,2.5H14.14C15.72,2.5 17,3.78 17,5.36V9.11C17,10.69 15.72,11.96 14.14,11.96H8.89C7.31,11.96 6.04,13.24 6.04,14.82V17.5H4.86M9.14,5.71C9.54,5.71 9.86,5.41 9.86,4.82C9.86,4.23 9.54,4.11 9.14,4.11C8.75,4.11 8.43,4.23 8.43,4.82C8.43,5.41 8.75,5.71 9.14,5.71Z"
//         />
//       </svg>
//     ),
//     git: (props: any) => (
//       <svg viewBox="0 0 24 24" {...props}>
//         <path
//           fill="currentColor"
//           d="M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C12.35,5 11.9,4.96 11.5,5.07L9.8,3.38L10.59,2.6C11.37,1.81 12.63,1.81 13.41,2.6L21.4,10.59C22.19,11.37 22.19,12.63 21.4,13.41L13.41,21.4C12.63,22.19 11.37,22.19 10.59,21.4L2.6,13.41C1.81,12.63 1.81,11.37 2.6,10.59Z"
//         />
//       </svg>
//     ),
//   };

// function System() {
//     const technos = [
//         { name: "React", icon: <Icons.react className="w-12 h-12"/>, orbit: 22, duration: 8 },
//         { name: "Git", icon: <Icons.git className="w-11 h-11" />, orbit: 28, duration: 12 },
//       ];
//     return <div className="flex items-center justify-center absolute w-1/6 h-1/6 left-1/4 -translate-x-1/2">
//     <div className="relative flex items-center justify-center">
//       {/* Centre du système - Logo principal */}
//         <div className="absolute bg-purple-700/5 animate-ping size-7 -z-10 rounded-full"/>
//         <div className="bg-purple-300 rounded-full border-4 border-purple-900 size-5"/>

//       {/* Orbites des technologies */}
//       {technos.map((tech) => (
//         <div key={tech.name} className="absolute inset-0">
//           {/* Orbite visible */}
//           <div
//             className="absolute inset-0 rounded-full border border-purple-950/10 bordfer-slate-700/30"
//             style={{
//               width: `${tech.orbit}rem`,
//               height: `${tech.orbit}rem`,
//               left: `calc(50% - ${tech.orbit/2}rem)`,
//               top: `calc(50% - ${tech.orbit/2}rem)`,
//             }}
//           />

//           {/* Technologie en orbite */}
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: tech.duration, repeat: Infinity, ease: "linear" }}
//             className="absolute"
//             style={{
//               width: `${tech.orbit}rem`,
//               height: `${tech.orbit}rem`,
//               left: `calc(50% - ${tech.orbit/2}rem)`,
//               top: `calc(50% - ${tech.orbit/2}rem)`,
//             }}
//           >
//             <div
//                 className="absolute hover:scale-125 transition-transform top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer text-purple-900
//                     duration-200"
//             //   style={{
//             //     top: 0,
//             //     left: "50%",
//             //   }}
//             >
//               {tech.icon}
//             </div>
//           </motion.div>
//         </div>
//       ))}
//     </div>
//   </div>
//   }

//   const ParticleBackground = () => {
//     const particlesInit = useCallback(async (engine: Engine) => {
//       await loadLinksPreset(engine); // Load the preset
//   }, []);
//     return (
//          <Particles
//             init={particlesInit}
//             className="absolute h-full w-full blur-sm -z-10"
//             options={{
//                 preset: "links",
//                 fullScreen: {
//                   enable: false,
//                   zIndex: -10,
//                 },
//                 background: {
//                   opacity: 0,
//                 },
//                 particles: {
//                   number: {
//                     value: 130,
//                   },
//                   color: {
//                     value: "#581c87",
//                   },
//                   opacity: {
//                     value: 0.5,
//                   },
//                   size: {
//                     value: 1,
//                   },
//                   move: {
//                     enable: true,
//                     speed: 1,
//                   },
//                   links: {
//                     enabled: true,
//                     distance: 180,
//                     color: "#581c87",
//                     opacity: 0.1,
//                     width: 1,
//                   },
//                 },
//                 interactivity: {
//                   events: {
//                     // On mouse hover, the particles will "grab" the cursor (you can change mode to "repulse" or "bubble" as needed)
//                     onHover: {
//                       enable: true,
//                       mode: "grab",
//                     },
//                     // On click, new particles are pushed into the system
//                     onClick: {
//                       enable: true,
//                       mode: "push",
//                     },
//                   },
//                   // Customize the modes (e.g. grab or push)
//                   modes: {
//                     grab: {
//                       distance: 150,
//                       links: {
//                         opacity: 0.5,
//                       },
//                     },
//                     push: {
//                       quantity: 4,
//                     },
//                   },
//                 },
//                 // interactivity: {
//                 //   events: {
//                 //       onHover: {
//                 //           enable: true,
//                 //           mode: "repulse",
//                 //       },
//                 //       onClick: {
//                 //           enable: true,
//                 //           mode: "push",
//                 //       },
//                 //   },
//                 //   modes: {
//                 //       repulse: {
//                 //           distance: 200,
//                 //       },
//                 //       push: {
//                 //           quantity: 4,
//                 //       },
//                 //   },
//                 // },
//             }}
//         />
//     );
//   };

export function Hero() {
  const [top, setTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY < 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="relative grow flex flex-col items-center justify-center px-4 py-16 md:py-32">
      {/* <System/> */}
      {/* <ParticleBackground/> */}
      {/* Main content */}
      <motion.div initial="hidden" animate="visible" className="text-center space-y-6 max-w-3xl">
        <motion.div className="relative inline-block mb-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            Etudiant en Informatique
          </h1>
          <motion.div
            className="absolute -bottom-4 left-0 translate-x-[10px] h-1 bg-purple-900 dark:bg-purple-300 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "calc(100% - 20px)" }}
            transition={{ duration: 1, delay: 0.35 }}
          />
        </motion.div>

        <motion.p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Passionné par le développement web et les nouvelles technologies,
          <br />
          je crée des applications modernes et performantes.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-4 pt-4">
          <motion.a
            href="#projects"
            className="px-6 py-3 bg-purple-900 dark:bg-purple-300 text-white dark:text-gray-900 rounded-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir mes projets
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 py-3 border-2 border-purple-900 dark:border-purple-300 text-purple-900 dark:text-purple-300 rounded-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Me contacter
          </motion.a>
        </motion.div>

        {/* Animated tech stack */}
        <motion.div initial="hidden" animate="visible" className="flex flex-wrap justify-center gap-2 pt-8">
          {["React", "TypeScript", "Node.js", "Tailwind CSS", "Docker"].map((tech) => (
            <motion.span
              key={tech}
              whileHover="hover"
              className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <div
          className={`absolute ${top ? "bottom-8" : "bottom-32 opacity-0"} transition-all duration-500 left-1/2 -translate-x-1/2`}
        >
          <div className="animate-bounce flex flex-col text-purple-900 font-bold items-center">
            <p className="mb-2 text-sm">Découvrir</p>
            <FontAwesomeIcon icon={faChevronDown} className="size-4" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
