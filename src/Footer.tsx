import { useEffect, useState } from "react"

function Separator(){
    return <div className='w-1/4 h-[0.5px] bg-light-black mx-auto my-5'></div>
}

export function Footer(){
    const [scroll, setScroll] = useState(0)

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScroll(position);
    }

    useEffect(() => {
        addEventListener('scroll', handleScroll)
        return () => removeEventListener('scroll', handleScroll)
    })

    return ( //Contact Réseaux CV Logo Ligne de separation Flèche remonter
        <>
            <div className="grow"/>
            <div className="relative bg-light-beige-light text-center py-2">
                <div>Mes réseaux / Me contacter</div>
                <Separator/>
                <div>© Copyright 2024 - Thomas BATISTA. Tous droits réservés.</div>
                {scroll !== 0 && 
                    <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="w-10 h-10 p-2 text-light-dark border border-light-dark rounded-full bg-light-white absolute left-[95%] -top-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                        </svg>
                    </button>
                }
            </div>
        </>
    )
}