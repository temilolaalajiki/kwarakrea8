import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { X } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function GalleryLightbox({ loader, fallback, onClose }) {
  const [src, setSrc] = reactExports.useState(fallback);
  reactExports.useEffect(() => {
    let cancelled = false;
    if (loader) {
      loader().then((full) => {
        if (!cancelled) setSrc(full);
      });
    }
    return () => {
      cancelled = true;
    };
  }, [loader]);
  reactExports.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: onClose,
      className: "fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { scale: 0.95 },
          animate: { scale: 1 },
          exit: { scale: 0.95 },
          onClick: (e) => e.stopPropagation(),
          className: "relative w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-background",
          children: [
            src && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src,
                alt: "Kwara Kre8ives gallery",
                className: "h-auto max-h-[85vh] w-full object-contain"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: onClose,
                className: "absolute right-3 top-3 rounded-full glass-strong p-2 text-white",
                "aria-label": "Close",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
              }
            )
          ]
        }
      )
    }
  ) });
}
export {
  GalleryLightbox
};
