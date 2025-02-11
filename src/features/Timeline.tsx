import { motion } from "framer-motion";
import { Title } from "../components/Title";

export interface TimelineStep {
    title: string,
    place: string,
    date: string,
    link?: string,
    body: React.ReactNode,
}

export function Timeline({title, data, direction}: {title: string, data: TimelineStep[], direction: "left" | "right"}) {
    return <div className="flex flex-col max-w-4xl mx-auto px-6 flex-1">
        <div className="self-center"><Title>{title}</Title></div>
        <div className="relative py-5 space-y-10">
            <div className={`absolute h-full rounded-full bg-purple-900 dark:bg-purple-300 w-2 ${direction === "left" ? "-right-2" : "-left-2"}`}/>
            {data.map((item, index) => {
                const branch = <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className={`relative bg-purple-900 dark:bg-purple-300 h-1 ${index % 2 === (direction === "left" ? 0 : 1) ? "w-16" : "w-8"}`}
                >
                    <div className={`absolute size-5 bg-purple-300 dark:bg-purple-900 border-4 border-purple-900 dark:border-purple-300 rounded-full ${direction === "left" ? "-right-3.5" : "-left-3.5"} top-1/2 -translate-y-1/2`}/>
                </motion.div>
                return <motion.div
                    key={index}
                    initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative flex items-center"
                >
                    {direction === "right" && branch}
                    <a href={item.link} target="_blank" className={`bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg relative transition-transform w-full ${item.link ? "z-10 hover:scale-105" : "cursor-default"} ${index % 2 === (direction === "left" ? 0 : 1) ? "" : `${direction === "left" ? "ml-8" : "mr-8"}`}`}>
                        <div className="flex justify-between">
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{item.date}</p>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 italic text-sm mt-1">{item.place}</p>
                        <p className="text-gray-700 dark:text-gray-300 mt-4">{item.body}</p>
                    </a>
                    {direction === "left" && branch}
                </motion.div>
                })}
        </div>
    </div>
}
