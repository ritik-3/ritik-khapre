export function ContactSection() {
  return (
    <section id="contact" className="mt-14">
      <h2 className="text-lg font-semibold tracking-tight">Contact</h2>
      <p className="mt-2 text-sm text-zinc-600">
        This form is configured for Netlify Forms.
      </p>

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
          <span className="text-sm font-medium text-zinc-800">Name</span>
          <input
            className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-900"
            name="name"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-zinc-800">Email</span>
          <input
            className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-900"
            type="email"
            name="email"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-zinc-800">Message</span>
          <textarea
            className="mt-2 min-h-28 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-900"
            name="message"
            required
          />
        </label>

        <button
          className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  )
}
