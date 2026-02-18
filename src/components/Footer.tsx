import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import companylogo from "../assets/primary-logo.png";
import linkedin from "../assets/icons/mdi_linkedin.png";
import twitter from "../assets/icons/prime_twitter.png";
import instagram from "../assets/icons/mdi_instagram.png";

const Footer = () => {
  const container: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-white via-[#f9f3ef] to-[#f5ede4] pt-20 font-DM-Sans">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-[#f6e4d5]/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#f2d9c2]/30 blur-3xl" />

      <motion.div
        className="relative mx-auto max-w-300 px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Main content grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand Section */}
          <motion.div variants={item} className="space-y-4">
            <div>
              <img
                src={companylogo}
                alt="ProVision CIC"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm leading-7 text-[#2e2a28]">
              Empowering individuals through supported living and person-centred
              care across Coventry.
            </p>
            <div className="flex gap-3">
              {[linkedin, twitter, instagram].map((icon, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="rounded-lg bg-primary-100 p-2 shadow-[0_8px_16px_rgba(147,71,19,0.15)] transition"
                >
                  <img src={icon} alt="" className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-sm font-semibold text-[#3f2b1d]">Explore</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/support" },
                { label: "Events", href: "/events" },
                { label: "Community", href: "/support" },
              ].map((link, index) => (
                <li key={link.href + index}>
                  <Link
                    to={link.href}
                    className="text-[#5a2d0f] transition hover:text-primary-100 hover:translate-x-1 inline-block"
                  >
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal & Support */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-sm font-semibold text-[#3f2b1d]">Support</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "FAQ", href: "/faq" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/termsandcondition" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-[#5a2d0f] transition hover:text-primary-100 hover:translate-x-1 inline-block"
                  >
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter CTA */}
          <motion.div variants={item} className="space-y-4 lg:col-span-1">
            <h3 className="text-sm font-semibold text-[#3f2b1d]">
              Stay Connected
            </h3>
            <p className="text-xs leading-relaxed text-[#2e2a28]">
              Get updates on new services, events, and community stories.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl border border-[#edd8c1] bg-white/80 px-4 py-2.5 text-xs placeholder:text-[#7a3f14]/60 focus:border-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-100/20 transition"
              />
              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-xl bg-primary-100 px-4 py-2.5 text-xs font-semibold text-white shadow-[0_12px_24px_rgba(147,71,19,0.25)] transition hover:shadow-[0_16px_32px_rgba(147,71,19,0.3)]"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={item}
          className="my-8 h-px bg-linear-to-r from-transparent via-[#edd8c1] to-transparent"
        />

        {/* Bottom Section */}
        <motion.div
          variants={item}
          className="flex flex-col items-center justify-between gap-4 pb-8 text-center text-xs text-[#5a2d0f]/70 md:flex-row md:text-left"
        >
          <p>© 2026 ProVision CIC. Creating pathways to independent living.</p>
          <p className="text-primary-100 font-medium">
            Committed to Community, Compassion & Care
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
