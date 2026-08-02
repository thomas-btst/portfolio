import { useForm, ValidationError } from '@formspree/react'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export function ContactForm() {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_KEY)
  const [captchaValid, setCaptchaValid] = useState(false)

  const handleCaptchaChange = (value: string | null) => {
    if (value) {
      setCaptchaValid(true)
    }
  }

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="sm:col-span-2 lg:col-span-3 bg-white dark:bg-zinc-800/90 rounded-2xl p-10 shadow-lg border border-purple-100 dark:border-zinc-700 text-center flex flex-col items-center justify-center space-y-4"
      >
        <div className="size-16 bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-300 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faCheckCircle} className="size-8" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Message envoyé !</h3>
        <p className="text-gray-600 dark:text-gray-300 max-w-md">
          Merci pour votre message, je vous répondrai dans les plus brefs délais.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
      onSubmit={handleSubmit}
      className="rounded-2xl sm:col-span-2 lg:col-span-3 shadow-xl bg-white dark:bg-zinc-800/90 border border-gray-100 dark:border-zinc-700/60 p-6 sm:p-10 flex flex-col space-y-6"
    >
      <div className="space-y-1">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 flex items-center gap-2">
          <span>Envoyez-moi un message</span>
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Remplissez le formulaire ci-dessous et je vous recontacterai rapidement.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col space-y-2">
          <label htmlFor="lastname" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            Nom
          </label>
          <input
            id="lastname"
            name="lastname"
            placeholder="Votre nom"
            className="py-2.5 px-4 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900/60 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all shadow-sm"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="firstname" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            Prénom
          </label>
          <input
            id="firstname"
            type="text"
            name="firstname"
            placeholder="Votre prénom"
            className="py-2.5 px-4 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900/60 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all shadow-sm"
            required
          />
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Adresse Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="votre.email@exemple.com"
          className="py-2.5 px-4 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900/60 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all shadow-sm"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Rédigez votre message ici..."
          className="py-2.5 px-4 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900/60 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all shadow-sm resize-y"
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
      </div>

      <div className="flex flex-col items-center space-y-4 pt-2">
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAPTCHA_PUBLIC_KEY}
          onChange={handleCaptchaChange}
          className="self-center"
        />

        <button
          type="submit"
          disabled={state.submitting || !captchaValid}
          className="w-full sm:w-auto min-w-48 px-8 py-3.5 rounded-xl font-bold text-base bg-purple-900 hover:bg-purple-800 text-white shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2.5 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
        >
          <span>{state.submitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
          />
        </button>
      </div>
    </motion.form>
  )
}
