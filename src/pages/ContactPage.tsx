import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { Title } from '../components/Title'
import { ContactForm } from '../features/contact/ContactForm'
import { ContactItem } from '../features/contact/ContactItem'

export function ContactPage() {
  return (
    <section className="container mx-auto flex flex-col mt-4 max-w-5xl px-4 pb-12">
      <div className="flex flex-col items-center text-center space-y-5 mb-5">
        <Title>Me contacter</Title>
        <p className="text-gray-800 dark:text-gray-200 text-lg italic max-w-lg pt-2">
          Une opportunité, un projet ou une question ? N'hésitez pas à me contacter.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
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
          copyText="+33782713311"
        />
        <ContactItem
          title="Email"
          text="thomas.chadecima@gmail.com"
          icon={faEnvelope}
          href="mailto:thomas.chadecima@gmail.com"
          copyText="thomas.chadecima@gmail.com"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
          className="sm:col-span-2 lg:col-span-3 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-zinc-700/60"
        >
          <iframe
            className="w-full outline-none border-0 block"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46130.55456397923!2d5.143725555232136!3d43.72801000103698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ca030a71f8e3e5%3A0x40819a5fd970240!2sMallemort!5e0!3m2!1sfr!2sfr!4v1739293584123!5m2!1sfr!2sfr"
            height="380"
            loading="lazy"
            title="Localisation Mallemort"
          />
        </motion.div>

        <ContactForm />
      </div>
    </section>
  )
}
