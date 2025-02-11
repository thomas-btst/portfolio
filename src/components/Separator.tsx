import { motion } from "framer-motion"

export function Separator() {
    return <motion.div // Avoid margin override from parent space-y
        className="py-5"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
    >
        <span className="h-1 rounded-full w-11/12 mx-auto bg-purple-900 dark:bg-purple-300 block"/>
    </motion.div>
}