import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { Q as Quote } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const TESTIMONIALS = [
  { name: "Aisha O.", role: "Content Creator", text: "Kwara Kre8ives 1.0 changed how I see my craft. I left with skills, a network, and a real plan." },
  { name: "Tunde A.", role: "Photographer", text: "The mentorship was world-class. I booked my first paid gig two weeks after the workshop." },
  { name: "Zainab M.", role: "Social Media Manager", text: "Hands-on, practical, and energising. Exactly what Kwara's creative scene needed." },
  { name: "Emeka I.", role: "Cinematographer", text: "From theory to a working camera setup the same day — it doesn't get more practical than this." }
];
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs uppercase tracking-[0.3em] text-primary", children: "Voices" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl text-foreground sm:text-5xl", children: [
        "From alumni of the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "first edition" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 md:grid-cols-2", children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.figure,
      {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.06 },
        className: "relative rounded-3xl glass p-7 hover-lift",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute right-6 top-6 h-8 w-8 text-primary/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-base leading-relaxed text-foreground/90", children: [
            '"',
            t.text,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-5 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-full bg-gradient-gold font-display text-primary-foreground", children: t.name[0] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground", children: t.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.role })
            ] })
          ] })
        ]
      },
      t.name
    )) })
  ] }) });
}
export {
  Testimonials
};
