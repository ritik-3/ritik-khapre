import { site } from '../config/site'

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <h2 className="text-lg font-semibold tracking-tight">Contact</h2>
      <p className="mt-2 text-sm text-zinc-300">{site.copy.contactIntro}</p>

      <div className="mt-4 flex flex-col gap-1 text-sm text-zinc-200">
        <a
          className="w-fit text-zinc-100 underline hover:text-white"
          href={`mailto:${site.contact.email}`}
        >
          {site.contact.email}
        </a>
        <a
          className="w-fit text-zinc-100 underline hover:text-white"
          href={`tel:${site.contact.phone.replace(/[^+\d]/g, '')}`}
        >
          {site.contact.phone}
        </a>
      </div>

      <form
        className="mt-6 max-w-xl space-y-4"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />

        <p className="hidden">
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" />
          </label>
        </p>

        <label className="block">
          <span className="text-sm font-medium text-zinc-200">Name</span>
          <input
            className="mt-2 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-400 focus:border-white/25 focus:ring-4 focus:ring-white/10"
            name="name"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-zinc-200">Email</span>
          <input
            className="mt-2 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-400 focus:border-white/25 focus:ring-4 focus:ring-white/10"
            type="email"
            name="email"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-zinc-200">Message</span>
          <textarea
            className="mt-2 min-h-28 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-400 focus:border-white/25 focus:ring-4 focus:ring-white/10"
            name="message"
            required
          />
        </label>

        <button
          className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/20"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  )
}
