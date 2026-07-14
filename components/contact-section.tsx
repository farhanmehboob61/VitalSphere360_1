"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Phone, Mail, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { submitQuote, type QuoteState } from "@/app/actions/submit-quote"

const initialState: QuoteState = { status: "idle" }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" size="lg" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          Sending…
        </>
      ) : (
        "Request My Quote"
      )}
    </Button>
  )
}

const highlights = [
  "Free consultation & live demo",
  "Custom paint & chair configurations",
  "International voltage & plug options",
  "Professional installation & ongoing support",
]

export function ContactSection() {
  const [state, formAction] = useActionState(submitQuote, initialState)
  const submitted = state.status === "success"

  return (
    <section id="contact" className="border-b border-border bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">Get in Touch</p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Request pricing &amp; a personalized demo
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-blue-100">
                Our team is ready to help you take the next step toward enhancing your services and
                improving patient outcomes. Reach out for a quote, financing details, or a demo.
              </p>
            </div>

            <ul className="grid gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-white">
                  <span className="flex size-5 items-center justify-center rounded-full bg-white/20 text-white">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-2 flex flex-col gap-3">
              <a href="tel:+16308127865" className="flex items-center gap-3 text-base font-semibold text-white">
                <Phone className="size-5 text-white" aria-hidden="true" />
                {"+1 (630) 812-7865"}
              </a>
              <a href="mailto:sales@oxygenhealthsystems.com" className="flex items-center gap-3 text-base font-semibold text-white">
                <Mail className="size-5 text-white" aria-hidden="true" />
                sales@oxygenhealthsystems.com
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-7" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-semibold">Thank you!</h3>
                <p className="max-w-sm text-muted-foreground">
                  Your request has been received. A hyperbaric specialist will contact you shortly with
                  pricing and next steps.
                </p>
              </div>
            ) : (
              <form action={formAction} className="grid gap-5">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-white">
                    Your name <span className="text-blue-200">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-white">
                      Email <span className="text-blue-200">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="phone" className="text-sm font-medium text-white">
                      Phone <span className="text-blue-200">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="model" className="text-sm font-medium text-white">
                    Which model are you interested in? <span className="text-blue-200">*</span>
                  </label>
                  <select
                    id="model"
                    name="model"
                    required
                    defaultValue=""
                    className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="" disabled>
                      Select a model…
                    </option>
                    <option value="1 Piece VitalSphere for 1 Person">1 Piece VitalSphere for 1 Person</option>
                    <option value="2 Piece VitalSphere for 1 Person">2 Piece VitalSphere for 1 Person</option>
                    <option value="1 Piece VitalSphere for 2 People">1 Piece VitalSphere for 2 People</option>
                    <option value="2 Piece VitalSphere for 2 People">2 Piece VitalSphere for 2 People</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-white">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your facility and requirements…"
                    className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                {state.status === "error" && (
                  <p className="text-sm font-medium text-destructive" role="alert">
                    {state.message}
                  </p>
                )}
                <SubmitButton />
                <p className="text-center text-xs leading-relaxed text-blue-100">
                  These statements have not been evaluated by the Food and Drug Administration. This
                  product is not intended to diagnose, treat, cure, or prevent any disease.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
