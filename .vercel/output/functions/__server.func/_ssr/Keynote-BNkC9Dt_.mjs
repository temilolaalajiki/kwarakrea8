import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const url = "/__l5e/assets-v1/587f1534-757a-4e93-bb06-23a8ac7ac5a3/minister-keynote.mp4";
const videoAsset = {
  url
};
function Keynote() {
  const containerRef = reactExports.useRef(null);
  const videoRef = reactExports.useRef(null);
  const [inView, setInView] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "keynote", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "mx-auto max-w-2xl text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs uppercase tracking-[0.3em] text-primary", children: "Special Keynote Speaker" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl text-foreground sm:text-5xl", children: [
            "Featuring the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Honourable Minister" }),
            " of Art, Culture, Tourism and Creative Economy"
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid gap-10 lg:grid-cols-5 lg:items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          ref: containerRef,
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "lg:col-span-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-3xl glass shadow-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video w-full bg-muted", children: inView && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "video",
              {
                ref: videoRef,
                src: videoAsset.url,
                controls: true,
                autoPlay: true,
                muted: true,
                loop: true,
                preload: "metadata",
                playsInline: true,
                className: "h-full w-full object-cover"
              }
            ) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 text-center lg:text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-foreground sm:text-3xl", children: "Hannatu Musa Musawa" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs uppercase tracking-[0.18em] text-primary", children: "Honourable Minister of Art, Culture, Tourism and Creative Economy" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: 0.1 },
          className: "lg:col-span-2",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-base leading-relaxed text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "We are honoured to welcome",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Hannatu Musa Musawa" }),
              ", Honourable Minister of Art, Culture, Tourism and Creative Economy, as a keynote speaker at Kwara Kre8ives 2.0."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Her leadership and commitment to advancing Nigeria's creative economy continue to inspire and create opportunities for young creators, innovators, and entrepreneurs across the country. Her participation reflects the shared vision of empowering creative talents through innovation, skills development, collaboration, and access to opportunities within the creative industry." })
          ] })
        }
      )
    ] })
  ] }) });
}
export {
  Keynote
};
