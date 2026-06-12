import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { E as EVENT } from "./event-CQKtk3vc.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { f as MapPin, W as Wifi, r as Clock, s as Coffee, N as Navigation } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const HIGHLIGHTS = [
  { icon: Wifi, label: "High-speed Wi-Fi" },
  { icon: Clock, label: "Doors open 9:00 AM" },
  { icon: Coffee, label: "Refreshments included" }
];
function Venue() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "venue", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-stretch gap-6 lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -20 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "flex flex-col justify-center rounded-3xl glass p-8 sm:p-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs uppercase tracking-[0.3em] text-primary", children: "The Venue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl text-foreground sm:text-5xl", children: EVENT.venue.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 inline-flex items-center gap-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary" }),
            " ",
            EVENT.venue.address
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: HIGHLIGHTS.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-sm text-foreground/90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 place-items-center rounded-full bg-gradient-gold text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(h.icon, { className: "h-4 w-4" }) }),
            h.label
          ] }, h.label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: EVENT.venue.directionsUrl,
              target: "_blank",
              rel: "noreferrer",
              className: "shine mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.03]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { className: "h-4 w-4" }),
                " Get Directions"
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, x: 20 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "overflow-hidden rounded-3xl border border-border",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "iframe",
          {
            title: "Map of Ilorin Innovation Hub",
            src: EVENT.venue.mapsEmbed,
            loading: "lazy",
            className: "h-full min-h-[360px] w-full",
            referrerPolicy: "no-referrer-when-downgrade"
          }
        )
      }
    )
  ] }) }) });
}
export {
  Venue
};
