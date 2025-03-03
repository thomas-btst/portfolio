import notFound from '../assets/not_found.png'
import { IconButton } from '../components/IconButton'

export function NotFound() {
  return (
    <div className="h-full flex justify-center">
      <div className="flex flex-col md:flex-row bg-blue-00">
        <img src={notFound} className="w-96 inline-block" />
        <div className="self-stretch flex flex-col justify-evenly pb-10 md:pt-10">
          <div>
            <div className="text-7xl text-center">404</div>
            <div className="text-xl text-center">Oups, Cette page n'existe pas !</div>
          </div>
          <IconButton to="/">Retourner à l'accueil</IconButton>
        </div>
      </div>
    </div>
  )
}
