import { useForm, ValidationError } from "@formspree/react"
import { useState } from "react"
import ReCAPTCHA from 'react-google-recaptcha'

export function ContactForm() {
    const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_KEY)
    const [captchaValid, setCaptchaValid] = useState(false)
    
    const handleCaptchaChange = (value: string | null) => {
        if (value) {
          setCaptchaValid(true)
        }
      }

    if (state.succeeded)
        return <p>Thanks for joining!</p>
    
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_PUBLIC_KEY}
            onChange={handleCaptchaChange}
        />
        <button type="submit" disabled={state.submitting || !captchaValid}>
          Submit
        </button>
      </form>
    )
  }
  