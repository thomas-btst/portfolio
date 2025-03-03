import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import picture from '../../assets/desktop computer-bro.svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// function Slider({
//   name,
//   min,
//   max,
//   value,
//   setValue,
// }: {
//   name: string
//   min: number
//   max: number
//   value: number
//   setValue: (val: number) => void
// }) {
//   return (
//     <div className="flex space-x-3 justify-between w-full">
//       <span>{name}</span>
//       <input type="range" min={min} max={max} value={value} onChange={(e) => setValue(+e.target.value)}></input>
//       <span>{value}</span>
//     </div>
//   )
// }

export function Hero() {
  const [top, setTop] = useState(true)

  // const [perspective, setPerspective] = useState(670)
  // const [x, setX] = useState(-3)
  // const [y, setY] = useState(-20)
  // const [z, setZ] = useState(7)
  // const [translateX, setTranslateX] = useState(0)
  // const [translateY, setTranslateY] = useState(-100)
  // const [skewY, setSkewY] = useState(-3)
  // const [skewX, setSkewX] = useState(0)

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
    <motion.div
      className="relative grow flex flex-col items-center justify-center px-4 py-16 md:py-32"
      initial={{ bottom: -300 }}
      animate={{ bottom: 0 }}
    >
      {/* <div className="absolute bottom-0 p-3 rounded-md bg-white space-y-4">
        <Slider name="perspective" min={0} max={2000} value={perspective} setValue={setPerspective}/>
        <Slider name="x" min={-100} max={100} value={x} setValue={setX}/>
        <Slider name="y" min={-100} max={100} value={y} setValue={setY}/>
        <Slider name="z" min={-100} max={100} value={z} setValue={setZ}/>
        <Slider name="translateX" min={-100} max={100} value={translateX} setValue={setTranslateX}/>
        <Slider name="translateY" min={-100} max={100} value={translateY} setValue={setTranslateY}/>
        <Slider name="skewX" min={-100} max={100} value={skewX} setValue={setSkewX}/>
        <Slider name="skewY" min={-100} max={100} value={skewY} setValue={setSkewY}/>
      </div> */}
      <img className="absolute -z-10 top-0 w-full h-full" src={picture} />
      <div
        className="absolute flex items-center justify-center ml-5 xl:ml-0 top-[36%] md:top-[30%] xl:top-[28%] xl:justify-between py-4 flex-col space-y-6 bg-blfue-200/70"
        style={{
          left: '40.3%',
          width: '25%',
          height: '38%',
          transform: `perspective(670px) rotateX(-3deg) rotateY(-20deg) rotateZ(7deg) translateY(-100px) skewY(-3deg)`,
          // transform: `perspective(${perspective}px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg) translateY(${translateY}px) translateX(${translateX}px) skewX(${skewX}deg) skewY(${skewY}deg)`,
          transformOrigin: 'center center',
        }}
      >
        <div className="space-y-3 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-white text-center">De la conception à la réalisation</h1>
          <span className="hidden sm:block text-xl italic font-bold text-white">Étudiant en informatique</span>
        </div>
        <div className="hidden xl:flex flex-wrap justify-center gap-4 pt-4 ml-20">
          <a
            href="#presentation"
            className="px-6 py-3 bg-white text-purple-800 hover:bg-opacity-0 border-2 hover:text-white border-white rounded-lg font-semibold transition-all duration-100"
          >
            Me découvrir
          </a>
          <Link
            to="/contact"
            className="px-6 py-3 border-2 border-white text-white hover:text-purple-800 hover:bg-white rounded-lg font-semibold transition-all duration-100"
          >
            Me contacter
          </Link>
        </div>
      </div>
      <a
        href="#presentation"
        className={`absolute px-3 rounded-full pt-4 pb-1 ${top ? 'bottom-7' : 'bottom-32 opacity-0'} transition-all duration-500 left-1/2 -translate-x-1/2`}
      >
        <span className="absolute inset-0 bg-white blur-xl opacity-50"></span>
        <div className="animate-bounce flex flex-col text-lg text-black font-bold items-center z-20">
          <p className="mb-2 text-sm">Découvrir</p>
          <FontAwesomeIcon icon={faChevronDown} className="size-4 text-black" />
        </div>
      </a>
    </motion.div>
  )
}
