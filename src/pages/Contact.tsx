import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { Title } from "../components/Title"
import { ContactForm } from "../features/contact/ContactForm"

interface ContactItemProps {
    title: string
    text: string
    icon: IconProp
    href: string
    target?: React.HTMLAttributeAnchorTarget
}

function ContactItem({title, href, target, text, icon}: ContactItemProps) {
    return <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
        >
            <a
                href={href}
                target={target}
                className="flex flex-col items-center p-6 bg-white dark:bg-zinc-700 rounded-md shadow-md hover:shadow-lg hover:scale-105 transition duration-200 space-y-4 group"
            >
                <div className="flex items-center space-x-3">
                    <div className="p-3 bg-purple-100 dark:bg-purple-950 rounded-full">
                        <FontAwesomeIcon icon={icon} className="text-purple-900 dark:text-purple-200 w-7 h-6"/>
                    </div>
                    <h3 className="font-semibold text-xl text-gray-900 dark:text-gray-50">{title}</h3>
                </div>
                <div className="text-gray-700 dark:text-gray-200 group-hover:underline">{text}</div>
            </a>
        </motion.div>
}

export function Contact() {
    return <section className="container mx-auto flex flex-col mt-4">
        <div className="self-center">
            <Title>Me contacter</Title>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 px-4">
            <ContactItem
                title="Adresse"
                text="13370 Mallemort, France"
                icon={faLocationDot}
                target="_blank"
                href="https://maps.app.goo.gl/4F4KxCMy8qE1fdzPA"
            />
            <ContactItem
                title="Téléphone"
                text="+33 7 82 71 33 11"
                icon={faPhone}
                href="tel:+33782713311"
            />
            <ContactItem
                title="Email"
                text="thomas.chadecima@gmail.com"
                icon={faEnvelope}
                href="mailto:thomas.chadecima@gmail.com"
            />
            <motion.iframe
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="outline-none bg-gray-200 dark:bg-zinc-700 sm:col-span-2 lg:col-span-3 w-full rounded-md shadow-md hover:shadow-lg transition-shadow duration-200"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46130.55456397923!2d5.143725555232136!3d43.72801000103698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ca030a71f8e3e5%3A0x40819a5fd970240!2sMallemort!5e0!3m2!1sfr!2sfr!4v1739293584123!5m2!1sfr!2sfr"
                height="450"
                loading="lazy"
            />
        </div>
        <ContactForm/>
    </section>
}