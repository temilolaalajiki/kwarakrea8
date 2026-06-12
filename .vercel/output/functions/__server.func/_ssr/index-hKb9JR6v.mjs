import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Logo, T as ThemeToggle, a as cn, u as useServerFn, c as createSsrRpc } from "./ThemeToggle-CeymlSFe.mjs";
import { E as EVENT, a as CLASSES, C as CLASS_NAMES, A as AGE_RANGES } from "./event-CQKtk3vc.mjs";
import { u as useForm } from "../_libs/react-hook-form.mjs";
import { a } from "../_libs/hookform__resolvers.mjs";
import { u as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { c as createServerFn } from "./server-qZdgkNCb.mjs";
import { c as confetti } from "../_libs/canvas-confetti.mjs";
import { R as Root, P as Portal, C as Content, a as Close, T as Title, D as Description, O as Overlay } from "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/seroval.mjs";
import { A as AnimatePresence, m as motion, u as useScroll, a as useInView } from "../_libs/framer-motion.mjs";
import { X, M as Menu, e as Calendar, f as MapPin, U as Users, g as Mic, R as Rocket, H as Hash, h as Megaphone, i as Sparkles, j as Film, V as Video, k as Camera, l as LoaderCircle, P as Phone, I as Instagram, m as Facebook, n as CircleCheck, o as Mail } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType, l as literalType, e as enumType } from "../_libs/zod.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./router-xCYX0l0n.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/lovable.dev__webhooks-js.mjs";
import "./registration-confirmation-C3v6Pogz.mjs";
import "../_libs/react-email__html.mjs";
import "../_libs/react-email__head.mjs";
import "../_libs/react-email__preview.mjs";
import "../_libs/react-email__body.mjs";
import "../_libs/react-email__container.mjs";
import "../_libs/react-email__section.mjs";
import "../_libs/react-email__text.mjs";
import "../_libs/react-email__heading.mjs";
import "../_libs/react-email__hr.mjs";
import "../_libs/lovable.dev__email-js.mjs";
import "../_libs/react-email__render.mjs";
import "../_libs/prettier.mjs";
import "../_libs/html-to-text.mjs";
import "../_libs/selderee__plugin-htmlparser2.mjs";
import "../_libs/selderee.mjs";
import "../_libs/parseley.mjs";
import "../_libs/leac.mjs";
import "../_libs/peberminta.mjs";
import "../_libs/domhandler.mjs";
import "../_libs/domelementtype.mjs";
import "../_libs/htmlparser2.mjs";
import "../_libs/entities.mjs";
import "../_libs/deepmerge.mjs";
import "../_libs/dom-serializer.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      style: { scaleX: scrollYProgress, transformOrigin: "0% 50%" },
      className: "fixed left-0 right-0 top-0 z-[60] h-[2px] bg-gradient-gold"
    }
  );
}
const LINKS = [
  { href: "#about", label: "About" },
  { href: "#classes", label: "Classes" },
  { href: "#register", label: "Register" },
  { href: "#gallery", label: "Gallery" },
  { href: "#venue", label: "Venue" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6",
              scrolled ? "glass-strong rounded-2xl py-2.5" : "py-3"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", className: "flex items-center gap-3", "aria-label": "Kwara Kre8ives home", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { className: "h-9 w-auto" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-7 lg:flex", children: LINKS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: l.href,
                  className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
                  children: l.label
                },
                l.href
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "#register",
                    className: "hidden rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.03] lg:inline-flex",
                    children: "Register Now"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    "aria-label": "Toggle menu",
                    onClick: () => setOpen((v) => !v),
                    className: "rounded-md p-2 text-foreground lg:hidden",
                    children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
                  }
                )
              ] })
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-4 mt-2 rounded-2xl glass-strong p-4 lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col gap-1", children: [
          LINKS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: "rounded-lg px-3 py-2.5 text-sm text-foreground/90 hover:bg-muted",
              children: l.label
            },
            l.href
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#register",
              onClick: () => setOpen(false),
              className: "mt-2 rounded-lg bg-gradient-gold px-3 py-2.5 text-center text-sm font-semibold text-primary-foreground",
              children: "Register Now"
            }
          )
        ] }) })
      ]
    }
  );
}
function LoadingScreen() {
  const [show, setShow] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setShow(false), 450);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.5 },
      className: "fixed inset-0 z-[100] flex items-center justify-center bg-background",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { scale: 0.9, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: { duration: 0.6, ease: "easeOut" },
          className: "flex flex-col items-center gap-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { className: "h-16 w-auto animate-float" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[2px] w-40 overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-1/2 bg-gradient-gold shimmer" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm tracking-[0.3em] text-muted-foreground", children: "LOADING EXPERIENCE" })
          ]
        }
      )
    }
  ) });
}
function FloatingCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: "#register",
      className: "fixed bottom-4 left-1/2 z-40 -translate-x-1/2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold lg:hidden",
      children: "Register Now →"
    }
  );
}
function diff(target) {
  const ms = Math.max(0, target - Date.now());
  const days = Math.floor(ms / 864e5);
  const hours = Math.floor(ms / 36e5 % 24);
  const minutes = Math.floor(ms / 6e4 % 60);
  const seconds = Math.floor(ms / 1e3 % 60);
  return { days, hours, minutes, seconds };
}
function Countdown({ targetISO }) {
  const target = new Date(targetISO).getTime();
  const [mounted, setMounted] = reactExports.useState(false);
  const [t, setT] = reactExports.useState(() => diff(target));
  reactExports.useEffect(() => {
    setMounted(true);
    setT(diff(target));
    const i = setInterval(() => setT(diff(target)), 1e3);
    return () => clearInterval(i);
  }, [target]);
  if (!mounted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2 sm:gap-4", suppressHydrationWarning: true });
  }
  const items = [
    ["Days", t.days],
    ["Hours", t.hours],
    ["Minutes", t.minutes],
    ["Seconds", t.seconds]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2 sm:gap-4", children: items.map(([label, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl px-3 py-4 text-center sm:px-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-gradient-gold tabular-nums sm:text-5xl", children: String(v).padStart(2, "0") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs", children: label })
  ] }, label)) });
}
function Particles({ count = 40 }) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf = 0;
    let w = canvas.width = canvas.offsetWidth * devicePixelRatio;
    let h = canvas.height = canvas.offsetHeight * devicePixelRatio;
    const parts = Array.from({ length: count }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: (Math.random() * 1.6 + 0.4) * devicePixelRatio,
      vx: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
      a: Math.random() * 0.6 + 0.2
    }));
    const onResize = () => {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
    };
    window.addEventListener("resize", onResize);
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [count]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref, className: "pointer-events-none absolute inset-0 h-full w-full", "aria-hidden": true });
}
const fmactceLogo = "/assets/fmactce-ad2JiTtH.png";
const kwsgLogo = "/assets/kwsg-eqkcLuO7.png";
const iihLightLogo = "/assets/iih-light-BihbIHYG.png";
const iihDarkLogo = "/assets/iih-dark-A6NqJ643.png";
const PARTNER_LOGOS = [
  { src: fmactceLogo, darkSrc: fmactceLogo, alt: "Federal Ministry of Art, Culture, Tourism & Creative Economy" },
  { src: kwsgLogo, darkSrc: kwsgLogo, alt: "Kwara State Government" },
  { src: iihLightLogo, darkSrc: iihDarkLogo, alt: "Ilorin Innovation Hub" }
];
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative isolate overflow-hidden bg-hero pt-32 pb-20 sm:pt-40 sm:pb-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, { count: 60 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7 },
        className: "mx-auto max-w-4xl text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary glow-pulse" }),
            " Kwara Kre8ives 2.0"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl", children: [
            "Kwara's Biggest ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold animate-gradient", children: "Creative Empowerment" }),
            " Workshop"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg", children: "Equip yourself with practical digital and creative industry skills through mentorship, hands-on learning, networking, and access to opportunities." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-3 text-sm text-foreground/90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass px-4 py-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 text-primary" }),
              " ",
              EVENT.dateLabel
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass px-4 py-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary" }),
              " ",
              EVENT.venue.name,
              ", Ilorin"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass px-4 py-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4 text-primary" }),
              " 2,000 Creatives"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#register",
                className: "shine rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.03]",
                children: "Register Now"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#classes",
                className: "rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03] hover:bg-muted",
                children: "Explore Classes"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#venue",
                className: "group rounded-full px-6 py-3 text-sm font-semibold text-foreground/80 transition hover:text-foreground",
                children: [
                  "View Venue ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block transition-transform group-hover:translate-x-1", children: "→" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-14 max-w-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "The Countdown Has Begun" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Countdown, { targetISO: EVENT.dateISO })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "In collaboration with" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee-mask mt-6 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max animate-marquee items-center gap-10 sm:gap-16", children: [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: p.src,
                  alt: p.alt,
                  className: "block h-16 w-auto object-contain opacity-90 transition hover:opacity-100 dark:hidden sm:h-20",
                  loading: "lazy"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: p.darkSrc,
                  alt: p.alt,
                  className: "hidden h-16 w-auto object-contain opacity-90 transition hover:opacity-100 dark:block sm:h-20",
                  loading: "lazy"
                }
              )
            ] }, `${p.alt}-${i}`)) }) })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-divider absolute bottom-0 left-0 right-0" })
  ] });
}
function Counter({ to, suffix = "" }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, className: "tabular-nums", children: [
    n.toLocaleString(),
    suffix
  ] });
}
const STATS = [
  { value: 2e3, suffix: "+", label: "Participants" },
  { value: 5, label: "Creative Tracks" },
  { value: 50, label: "Students / Class" },
  { value: 40, suffix: "+", label: "Class Batches" }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "grid items-start gap-12 lg:grid-cols-2",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs uppercase tracking-[0.3em] text-primary", children: "About the initiative" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl text-foreground sm:text-5xl", children: [
              "Where creativity meets ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "opportunity" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 text-base leading-relaxed text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Kwara Kre8ives" }),
              " is a visionary creative empowerment initiative committed to discovering, nurturing, and empowering young talents within Kwara State and beyond."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Established to bridge the gap between creativity and opportunity, the platform serves as a hub for innovation, digital skills development, mentorship, and economic empowerment." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "Following the success of the first edition, Kwara Kre8ives continues to expand its impact with bigger opportunities and broader reach. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "2.0" }),
              " is being organized in collaboration with the Federal Ministry of Art, Culture, Tourism and Creative Economy alongside the Kwara State Government, with a mission to empower 2,000 creatives."
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4", children: STATS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "glass hover-lift rounded-3xl p-6 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl text-gradient-gold sm:text-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.value, suffix: s.suffix }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:text-sm", children: s.label })
        ]
      },
      s.label
    )) })
  ] }) });
}
const ICONS = {
  Camera,
  Video,
  Film,
  Sparkles,
  Megaphone,
  Hash,
  Rocket,
  Mic
};
function Classes() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "classes", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs uppercase tracking-[0.3em] text-primary", children: "Available Classes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl text-foreground sm:text-5xl", children: [
        "Five tracks. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Endless creative paths." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: CLASSES.map((c, i) => {
      const Icon = ICONS[c.icon] ?? Sparkles;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.45, delay: i * 0.05 },
          className: "group relative overflow-hidden rounded-3xl glass p-6 transition-all hover:shadow-gold",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-80" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-gold text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "relative mt-5 font-display text-xl text-foreground", children: c.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-2 text-sm leading-relaxed text-muted-foreground", children: c.desc })
          ]
        },
        c.name
      );
    }) })
  ] }) });
}
const RegistrationSchema = objectType({
  full_name: stringType().trim().min(1).max(120),
  phone_number: stringType().trim().min(5).max(30).regex(/^\d+$/, "Phone number must contain only digits"),
  email: stringType().trim().email().max(255),
  state_lga: stringType().trim().min(1).max(120),
  creative_interest: enumType(CLASS_NAMES),
  age_range: enumType(AGE_RANGES),
  social_handle: stringType().trim().max(120).optional().or(literalType(""))
});
const submitRegistration = createServerFn({
  method: "POST"
}).inputValidator((input) => RegistrationSchema.parse(input)).handler(createSsrRpc("2acc0a4260be1ee504ae24740195058c8e1f85e9b507a2e2b13d779478779f01"));
createServerFn({
  method: "GET"
}).handler(createSsrRpc("fe1fdea9f8e25ae158785c6c08d7511e61e559da75c78f8904993276882e26f8"));
const Dialog = Root;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
function RegistrationModal({
  result,
  onClose
}) {
  const open = !!result;
  reactExports.useEffect(() => {
    if (!open) return;
    const fire = () => {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.3 },
        colors: ["#D4AF37", "#F5D67A", "#FFFFFF"]
      });
    };
    fire();
    const t = setTimeout(fire, 350);
    return () => clearTimeout(t);
  }, [open]);
  if (!result) return null;
  const shortId = result.id.slice(0, 8).toUpperCase();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "glass-strong max-w-md border-primary/30 bg-card/90 p-0 sm:max-w-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-32 bg-gradient-gold opacity-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-6 sm:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground shadow-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { className: "mb-4 h-8 w-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display text-2xl text-foreground sm:text-3xl", children: [
          "Congratulations, ",
          result.full_name.split(" ")[0],
          "!"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "mt-2 text-sm text-muted-foreground", children: "You have successfully registered for Kwara Kre8ives 2.0." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-3 rounded-2xl border border-border bg-background/40 p-4 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Assigned Class", value: result.class_batch, highlight: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Registration ID", value: shortId, mono: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Track", value: result.creative_interest }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }), label: "Date", value: EVENT.dateLabel }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }), label: "Venue", value: EVENT.venue.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-3 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "A confirmation has been sent to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: result.email }),
          ". Save your Registration ID for entry. (Check your spam folder if you don't see it.)"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onClose,
          className: "mt-6 w-full rounded-xl bg-gradient-gold px-5 py-3 text-sm font-semibold text-primary-foreground shadow-gold",
          children: "Done"
        }
      )
    ] })
  ] }) }) });
}
function Row({
  label,
  value,
  icon,
  mono,
  highlight
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground", children: [
      icon,
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: [
          "text-right text-sm",
          mono ? "font-mono" : "",
          highlight ? "text-gradient-gold font-display text-base" : "text-foreground"
        ].join(" "),
        children: value
      }
    )
  ] });
}
const Schema = objectType({
  full_name: stringType().trim().min(2, "Enter your full name").max(120),
  phone_number: stringType().trim().min(5, "Enter a valid phone number").max(30).regex(/^\d+$/, "Phone number must contain only digits"),
  email: stringType().trim().email("Enter a valid email").max(255),
  state_lga: stringType().trim().min(2, "Enter your State / LGA").max(120),
  creative_interest: enumType(CLASS_NAMES, {
    message: "Choose your area of interest"
  }),
  age_range: enumType(AGE_RANGES, {
    message: "Choose your age range"
  }),
  social_handle: stringType().trim().max(120).optional().or(literalType(""))
});
function Register() {
  const submit = useServerFn(submitRegistration);
  const qc = useQueryClient();
  const [result, setResult] = reactExports.useState(null);
  const [serverError, setServerError] = reactExports.useState(null);
  const form = useForm({
    resolver: a(Schema),
    defaultValues: {
      full_name: "",
      phone_number: "",
      email: "",
      state_lga: "",
      creative_interest: void 0,
      age_range: void 0,
      social_handle: ""
    }
  });
  const onSubmit = async (values) => {
    setServerError(null);
    try {
      const res = await submit({ data: values });
      if (!res.ok) {
        setServerError(res.error);
        return;
      }
      setResult(res);
      form.reset();
      qc.invalidateQueries({ queryKey: ["class-counts"] });
    } catch (e) {
      console.error(e);
      setServerError("Something went wrong. Please try again.");
    }
  };
  const inputCls = "w-full rounded-xl bg-input/60 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring transition";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "register", className: "relative py-24 sm:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-hero opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs uppercase tracking-[0.3em] text-primary", children: "Registration" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl text-foreground sm:text-5xl", children: [
          "Claim your spot at ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Kwara Kre8ives 2.0" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Limited to 2,000 creatives. Your class batch is assigned automatically — 50 students per batch." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.form,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          onSubmit: form.handleSubmit(onSubmit),
          className: "mt-12 grid gap-5 rounded-3xl glass-strong p-6 sm:grid-cols-2 sm:p-10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name *", error: form.formState.errors.full_name?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputCls, placeholder: "Your full name", ...form.register("full_name") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone Number *", error: form.formState.errors.phone_number?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", inputMode: "numeric", pattern: "[0-9]*", className: inputCls, placeholder: "e.g. 08012345678", ...form.register("phone_number") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email Address *", error: form.formState.errors.email?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", className: inputCls, placeholder: "you@example.com", ...form.register("email") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "State / LGA *", error: form.formState.errors.state_lga?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputCls, placeholder: "e.g. Kwara / Ilorin South", ...form.register("state_lga") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Area of Creative Interest *", error: form.formState.errors.creative_interest?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: inputCls, defaultValue: "", ...form.register("creative_interest"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select an area…" }),
              CLASS_NAMES.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: n, children: n }, n))
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Age Range *", error: form.formState.errors.age_range?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: inputCls, defaultValue: "", ...form.register("age_range"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select age range…" }),
              AGE_RANGES.map((a2) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: a2, children: a2 }, a2))
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Social Media Handle (optional)", className: "sm:col-span-2", error: form.formState.errors.social_handle?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputCls, placeholder: "@yourhandle", ...form.register("social_handle") }) }),
            serverError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive sm:col-span-2", children: serverError }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "submit",
                  disabled: form.formState.isSubmitting,
                  className: "group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-gold px-6 py-4 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.01] disabled:opacity-70",
                  children: [
                    form.formState.isSubmitting && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
                    form.formState.isSubmitting ? "Reserving your spot…" : "Reserve My Spot →"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-center text-xs text-muted-foreground", children: "By registering you agree to receive event updates from Kwara Kre8ives." })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RegistrationModal, { result, onClose: () => setResult(null) })
  ] });
}
function Field({
  label,
  error,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `block ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground", children: label }),
    children,
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 block text-xs text-destructive", children: error })
  ] });
}
function Footer() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative border-t border-border bg-background/80 pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { className: "h-10 w-auto" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 max-w-md text-sm text-muted-foreground", children: [
          EVENT.tagline,
          ". Join us on ",
          EVENT.dateLabel,
          " at ",
          EVENT.venue.name,
          ", Ilorin."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: [
          ["#about", "About"],
          ["#classes", "Classes"],
          ["#register", "Register"],
          ["#venue", "Venue"],
          ["#faq", "FAQ"],
          ["#contact", "Contact"]
        ].map(([h, l]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-foreground/80 hover:text-foreground", href: h, children: l }) }, h)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Connect" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "inline-flex items-center gap-2 text-foreground/80 hover:text-foreground", href: `tel:${EVENT.contact.phone.replace(/\s/g, "")}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-primary" }),
            " ",
            EVENT.contact.phone
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "inline-flex items-center gap-2 text-foreground/80 hover:text-foreground", target: "_blank", rel: "noreferrer", href: `https://instagram.com/${EVENT.contact.instagram}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4 text-primary" }),
            " @",
            EVENT.contact.instagram
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "inline-flex items-center gap-2 text-foreground/80 hover:text-foreground", target: "_blank", rel: "noreferrer", href: `https://facebook.com/${EVENT.contact.facebook.replace(/\s/g, "")}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-4 w-4 text-primary" }),
            " ",
            EVENT.contact.facebook
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-divider my-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-between gap-3 pb-8 text-xs text-muted-foreground sm:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        year,
        " Kwara Kre8ives. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center sm:text-right", children: "Kwara Kre8ives 2.0 — Empowering the Next Generation of Creatives" })
    ] })
  ] }) });
}
const Keynote = reactExports.lazy(() => import("./Keynote-BNkC9Dt_.mjs").then((m) => ({
  default: m.Keynote
})));
const Gallery = reactExports.lazy(() => import("./Gallery-CN0a29jL.mjs").then((m) => ({
  default: m.Gallery
})));
const Testimonials = reactExports.lazy(() => import("./Testimonials-CNivqs3q.mjs").then((m) => ({
  default: m.Testimonials
})));
const FAQ = reactExports.lazy(() => import("./FAQ-BoqdVC27.mjs").then((m) => ({
  default: m.FAQ
})));
const Venue = reactExports.lazy(() => import("./Venue-C6MzCNw-.mjs").then((m) => ({
  default: m.Venue
})));
const Contact = reactExports.lazy(() => import("./Contact-DVCUlc-b.mjs").then((m) => ({
  default: m.Contact
})));
function SectionFallback() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[400px]", "aria-hidden": true });
}
function Index() {
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 450);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Keynote, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Classes, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Register, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Venue, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingCTA, {})
  ] });
}
export {
  Index as component
};
