import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import picture from '../../assets/desktop computer-bro.svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function Hero() {
  const [top, setTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY < 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <motion.div
        className="relative grow flex flex-col items-center justify-center px-4 py-6 md:py-12 w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* 1:1 Aspect Ratio Container using native SVG viewBox scaling */}
        <div className="relative w-full max-w-[500px] sm:max-w-[650px] md:max-w-[780px] lg:max-w-[850px] aspect-square flex items-center justify-center my-auto">
          <svg
            viewBox="0 0 500 500"
            className="w-full h-full overflow-visible select-none"
          >
            {/* Desktop Computer Vector Artwork */}
            <image href={picture} x="0" y="0" width="500" height="500" />

            {/* ForeignObject container carrying the exact 3D Perspective Screen Overlay */}
            <foreignObject x="0" y="0" width="500" height="500" className="overflow-visible">
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '400px',
                  height: '250px',
                  transform:
                    'matrix3d(0.419367, -0.080956, 0, -0.000645, -0.062092, 0.695577, 0, 0.000069, 0, 0, 1, 0, 175.23, 79.81, 0, 1)',
                  transformOrigin: '0 0',
                }}
                className="flex flex-col items-center justify-center p-6 space-y-9 text-white overflow-hidden"
              >
                {/* Main Content: Title & Subtitle */}
                <div className="flex flex-col items-end space-y-2 text-right px-2">
                  <h1 className="text-3xl font-black text-white leading-snug tracking-tight drop-shadow-md">
                    De la conception à la réalisation
                  </h1>
                  <p className="text-md font-semibold text-purple-200 tracking-wide drop-shadow-xs">
                    Ingénieur en informatique
                  </p>
                </div>

                {/* Interactive Action Buttons */}
                <div className="flex items-center justify-center gap-3 w-full pl-20">
                  <a
                    href="#presentation"
                    className="px-5 py-2.5 bg-white text-purple-900 hover:bg-purple-100 hover:text-purple-950 font-extrabold text-sm rounded-lg shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 text-nowrap flex items-center justify-center"
                  >
                    Me découvrir
                  </a>
                  <Link
                    to="/contact"
                    className="px-5 py-2.5 border-2 border-white text-white hover:bg-white/20 font-extrabold text-sm rounded-lg shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 text-nowrap flex items-center justify-center"
                  >
                    Me contacter
                  </Link>
                </div>
              </div>
            </foreignObject>
          </svg>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <a
        href="#presentation"
        className={`fixed px-3 rounded-full pt-4 pb-1 ${top ? 'bottom-7 opacity-100' : 'bottom-32 opacity-0 pointer-events-none'} transition-all duration-500 left-1/2 -translate-x-1/2 z-30`}
      >
        <span className="absolute inset-0 bg-white blur-xl opacity-50 dark:opacity-20"></span>
        <div className="animate-bounce flex flex-col text-lg text-black dark:text-white font-bold items-center relative z-20">
          <p className="mb-2 text-sm">Découvrir</p>
          <FontAwesomeIcon icon={faChevronDown} className="size-4 text-black dark:text-white" />
        </div>
      </a>
    </>
  )
}


