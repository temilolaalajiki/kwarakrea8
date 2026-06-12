import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useRouter } from "../_libs/tanstack__react-router.mjs";
import { l as isRedirect } from "../_libs/tanstack__router-core.mjs";
import { T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-qZdgkNCb.mjs";
import { u as useTheme } from "./router-xCYX0l0n.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { p as Sun, q as Moon } from "../_libs/lucide-react.mjs";
function useServerFn(serverFn) {
  const router = useRouter();
  return reactExports.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router.stores.location.get();
        return router.navigate(router.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const logoUrl = "/assets/kwara-kre8ives-logo-DbriNPvt.png";
function Logo({ className = "h-10 w-auto", alt = "Kwara Kre8ives" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: logoUrl,
      alt,
      className: `${className} dark:invert dark:brightness-[1.05]`,
      loading: "eager",
      decoding: "async"
    }
  );
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function ThemeToggle({ className }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: toggle,
      "aria-label": isDark ? "Switch to light theme" : "Switch to dark theme",
      title: isDark ? "Switch to light theme" : "Switch to dark theme",
      className: cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:bg-muted hover:text-primary",
        className
      ),
      children: isDark ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" })
    }
  );
}
export {
  Logo as L,
  ThemeToggle as T,
  cn as a,
  createSsrRpc as c,
  useServerFn as u
};
