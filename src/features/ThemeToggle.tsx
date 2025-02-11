import { motion } from "framer-motion";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../hooks.tsx/useTheme";

export function ThemeToggle() {
    const {theme, toggleTheme} = useTheme()

    return <div
        className="w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-all duration-300"
        onClick={toggleTheme}
    >
        <motion.div
            className="w-6 h-6 bg-white dark:bg-purple-400 rounded-full shadow-md flex items-center justify-center"
            animate={{ x: theme === "light" ? 0 : 24 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {theme === "light" ? <FontAwesomeIcon icon={faSun} className="font-reg text-purple-500"/> : <FontAwesomeIcon icon={faMoon} className="text-gray-800"/>}
        </motion.div>
    </div>
}