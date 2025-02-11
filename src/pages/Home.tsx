import { Presentation } from "../features/Presentation";
import { Profile } from "../features/Profile";

export function Home() {
    return <div className="container mx-auto xl:px-20 my-10 space-y-16 lg:space-y-0 lg:space-x-16 flex flex-col lg:flex-row items-center lg:items-start">
        <Profile/>
        <Presentation/>
    </div>
}