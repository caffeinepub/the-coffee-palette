import {
  Armchair,
  ChefHat,
  ChevronDown,
  Clock,
  Coffee,
  ExternalLink,
  Heart,
  Instagram,
  MapPin,
  Menu,
  Palette,
  Phone,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Specials", href: "#specials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit Us", href: "#visit" },
  { label: "Contact", href: "#contact" },
];

const FEATURES = [
  {
    icon: Coffee,
    title: "Artisan Coffee",
    desc: "Single-origin beans, expertly roasted and brewed with latte art that's almost too beautiful to drink.",
  },
  {
    icon: ChefHat,
    title: "Creative Kitchen",
    desc: "From handcrafted pizzas to fusion bites, our kitchen turns every plate into a culinary canvas.",
  },
  {
    icon: Palette,
    title: "Artistic Ambiance",
    desc: "Rotating art on the walls, warm Edison lighting, and interiors inspired by a painter's atelier.",
  },
  {
    icon: Armchair,
    title: "Cozy Spaces",
    desc: "Whether you're solo, with friends, or on a date — there's a perfectly curated corner waiting for you.",
  },
  {
    icon: Heart,
    title: "Local Love",
    desc: "Proudly rooted in Gomti Nagar, celebrating Lucknow's spirit in every cup and every dish we serve.",
  },
];

const REVIEWS = [
  {
    name: "Priya S.",
    initials: "PS",
    color: "bg-[oklch(0.72_0.1_65)]" as const,
    review:
      "The coffee here is absolutely divine! The latte art is stunning and every sip feels like a warm hug. My go-to cafe in Lucknow!",
    stars: 5,
  },
  {
    name: "Rahul M.",
    initials: "RM",
    color: "bg-[oklch(0.55_0.09_58)]" as const,
    review:
      "Four Season Pizza is a must-try! The ambiance is perfect for both work and catching up with friends. Absolutely love this place.",
    stars: 5,
  },
  {
    name: "Anika T.",
    initials: "AT",
    color: "bg-[oklch(0.38_0.07_48)]" as const,
    review:
      "Love the artistic vibe of this place. It's like a gallery and a cafe rolled into one beautiful experience. Highly recommended!",
    stars: 5,
  },
];

const HOURS = [
  { day: "Monday", hours: "11:00 AM – 11:00 PM" },
  { day: "Tuesday", hours: "11:00 AM – 11:00 PM" },
  { day: "Wednesday", hours: "11:00 AM – 11:00 PM" },
  { day: "Thursday", hours: "11:00 AM – 11:00 PM" },
  { day: "Friday", hours: "11:00 AM – 11:00 PM" },
  { day: "Saturday", hours: "11:00 AM – 11:00 PM" },
  { day: "Sunday", hours: "11:00 AM – 11:00 PM" },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }, (_, i) => i).map((val) => (
        <Star key={val} className="w-4 h-4 fill-bronze text-bronze" />
      ))}
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen">
      {/* DEMO CONCEPT BADGE */}
      <div className="fixed top-4 right-4 z-[100] bg-coffee-dark text-bronze-light font-sans text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border border-bronze/40 shadow-warm-lg pointer-events-none">
        Demo Concept
      </div>

      {/* NAVBAR */}
      <nav
        data-ocid="nav.section"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream-light/95 backdrop-blur-sm shadow-warm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Wordmark */}
            <button
              type="button"
              data-ocid="nav.link"
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-2 group"
            >
              <Coffee
                className={`w-6 h-6 transition-colors ${
                  scrolled ? "text-coffee-dark" : "text-bronze-light"
                }`}
              />
              <span
                className={`font-serif font-bold text-sm md:text-base tracking-widest uppercase transition-colors ${
                  scrolled ? "text-coffee-dark" : "text-cream-light"
                }`}
              >
                The Coffee Palette
              </span>
            </button>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  data-ocid="nav.link"
                  onClick={() => scrollTo(link.href)}
                  className={`font-sans text-xs font-semibold uppercase tracking-widest transition-colors hover:text-bronze ${
                    scrolled ? "text-foreground" : "text-cream-light"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                data-ocid="nav.primary_button"
                onClick={() => scrollTo("#specials")}
                className="hidden md:block bg-bronze hover:bg-bronze-light text-cream-light font-sans text-xs font-semibold uppercase tracking-widest px-4 py-2.5 rounded transition-colors"
              >
                Explore Menu
              </button>
              <button
                type="button"
                data-ocid="nav.toggle"
                className={`md:hidden p-2 ${
                  scrolled ? "text-foreground" : "text-cream-light"
                }`}
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-cream-light border-t border-border overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <button
                    type="button"
                    key={link.label}
                    data-ocid="nav.link"
                    onClick={() => scrollTo(link.href)}
                    className="text-left font-sans text-xs font-semibold uppercase tracking-widest text-foreground py-2 border-b border-border last:border-0 hover:text-bronze transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  type="button"
                  data-ocid="nav.primary_button"
                  onClick={() => scrollTo("#specials")}
                  className="mt-2 bg-bronze hover:bg-bronze-light text-cream-light font-sans text-xs font-semibold uppercase tracking-widest px-4 py-3 rounded transition-colors"
                >
                  Explore Menu
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <section
        id="home"
        data-ocid="hero.section"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-coffee.dim_1200x600.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/65" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-bronze-light text-xs font-semibold uppercase tracking-[0.3em] mb-4"
          >
            Gomti Nagar, Lucknow
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-cream-light leading-tight mb-5"
          >
            The Coffee Palette
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-serif text-xl sm:text-2xl italic text-cream-light/85 mb-10"
          >
            Where Every Cup Tells a Story
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              type="button"
              data-ocid="hero.primary_button"
              onClick={() => scrollTo("#specials")}
              className="bg-bronze hover:bg-bronze-light text-cream-light font-sans text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded transition-colors"
            >
              Explore Our Menu
            </button>
            <button
              type="button"
              data-ocid="hero.secondary_button"
              onClick={() => scrollTo("#about")}
              className="bg-coffee-darker hover:bg-coffee-dark border border-cream-light/20 text-cream-light font-sans text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded transition-colors"
            >
              Our Story
            </button>
          </motion.div>
        </div>
        <button
          type="button"
          data-ocid="hero.toggle"
          onClick={() => scrollTo("#about")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream-light/70 hover:text-cream-light transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        data-ocid="about.section"
        className="py-20 md:py-28 bg-cream-light"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-warm-lg">
                <img
                  src="/assets/generated/cafe-interior.dim_800x600.jpg"
                  alt="Cafe interior at The Coffee Palette"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-bronze text-cream-light font-serif text-4xl font-bold w-20 h-20 flex items-center justify-center rounded-sm shadow-warm">
                <Coffee className="w-8 h-8" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-bronze mb-3">
                About Us
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-dark leading-tight mb-6">
                A Canvas of Flavors in the Heart of Lucknow
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Nestled in the vibrant lanes of Gomti Nagar, The Coffee Palette
                was born from a simple belief — that a cafe should be more than
                a place to eat. It should inspire. From the moment you step in,
                you're surrounded by rotating local artwork, the rich aroma of
                freshly brewed single-origin coffee, and a menu that treats
                every dish as a masterpiece.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our chefs and baristas are artisans in their own right —
                blending global techniques with Lucknowi warmth to create
                experiences that linger long after the last sip. Whether you're
                here for a quiet morning brew, a creative work session, or a
                memorable meal with loved ones, The Coffee Palette is your
                canvas.
              </p>
              <button
                type="button"
                data-ocid="about.primary_button"
                onClick={() => scrollTo("#specials")}
                className="bg-coffee-dark hover:bg-coffee-darker text-cream-light font-sans text-xs font-semibold uppercase tracking-widest px-6 py-3 rounded transition-colors"
              >
                Discover What We Offer
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US SPECIAL */}
      <section
        id="specials"
        data-ocid="specials.section"
        className="py-20 md:py-28 bg-background"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-bronze mb-3">
              Our Signature
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-dark">
              What Makes Us Special
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {FEATURES.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                data-ocid={`specials.card.${i + 1}`}
                className="bg-cream-light border border-border rounded-sm p-6 text-center hover:shadow-warm transition-shadow group"
              >
                <div className="w-14 h-14 rounded-full bg-bronze/15 group-hover:bg-bronze/25 transition-colors flex items-center justify-center mx-auto mb-4">
                  <feat.icon className="w-6 h-6 text-bronze" />
                </div>
                <h3 className="font-serif font-bold text-coffee-dark text-base mb-2">
                  {feat.title}
                </h3>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ITEM */}
      <section
        id="menu"
        data-ocid="menu.section"
        className="py-20 md:py-28 bg-coffee-dark text-cream-light"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-bronze mb-3">
                Spotlight
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight mb-4">
                Four Season Pizza
              </h2>
              <p className="text-cream-light/75 leading-relaxed mb-4">
                A culinary ode to the four seasons — each quarter of our
                signature pizza is crowned with the best of its season. Spring's
                fresh garden greens and bocconcini, Summer's sun-ripened cherry
                tomatoes and basil, Autumn's earthy mushrooms and caramelised
                onions, and Winter's rich truffle oil and parmesan shavings —
                all on a hand-stretched, wood-fired crust.
              </p>
              <p className="text-cream-light/60 text-sm leading-relaxed mb-8">
                A feast for all four senses. Available in regular and large.
              </p>
              <div className="flex items-center gap-6">
                <span className="font-serif text-3xl font-bold text-bronze">
                  ₹399
                </span>
                <button
                  type="button"
                  data-ocid="menu.primary_button"
                  className="bg-bronze hover:bg-bronze-light text-cream-light font-sans text-xs font-semibold uppercase tracking-widest px-6 py-3 rounded transition-colors"
                >
                  Order Now
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="aspect-[4/3] overflow-hidden rounded-sm shadow-warm-lg"
            >
              <img
                src="/assets/generated/four-season-pizza.dim_800x600.jpg"
                alt="Four Season Pizza at The Coffee Palette"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section
        id="reviews"
        data-ocid="reviews.section"
        className="py-20 md:py-28 bg-background"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-bronze mb-3">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-dark">
              Guests Say It Best
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                data-ocid={`reviews.item.${i + 1}`}
                className="bg-cream-light border border-border rounded-sm p-8 flex flex-col gap-4 hover:shadow-warm transition-shadow"
              >
                <StarRating count={review.stars} />
                <p className="font-sans text-sm text-muted-foreground leading-relaxed italic flex-1">
                  &ldquo;{review.review}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <div
                    className={`${review.color} w-10 h-10 rounded-full flex items-center justify-center text-cream-light font-sans text-xs font-bold`}
                  >
                    {review.initials}
                  </div>
                  <span className="font-serif font-semibold text-coffee-dark text-sm">
                    {review.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        data-ocid="gallery.section"
        className="py-20 md:py-28 bg-cream-light"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-bronze mb-3">
              Our World
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-dark">
              A Glimpse Inside
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {
                src: "/assets/generated/hero-coffee.dim_1200x600.jpg",
                alt: "Artisan coffee at The Coffee Palette",
              },
              {
                src: "/assets/generated/four-season-pizza.dim_800x600.jpg",
                alt: "Four Season Pizza",
              },
              {
                src: "/assets/generated/cafe-interior.dim_800x600.jpg",
                alt: "Cafe interior",
              },
              {
                src: "/assets/generated/cafe-painting.dim_800x600.jpg",
                alt: "Art at the cafe",
              },
            ].map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                data-ocid={`gallery.item.${i + 1}`}
                className="aspect-square overflow-hidden rounded-sm shadow-warm group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT US */}
      <section
        id="visit"
        data-ocid="visit.section"
        className="py-20 md:py-28 bg-background"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-bronze mb-3">
              Find Us
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-dark">
              Visit Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Address + Hours */}
            <div className="space-y-8">
              <div className="bg-cream-light border border-border rounded-sm p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-bronze mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-bold text-coffee-dark mb-1">
                      Our Address
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      3/545, Vivek Khand 2, Gomti Nagar
                      <br />
                      Lucknow, Uttar Pradesh 226010
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-cream-light border border-border rounded-sm p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Clock className="w-5 h-5 text-bronze mt-0.5 flex-shrink-0" />
                  <h3 className="font-serif font-bold text-coffee-dark">
                    Opening Hours
                  </h3>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {HOURS.map((row) => (
                      <tr
                        key={row.day}
                        className="border-b border-border last:border-0"
                      >
                        <td className="py-2 font-sans font-medium text-foreground">
                          {row.day}
                        </td>
                        <td className="py-2 text-right text-muted-foreground">
                          {row.hours}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="font-sans text-xs text-muted-foreground mt-3 italic">
                  * Hours may vary on public holidays.
                </p>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="bg-cream-light border border-border rounded-sm overflow-hidden shadow-warm">
              <div className="h-64 md:h-80 bg-gradient-to-br from-[oklch(0.88_0.025_65)] to-[oklch(0.82_0.04_60)] relative flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, oklch(0.66 0.1 62 / 0.3) 0px, oklch(0.66 0.1 62 / 0.3) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, oklch(0.66 0.1 62 / 0.3) 0px, oklch(0.66 0.1 62 / 0.3) 1px, transparent 1px, transparent 40px)",
                  }}
                />
                <div className="text-center relative z-10">
                  <div className="w-12 h-12 rounded-full bg-bronze flex items-center justify-center mx-auto mb-3 shadow-warm">
                    <MapPin className="w-6 h-6 text-cream-light" />
                  </div>
                  <p className="font-serif font-bold text-coffee-dark text-lg mb-1">
                    The Coffee Palette
                  </p>
                  <p className="font-sans text-xs text-muted-foreground">
                    Gomti Nagar, Lucknow
                  </p>
                </div>
              </div>
              <div className="p-4 flex justify-center">
                <a
                  data-ocid="visit.primary_button"
                  href="https://www.google.com/maps/search/The+Coffee+Palette+3+545+Vivek+Khand+2+Gomti+Nagar+Lucknow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-coffee-dark hover:bg-coffee-darker text-cream-light font-sans text-xs font-semibold uppercase tracking-widest px-6 py-2.5 rounded transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        data-ocid="contact.section"
        className="py-20 md:py-28 bg-bronze/10"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-bronze mb-3">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-dark mb-5">
            We'd Love to Hear From You
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Drop by for a coffee, make a reservation, or just say hello on
            Instagram. We're always happy to welcome a new face into our
            palette.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              data-ocid="contact.primary_button"
              href="https://wa.me/918090753057"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-bronze hover:bg-bronze-light text-cream-light font-sans text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call / WhatsApp
            </a>
            <a
              data-ocid="contact.secondary_button"
              href="https://www.instagram.com/__thecoffeepalette__?igsh=MWwzM2xodGk3M2E4eQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-coffee-dark hover:bg-coffee-darker text-cream-light font-sans text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded transition-colors"
            >
              <Instagram className="w-4 h-4" />
              Follow on Instagram
            </a>
          </div>
          <p className="mt-6 font-sans text-xs text-muted-foreground">
            Or call us directly at{" "}
            <a href="tel:+918090753057" className="text-bronze hover:underline">
              +91 80907 53057
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        data-ocid="footer.section"
        className="bg-coffee-darker text-cream-light py-14 md:py-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="w-6 h-6 text-bronze" />
                <span className="font-serif font-bold text-lg tracking-widest uppercase">
                  The Coffee Palette
                </span>
              </div>
              <p className="font-serif italic text-cream-light/70 text-sm mb-5">
                Where Every Cup Tells a Story
              </p>
              <p className="font-sans text-xs text-cream-light/55 leading-relaxed">
                3/545, Vivek Khand 2, Gomti Nagar
                <br />
                Lucknow, UP 226010
              </p>
            </div>
            {/* Nav */}
            <div>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-bronze mb-5">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      data-ocid="footer.link"
                      onClick={() => scrollTo(link.href)}
                      className="font-sans text-sm text-cream-light/70 hover:text-cream-light transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* Social + Hours */}
            <div>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-bronze mb-5">
                Connect
              </h4>
              <div className="flex gap-4 mb-6">
                <a
                  data-ocid="footer.link"
                  href="https://www.instagram.com/__thecoffeepalette__?igsh=MWwzM2xodGk3M2E4eQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-cream-light/20 flex items-center justify-center text-cream-light/70 hover:text-cream-light hover:border-bronze transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  data-ocid="footer.link"
                  href="https://wa.me/918090753057"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-cream-light/20 flex items-center justify-center text-cream-light/70 hover:text-cream-light hover:border-bronze transition-colors"
                  aria-label="WhatsApp"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
              <p className="font-sans text-xs text-cream-light/55 leading-relaxed">
                Open Daily
                <br />
                11:00 AM – 11:00 PM
                <br />
                <span className="italic">*Hours may vary on holidays</span>
              </p>
            </div>
          </div>
          <div className="border-t border-cream-light/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-light/40 font-sans">
            <p>
              © {new Date().getFullYear()} The Coffee Palette. All rights
              reserved. | Concept Website.
            </p>
            <p>
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bronze/70 hover:text-bronze transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
