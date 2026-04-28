import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-moss-800 text-sand-50 px-8 py-16 md:p-20 shadow-soft"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "url('/images/showcase-wide.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(31,54,28,0.92) 0%, rgba(47,85,39,0.85) 100%)",
            }}
          />

          <div className="relative grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-sand-200/80">
                Free estimates
              </div>
              <h2 className="mt-3 font-display text-4xl md:text-6xl leading-[1.05] tracking-[-0.02em]">
                Let's give your yard the season it deserves.
              </h2>
              <p className="mt-6 max-w-lg text-sand-100/85">
                Tell us a little about your property and we'll get back the
                same day with a fair, transparent quote — no obligation.
              </p>

              <dl className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 mt-0.5 text-sand-200" />
                  <div>
                    <dt className="text-sand-200/70 text-xs uppercase tracking-wider">
                      Call or text
                    </dt>
                    <dd className="font-medium">(703) 555-0142</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 mt-0.5 text-sand-200" />
                  <div>
                    <dt className="text-sand-200/70 text-xs uppercase tracking-wider">
                      Email
                    </dt>
                    <dd className="font-medium">harold@guzmanlandscaping.com</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-sand-200" />
                  <div>
                    <dt className="text-sand-200/70 text-xs uppercase tracking-wider">
                      Service area
                    </dt>
                    <dd className="font-medium">Lake Ridge & NoVA</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 mt-0.5 text-sand-200" />
                  <div>
                    <dt className="text-sand-200/70 text-xs uppercase tracking-wider">
                      Hours
                    </dt>
                    <dd className="font-medium">Mon–Sat · 7am–6pm</dd>
                  </div>
                </div>
              </dl>
            </div>

            <form
              className="rounded-2xl bg-sand-50 p-6 md:p-8 text-moss-900"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" placeholder="Jane Doe" />
                <Field
                  label="Phone"
                  name="phone"
                  placeholder="(703) 555-0123"
                />
              </div>
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="jane@email.com"
                className="mt-4"
              />
              <div className="mt-4">
                <label className="text-xs font-medium uppercase tracking-wider text-moss-700/80">
                  Service interested in
                </label>
                <select className="mt-1.5 w-full rounded-xl border border-moss-900/15 bg-sand-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-moss-500">
                  <option>Lawn mowing & maintenance</option>
                  <option>Mulch installation</option>
                  <option>Bush & hedge trimming</option>
                  <option>Tree removal</option>
                  <option>Power washing</option>
                  <option>Yard transformation</option>
                  <option>Something else</option>
                </select>
              </div>
              <div className="mt-4">
                <label className="text-xs font-medium uppercase tracking-wider text-moss-700/80">
                  Tell us about your yard
                </label>
                <textarea
                  rows={4}
                  placeholder="Lot size, current condition, anything we should know..."
                  className="mt-1.5 w-full rounded-xl border border-moss-900/15 bg-sand-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-moss-500 resize-none"
                />
              </div>
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-moss-800 hover:bg-moss-900 px-6 py-3.5 text-sm font-medium text-sand-50 transition-colors"
              >
                Request my free estimate
              </button>
              <p className="mt-3 text-center text-xs text-moss-700/70">
                We typically reply within a few hours, often the same day.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="text-xs font-medium uppercase tracking-wider text-moss-700/80"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-moss-900/15 bg-sand-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-moss-500"
      />
    </div>
  );
}
