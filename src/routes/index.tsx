import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Javaholics — Specialty Coffee in Fairview, Dublin 3" },
      {
        name: "description",
        content:
          "Javaholics is Fairview's specialty coffee shop on Merville Ave, Dublin 3 — Michelle Java, flat whites, full Irish breakfast, guitars on the wall and views over Fairview. Open daily until 6pm.",
      },
      { property: "og:title", content: "Javaholics — Specialty Coffee in Fairview, Dublin 3" },
      {
        property: "og:description",
        content:
          "Specialty coffee with music in its bones. 4.5 stars from 415+ reviews at 1B Merville Ave, Fairview, Dublin.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const menu = [
  { name: "Michelle Java", note: "House signature. Our own build, poured all day." },
  { name: "Roadworks — Coffee of the Day", note: "A rotating single origin, whatever we're excited about." },
  { name: "Flat White", note: "Double shot, tight micro-foam, no compromise." },
  { name: "Americano w/ Hot Milk", note: "Long, clean and warm. The Fairview morning standard." },
  { name: "Full Irish Breakfast", note: "The proper plate. Served all morning." },
  { name: "Fresh Fruit Pancakes", note: "Stacked, seasonal fruit, maple." },
  { name: "Frozen Coffee", note: "For the days Dublin decides to behave." },
  { name: "Carrot Cake + Americano", note: "The afternoon pairing regulars order twice." },
];

const gallery = [
  { src: "/gallery/exterrior.png", caption: "The Bar" },
  { src: "/gallery/bar1.png", caption: "Vinyls" },
  { src: "/gallery/seating.jpg", caption: "Inside" },
  { src: "/gallery/music.png", caption: "Records & Artwork" },
  { src: "/gallery/food.png", caption: "The Kitchen" },
  { src: "/gallery/outdoor.png", caption: "Merville Ave" },
];

const reviews = [
  {
    quote: "If you want to experience the best coffee in D3, you should definitely drop by. It's my absolute favourite cafe in Dublin.",
    author: "Y",
  },
  {
    quote: "This coffee is my most absolute favourite in all of Dublin, overlooking beautiful views of Fairview with outdoor seating perfect for summer.",
    author: "Sandra",
  },
  {
    quote: "A lovely coffee shop with a warm and cozy atmosphere. Their vanilla latte is absolutely delicious.",
    author: "Özkan",
  },
];

function Index() {
  return (
    <div id="top" className="bg-charcoal overflow-x-hidden">
      <SiteHeader />

      {/* HERO */}
      <section className="grain relative flex min-h-[100svh] items-end overflow-hidden">
        <img
          src="gallery/Interrior.png"
          alt="Inside Javaholics: the espresso bar, window seating and guitars on the wall"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/40" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-24">
          <Reveal>
            <p className="eyebrow text-gold">Fairview · Dublin 3</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.1] text-cream sm:text-6xl lg:text-7xl">
              Specialty coffee.
              <br />
              Fairview character.
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/70 sm:mt-6 sm:text-base">
              Carefully pulled espresso, proper food and guitars on the wall — a Dublin 3 coffee
              room that runs on records as much as it runs on beans.
            </p>

            <div className="mt-8 flex flex-col items-start gap-5 sm:mt-10 sm:flex-row sm:items-center sm:gap-10">
              <a href="#menu" className="btn-outline-gold inline-block w-full text-center px-6 py-3 sm:w-auto">
                View Menu
              </a>
              <div className="flex w-full items-center justify-start gap-3 border-l border-gold/40 pl-4 sm:w-auto">
                <span className="font-mono text-lg font-bold text-cream">4.5</span>
                <span className="text-gold">★</span>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-cream/60 sm:text-[0.6875rem]">
                  415+ Google reviews
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-cream py-16 text-charcoal sm:py-28 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <p className="eyebrow text-charcoal/60">Who we are</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:mt-5 sm:text-4xl lg:text-5xl">
              Fairview's favourite room for coffee and records.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-charcoal/75 sm:mt-8 sm:space-y-5 sm:text-base">
              <p>
                Javaholics sits on Merville Ave, a step off the green in Fairview. We opened to do
                one thing properly: specialty coffee, made with care, served without ceremony. The
                Michelle Java and the Roadworks coffee of the day carry the counter; the full Irish,
                the pancakes and the carrot cake carry the rest of the day.
              </p>
              <p>
                Music is not decoration here, it's the house temperament — guitars on the wall,
                artwork and records stacked behind the bar, a tech-house pulse kept low enough to
                talk over. Windows look out over Fairview, the outdoor tables catch the afternoon,
                and Ayca and the team know most orders before they're asked.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-charcoal/15 pt-6 sm:mt-10 sm:flex sm:gap-x-10">
              {[
                ["Open", "Daily until 6pm"],
                ["Price", "€1–10 pp"],
                ["Seating", "In & outdoor"],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-charcoal/50">
                    {k}
                  </p>
                  <p className="mt-1 font-mono text-xs font-medium text-charcoal sm:text-sm">{v}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="img-zoom relative mt-4 lg:mt-0">
            <img
              src="/gallery/guitar.png"
              alt="Guitars, framed music artwork and vinyl on the wall inside Javaholics"
              loading="lazy"
              width={1200}
              height={1408}
              className="h-full w-full object-cover"
            />
            <span className="pointer-events-none absolute inset-0 border border-charcoal/15" />
          </Reveal>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="bg-charcoal py-16 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-gold">On the menu</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-cream sm:mt-5 sm:text-4xl lg:text-5xl">
              What we pour
            </h2>
          </Reveal>

          <ul className="mt-10 grid gap-x-16 sm:mt-14 sm:grid-cols-2">
            {menu.map((item, i) => (
              <Reveal as="li" key={item.name} delay={i * 60}>
                <a
                  href="#location"
                  className="group block border-t border-gold/25 py-5 sm:py-7"
                >
                  <span className="flex items-start justify-between gap-4 sm:items-baseline sm:gap-6">
                    <span className="relative font-display text-base font-semibold text-cream sm:text-lg lg:text-xl">
                      {item.name}
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-[width] duration-500 group-hover:w-full" />
                    </span>
                    <span className="shrink-0 pt-1 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-gold/70 sm:pt-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <span className="mt-2 block max-w-sm text-xs leading-relaxed text-cream/55 sm:text-sm">
                    {item.note}
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-10 border-t border-gold/25 pt-8 sm:mt-14 sm:pt-10">
            <p className="text-xs text-cream/55 sm:text-sm">
              Full menu on the board, in the shop. Everything is made to order.
            </p>
          </Reveal>
        </div>
      </section>

      {/* THE SPACE */}
      <section className="bg-cream py-16 text-charcoal sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-charcoal/60">The space</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:mt-5 sm:text-4xl lg:text-5xl">
              A dark room, a bright window, a good record on.
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-10 max-w-7xl columns-1 gap-4 px-5 sm:mt-14 sm:columns-2 lg:columns-3 sm:px-8">
          {gallery.map((g, i) => (
            <Reveal
              as="figure"
              key={g.caption}
              delay={i * 70}
              className="img-zoom group relative mb-4 inline-block w-full break-inside-avoid overflow-hidden"
            >
              <img
                src={g.src}
                alt={g.caption}
                loading="lazy"
                className="block w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <figcaption className="absolute bottom-0 left-0 bg-charcoal/80 px-3 py-2 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-gold backdrop-blur-sm sm:text-[0.625rem]">
                {g.caption}
              </figcaption>
            </Reveal>
          ))}
        </div>

        {/* INSTAGRAM BUTTON ADDED HERE */}
        <Reveal className="mt-12 flex justify-center sm:mt-16">
          <a
            href="https://www.instagram.com/javaholics/"
            target="_blank"
            rel="noreferrer"
            className="btn-outline-gold flex items-center gap-3 px-6 py-3 text-sm text-charcoal border-charcoal hover:bg-charcoal hover:text-gold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Follow @javaholics
          </a>
        </Reveal>
      </section>

      {/* REVIEWS */}
      <section className="bg-cream pb-16 text-charcoal sm:pb-28 lg:pb-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="flex flex-col gap-4 border-t border-charcoal/15 pt-12 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:pt-16">
            <div>
              <p className="eyebrow text-charcoal/60">Word around D3</p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:mt-5 sm:text-4xl">
                415+ reviews, 4.5 stars
              </h2>
            </div>
            <p className="text-xs text-charcoal/60 sm:text-sm">Google reviews, Fairview, Dublin 3</p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal as="article" key={r.author} delay={i * 90} className="h-full">
                <div className="flex h-full flex-col justify-between border border-gold/50 p-6 transition-colors duration-500 hover:bg-charcoal/[0.03] sm:p-7">
                  <p className="text-gold text-lg" aria-hidden="true">
                    ★★★★★
                  </p>
                  <blockquote className="mt-4 text-sm leading-relaxed text-charcoal/85 sm:mt-5">
                    “{r.quote}”
                  </blockquote>
                  <p className="mt-6 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-charcoal/50 sm:mt-7">
                    — {r.author}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="bg-charcoal py-16 sm:py-28 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow text-gold">Find us</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-cream sm:mt-5 sm:text-4xl lg:text-5xl">
              1B Merville Ave, Fairview
            </h2>

            <dl className="mt-10 space-y-6 sm:mt-12 sm:space-y-8">
              <div className="border-t border-gold/25 pt-4 sm:pt-5">
                <dt className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-gold">Address</dt>
                <dd className="mt-2 text-sm leading-relaxed text-cream/75">
                  1B Merville Ave, Fairview
                  <br />
                  Dublin, D03 A9W0, Ireland
                </dd>
              </div>
              <div className="border-t border-gold/25 pt-4 sm:pt-5">
                <dt className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-gold">Phone</dt>
                <dd className="mt-2 font-mono text-sm text-cream/75">
                  <a href="tel:+35318186747" className="transition-colors hover:text-gold">
                    +353 1 818 6747
                  </a>
                </dd>
              </div>
              <div className="border-t border-gold/25 pt-4 sm:pt-5">
                <dt className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-gold">Hours</dt>
                <dd className="mt-2 text-sm text-cream/75">Open daily · Closes 6:00 PM</dd>
              </div>
            </dl>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Javaholics%2C%201B%20Merville%20Ave%2C%20Fairview%2C%20Dublin%2C%20D03%20A9W0"
              target="_blank"
              rel="noreferrer"
              className="btn-outline-gold mt-10 inline-block w-full text-center px-6 py-3 sm:mt-12 sm:w-auto"
            >
              Get Directions
            </a>
          </Reveal>

          <Reveal delay={120} className="relative min-h-[300px] lg:min-h-full">
            <iframe
              title="Map showing Javaholics at 1B Merville Ave, Fairview, Dublin"
              src="https://www.google.com/maps?q=1B%20Merville%20Ave%2C%20Fairview%2C%20Dublin%2C%20D03%20A9W0&output=embed"
              loading="lazy"
              className="h-full min-h-[300px] w-full grayscale-[0.6] contrast-[1.05]"
            />
            <span className="pointer-events-none absolute inset-0 border border-gold/30" />
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-charcoal py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-center text-center gap-8 sm:flex-row sm:items-start sm:justify-between sm:text-left">
            <p className="font-display text-sm uppercase tracking-[0.34em] text-cream">
              Javaholics
            </p>
            <div className="space-y-2 text-xs text-cream/60 sm:text-sm sm:text-right">
              <p>1B Merville Ave, Fairview, Dublin, D03 A9W0</p>
              <p>
                <a href="tel:+35318186747" className="transition-colors hover:text-gold">
                  +353 1 818 6747
                </a>
              </p>
              {/* INSTAGRAM LINK ADDED HERE */}
              <p>
                <a
                  href="https://www.instagram.com/javaholics/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  Instagram
                </a>
              </p>
              <p className="pt-2">Open daily until 6pm</p>
            </div>
          </div>
          <p className="mt-10 border-t border-border pt-6 text-center font-mono text-[0.625rem] uppercase tracking-[0.12em] text-cream/40 sm:mt-12 sm:text-left">
            © 2026 Javaholics. All rights reserved.
          </p>
        </div>
      </footer>   </div>
  );
}