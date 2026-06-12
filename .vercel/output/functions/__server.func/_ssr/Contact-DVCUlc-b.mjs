import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { E as EVENT } from "./event-CQKtk3vc.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { P as Phone, I as Instagram, m as Facebook } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "text-center",
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs uppercase tracking-[0.3em] text-primary", children: "Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl text-foreground sm:text-5xl", children: [
            "Have a question? ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "We're here." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground", children: "Reach out for partnerships, press, or anything you need before the workshop." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.ul,
      {
        className: "mt-12 grid gap-4 sm:grid-cols-3",
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.15 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }), label: "Phone", value: EVENT.contact.phone, href: `tel:${EVENT.contact.phone.replace(/\s/g, "")}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-5 w-5" }), label: "Instagram", value: `@${EVENT.contact.instagram}`, href: `https://instagram.com/${EVENT.contact.instagram}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-5 w-5" }), label: "Facebook", value: EVENT.contact.facebook, href: `https://facebook.com/${EVENT.contact.facebook.replace(/\s/g, "")}` })
        ]
      }
    )
  ] }) });
}
function ContactCard({ icon, label, value, href }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, target: "_blank", rel: "noreferrer", className: "group flex flex-col items-center gap-4 rounded-2xl glass p-6 text-center transition-colors hover:bg-muted", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-primary-foreground", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 block text-sm text-foreground group-hover:text-gradient-gold", children: value })
    ] })
  ] }) });
}
export {
  Contact
};
