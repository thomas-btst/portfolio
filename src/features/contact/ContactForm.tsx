import { useForm, ValidationError } from "@formspree/react"
import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"

export function ContactForm() {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_KEY)
  const [captchaValid, setCaptchaValid] = useState(false)

  const handleCaptchaChange = (value: string | null) => {
    if (value) {
      setCaptchaValid(true)
    }
  }

  if (state.succeeded)
    return (
      <p className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300 my-auto">
        Merci pour votre message, je vous répondrai très bientôt !
      </p>
    )

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-md shadow-md bg-slate-200 flex flex-col justify-center space-y-5 p-10"
    >
      <span className="text-2xl font-bold">Formulaire</span>
      <div className="flex flex-col space-y-3">
        <label htmlFor="lastname" className="font-bold">
          Nom
        </label>
        <input id="lastname" name="lastname" placeholder="Entrez votre nom" className="py-2 px-3 rounded-md" required />
      </div>
      <div className="flex flex-col space-y-3">
        <label htmlFor="firstname" className="font-bold">
          Prénom
        </label>
        <input
          id="firstname"
          type="firstname"
          name="firstname"
          placeholder="Entrez votre prénom"
          className="py-2 px-3 rounded-md"
          required
        />
      </div>
      <div className="flex flex-col space-y-3">
        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Entrez votre email"
          className="py-2 px-3 rounded-md"
          required
        />
      </div>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        placeholder="Écrivez votre message ici"
        className="grow py-2 px-3 rounded-md"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <ReCAPTCHA
        sitekey={import.meta.env.VITE_RECAPTCHA_PUBLIC_KEY}
        onChange={handleCaptchaChange}
        className="self-center"
      />
      <button
        type="submit"
        disabled={state.submitting || !captchaValid}
        className="border-2 font-bold self-center text-lg hover:bg-purple-900 rounded-md border-purple-900 text-purple-900 w-min px-4 py-2 hover:text-white disabled:text-purple-900 disabled:bg-opacity-0 disabled:opacity-35"
      >
        Envoyer
      </button>
    </form>
  )
}
