import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useServerFn, L as Logo, T as ThemeToggle, c as createSsrRpc } from "./ThemeToggle-CeymlSFe.mjs";
import { c as createServerFn } from "./server-qZdgkNCb.mjs";
import { B as BATCH_CAPACITY, a as CLASSES } from "./event-CQKtk3vc.mjs";
import "../_libs/seroval.mjs";
import { L as LayoutDashboard, U as Users, a as Layers, b as UserCheck, F as FileSpreadsheet, X, c as LogOut, C as ChevronDown, d as ChevronRight, S as Search, D as Download } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
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
import "../_libs/tanstack__react-query.mjs";
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
const AuthSchema = objectType({
  password: stringType().min(1).max(200)
});
const getAdminDashboard = createServerFn({
  method: "POST"
}).inputValidator((input) => AuthSchema.parse(input)).handler(createSsrRpc("bd91712aa12a864ae43341e860d6d1c64b91b59ae5ce60ea0dbdc10eee9819c1"));
function AdminPage() {
  const fetchDashboard = useServerFn(getAdminDashboard);
  const [password, setPassword] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [data, setData] = reactExports.useState(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetchDashboard({
        data: {
          password
        }
      });
      if (!res.ok) setError(res.error);
      else setData({
        registrations: res.registrations,
        capacity: res.capacity
      });
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  if (!data) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen flex items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "glass w-full max-w-sm rounded-3xl p-8 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl text-foreground", children: "Admin access" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Enter the admin password to view the dashboard." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), placeholder: "Password", className: "w-full rounded-xl bg-background/50 border border-border px-4 py-3 text-foreground outline-none focus:border-primary", autoFocus: true }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading || !password, className: "w-full rounded-xl bg-gradient-gold px-4 py-3 font-medium text-primary-foreground disabled:opacity-50", children: loading ? "Checking…" : "Sign in" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminShell, { data, onLogout: () => {
    setPassword("");
    setData(null);
  } });
}
const NAV = [{
  id: "dashboard",
  label: "Dashboard",
  icon: LayoutDashboard
}, {
  id: "registrations",
  label: "Registrations",
  icon: Users
}, {
  id: "batches",
  label: "Batches",
  icon: Layers
}, {
  id: "checkout",
  label: "Check In",
  icon: UserCheck
}, {
  id: "exports",
  label: "Exports",
  icon: FileSpreadsheet
}];
const DEFAULT_SETTINGS = {
  batchSize: BATCH_CAPACITY,
  nearFullThreshold: 80,
  notifyAlerts: true
};
function useLocalState(key, initial) {
  const [v, setV] = reactExports.useState(() => {
    if (typeof window === "undefined") return initial;
    try {
      const raw = localStorage.getItem(key);
      return raw ? {
        ...initial,
        ...JSON.parse(raw)
      } : initial;
    } catch {
      return initial;
    }
  });
  const set = (next) => {
    setV(next);
    try {
      localStorage.setItem(key, JSON.stringify(next));
    } catch {
    }
  };
  return [v, set];
}
function AdminShell({
  data,
  onLogout
}) {
  const [view, setView] = reactExports.useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = reactExports.useState(false);
  const [settings] = useLocalState("admin.settings", DEFAULT_SETTINGS);
  const [checkedOut, setCheckedOut] = useLocalState("admin.checkedOut", {});
  const capacity = settings.batchSize || BATCH_CAPACITY;
  const categories = useCategories(data.registrations, capacity, settings.nearFullThreshold);
  const title = NAV.find((n) => n.id === view)?.label ?? "Dashboard";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "admin-shell min-h-screen flex bg-[var(--as-bg)] text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarNav, { view, onSelect: (id) => {
      setView(id);
      setSidebarOpen(false);
    }, open: sidebarOpen, onClose: () => setSidebarOpen(false), onLogout }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0 lg:pl-64", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, { title, onMenu: () => setSidebarOpen(true) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 p-4 sm:p-6 lg:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl animate-in fade-in duration-300", children: [
        view === "dashboard" && /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardView, { registrations: data.registrations, categories, capacity }),
        view === "registrations" && /* @__PURE__ */ jsxRuntimeExports.jsx(RegistrationsView, { registrations: data.registrations }),
        view === "batches" && /* @__PURE__ */ jsxRuntimeExports.jsx(BatchesView, { categories, capacity }),
        view === "checkout" && /* @__PURE__ */ jsxRuntimeExports.jsx(CheckOutView, { registrations: data.registrations, checkedOut, setCheckedOut }),
        view === "exports" && /* @__PURE__ */ jsxRuntimeExports.jsx(ExportsView, { registrations: data.registrations, categories, capacity, checkedOut })
      ] }) })
    ] })
  ] });
}
function SidebarNav({
  view,
  onSelect,
  open,
  onClose,
  onLogout
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: onClose, className: "fixed inset-0 z-40 bg-[var(--as-backdrop)] lg:hidden" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: `fixed inset-y-0 left-0 z-50 w-64 flex flex-col bg-[var(--as-surface)] border-r border-[var(--as-border-5)] transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 h-16 border-b border-[var(--as-border-5)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { className: "h-7 w-auto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm text-[var(--as-text-90)]", children: "​" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "lg:hidden text-[var(--as-text-60)] hover:text-[var(--as-text)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex-1 overflow-y-auto px-3 py-4 space-y-1", children: NAV.map((item) => {
        const active = view === item.id;
        const Icon = item.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => onSelect(item.id), className: `w-full group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${active ? "bg-primary/15 text-primary border-l-2 border-primary" : "text-[var(--as-text-60)] hover:text-[var(--as-text)] hover:bg-[var(--as-overlay-5)] border-l-2 border-transparent"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-4 w-4 ${active ? "text-primary" : "text-[var(--as-text-50)] group-hover:text-[var(--as-text)]"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label })
        ] }, item.id);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-[var(--as-border-5)] p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onLogout, className: "w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--as-text-60)] hover:text-destructive hover:bg-destructive/10 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
        "Logout"
      ] }) })
    ] })
  ] });
}
function TopBar({
  title,
  onMenu
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-30 h-16 bg-[var(--as-surface-90)] backdrop-blur border-b border-[var(--as-border-5)] px-4 sm:px-6 flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onMenu, className: "lg:hidden text-[var(--as-text-70)] hover:text-[var(--as-text)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-lg sm:text-xl text-[var(--as-text)] truncate", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-2 sm:gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-full bg-gradient-gold grid place-items-center text-[11px] font-semibold text-primary-foreground", children: "AD" })
    ] })
  ] });
}
function useCategories(registrations, capacity, nearFullThreshold) {
  return reactExports.useMemo(() => {
    return CLASSES.map((c) => {
      const items = registrations.filter((r) => r.creative_interest === c.name);
      const total = items.length;
      const batchCount = Math.max(1, Math.ceil(total / capacity) || 1);
      const batches = [];
      for (let i = 0; i < batchCount; i++) {
        const filled = Math.min(capacity, Math.max(0, total - i * capacity));
        batches.push({
          letter: String.fromCharCode(65 + i),
          filled
        });
      }
      const activeBatches = batches.length;
      const totalSlots = activeBatches * capacity;
      const remaining = totalSlots - total;
      const fillPct = totalSlots ? total / totalSlots * 100 : 0;
      const currentBatch = batches[batches.length - 1];
      const currentBatchPct = currentBatch.filled / capacity * 100;
      return {
        name: c.name,
        total,
        batches,
        activeBatches,
        totalSlots,
        remaining,
        fillPct,
        currentBatch,
        currentBatchPct,
        isFull: currentBatch.filled === capacity,
        isNearFull: currentBatchPct >= nearFullThreshold && currentBatch.filled < capacity
      };
    });
  }, [registrations, capacity, nearFullThreshold]);
}
function DashboardView({
  registrations,
  categories,
  capacity
}) {
  const totalRegs = registrations.length;
  const totalSlots = 2e3;
  const totalRemaining = totalSlots - totalRegs;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Overview" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Total Registrations", value: totalRegs, accent: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Filled Slots", value: totalRegs }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Remaining Slots", value: totalRemaining })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { title: "Capacity snapshot", subtitle: "All creative tracks" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(MiniCategory, { c, capacity }, c.name)) })
    ] })
  ] });
}
function RegistrationsView({
  registrations,
  initialSearch
}) {
  const [q, setQ] = reactExports.useState(initialSearch ?? "");
  const [category, setCategory] = reactExports.useState("all");
  const [batch, setBatch] = reactExports.useState("all");
  const [sortDir, setSortDir] = reactExports.useState("newest");
  reactExports.useEffect(() => {
    if (initialSearch) setQ(initialSearch);
  }, [initialSearch]);
  const allBatches = reactExports.useMemo(() => Array.from(new Set(registrations.map((r) => r.class_batch))).sort(), [registrations]);
  const filtered = reactExports.useMemo(() => {
    const term = q.trim().toLowerCase();
    return registrations.filter((r) => {
      if (category !== "all" && r.creative_interest !== category) return false;
      if (batch !== "all" && r.class_batch !== batch) return false;
      if (!term) return true;
      return r.full_name.toLowerCase().includes(term) || r.email.toLowerCase().includes(term) || r.phone_number.toLowerCase().includes(term) || r.id.toLowerCase().includes(term);
    }).sort((a, b) => {
      const da = new Date(a.registration_timestamp).getTime();
      const db = new Date(b.registration_timestamp).getTime();
      return sortDir === "newest" ? db - da : da - db;
    });
  }, [registrations, q, category, batch, sortDir]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "All Registrations", subtitle: `Showing ${filtered.length} of ${registrations.length}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FilterInput, { value: q, onChange: setQ, placeholder: "Search name, email, phone or ID…" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FilterSelect, { value: category, onChange: setCategory, options: [["all", "All categories"], ...CLASSES.map((c) => [c.name, c.name])] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FilterSelect, { value: batch, onChange: setBatch, options: [["all", "All batches"], ...allBatches.map((b) => [b, b])] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FilterSelect, { value: sortDir, onChange: (v) => setSortDir(v), options: [["newest", "Newest first"], ["oldest", "Oldest first"]] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 overflow-x-auto rounded-xl border border-[var(--as-border-5)] bg-[var(--as-card-2)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-left text-[11px] uppercase tracking-wider text-[var(--as-text-40)] bg-[var(--as-overlay-2)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Batch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Th, { children: "Registered" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
          filtered.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-[var(--as-border-5)] hover:bg-[var(--as-overlay-3)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-mono text-xs text-[var(--as-text-50)]", children: r.id.slice(0, 8) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-[var(--as-text)]", children: r.full_name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-[var(--as-text-80)]", children: r.phone_number }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-[var(--as-text-80)]", children: r.email }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[var(--as-text-80)] text-xs", children: r.creative_interest }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary/15 text-primary text-[11px] px-2 py-0.5", children: r.class_batch.replace(r.creative_interest, "").trim() || r.class_batch })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-[var(--as-text-60)] text-xs", children: new Date(r.registration_timestamp).toLocaleString() })
          ] }, r.id)),
          filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 6, className: "px-4 py-12 text-center text-[var(--as-text-40)]", children: "No registrations match your filters." }) })
        ] })
      ] }) })
    ] })
  ] });
}
function BatchesView({
  categories,
  capacity
}) {
  const [open, setOpen] = reactExports.useState(() => Object.fromEntries(CLASSES.map((c, i) => [c.name, i === 0])));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Batches", subtitle: "Detailed batch allocation per category." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { padding: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-white/5", children: categories.map((c) => {
      const isOpen = open[c.name];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen({
          ...open,
          [c.name]: !isOpen
        }), className: "w-full flex items-center justify-between gap-3 px-4 py-4 hover:bg-[var(--as-overlay-2)] transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 text-[var(--as-text-40)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-[var(--as-text)]", children: c.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-[var(--as-text-40)]", children: [
              c.activeBatches,
              " batch",
              c.activeBatches > 1 ? "es" : ""
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-[var(--as-text-50)]", children: [
              c.total,
              "/",
              c.totalSlots
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { isFull: c.isFull, isNearFull: c.isNearFull })
          ] })
        ] }),
        isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-5 space-y-3 animate-in fade-in slide-in-from-top-1 duration-200", children: c.batches.map((b) => {
          const pct = b.filled / capacity * 100;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-[var(--as-card)] border border-[var(--as-border-5)] p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-sm mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[var(--as-text)]", children: [
                c.name,
                " — Class ",
                b.letter
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[var(--as-text-60)] tabular-nums", children: [
                b.filled,
                "/",
                capacity
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, { pct })
          ] }, b.letter);
        }) })
      ] }, c.name);
    }) }) })
  ] });
}
function CheckOutView({
  registrations,
  checkedOut,
  setCheckedOut
}) {
  const [q, setQ] = reactExports.useState("");
  const [selected, setSelected] = reactExports.useState(null);
  const term = q.trim().toLowerCase();
  const results = reactExports.useMemo(() => {
    if (!term) return registrations.slice(0, 25);
    return registrations.filter((r) => r.full_name.toLowerCase().includes(term) || r.email.toLowerCase().includes(term) || r.phone_number.toLowerCase().includes(term) || r.id.toLowerCase().startsWith(term)).slice(0, 50);
  }, [registrations, term]);
  const checkedCount = Object.keys(checkedOut).length;
  const pending = registrations.length - checkedCount;
  const mark = (id) => setCheckedOut({
    ...checkedOut,
    [id]: (/* @__PURE__ */ new Date()).toISOString()
  });
  const unmark = (id) => {
    const next = {
      ...checkedOut
    };
    delete next[id];
    setCheckedOut(next);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Check In", subtitle: "Manually confirm participant entry to their session." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Total Participants", value: registrations.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Checked In", value: checkedCount, accent: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Pending Check In", value: pending, tone: pending > 0 ? "warn" : "default" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { title: "Find participant", subtitle: "Search by name, email, phone or ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--as-text-40)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => setQ(e.target.value), autoFocus: true, placeholder: "Start typing…", className: "w-full rounded-lg bg-[var(--as-card)] border border-[var(--as-border-10)] pl-9 pr-3 py-2.5 text-sm text-[var(--as-text)] placeholder:text-[var(--as-text-40)] outline-none focus:border-primary/60" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 max-h-[460px] overflow-y-auto divide-y divide-white/5 rounded-xl border border-[var(--as-border-5)]", children: [
          results.map((r) => {
            const ts = checkedOut[r.id];
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSelected(r), className: `w-full flex items-center justify-between gap-3 px-4 py-3 text-left transition ${selected?.id === r.id ? "bg-primary/10" : "hover:bg-[var(--as-overlay-3)]"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-[var(--as-text)] truncate", children: r.full_name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-[var(--as-text-50)] truncate", children: [
                  r.creative_interest,
                  " · ",
                  r.class_batch
                ] })
              ] }),
              ts ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider rounded-full bg-emerald-500/15 text-emerald-400 px-2 py-0.5", children: "Checked in" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider rounded-full bg-[var(--as-overlay-10)] text-[var(--as-text-50)] px-2 py-0.5", children: "Pending" })
            ] }, r.id);
          }),
          results.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-10 text-center text-[var(--as-text-40)] text-sm", children: "No matches." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { title: "Participant details" }),
        !selected ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-[var(--as-text-40)] py-10 text-center", children: "Select a participant to view details." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-[var(--as-text-40)] mb-1", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[var(--as-text)]", children: selected.full_name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[var(--as-text-40)]", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[var(--as-text-90)]", children: selected.phone_number })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[var(--as-text-40)]", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[var(--as-text-90)] truncate", children: selected.email })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[var(--as-text-40)]", children: "Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[var(--as-text-90)]", children: selected.creative_interest })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[var(--as-text-40)]", children: "Batch" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[var(--as-text-90)]", children: selected.class_batch.replace(selected.creative_interest, "").trim() || selected.class_batch })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[var(--as-text-40)]", children: "State / LGA" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[var(--as-text-90)]", children: selected.state_lga })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[var(--as-text-40)]", children: "Age" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[var(--as-text-90)]", children: selected.age_range })
            ] })
          ] }),
          checkedOut[selected.id] ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-emerald-400 font-medium", children: "Checked in" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[var(--as-text-60)] mt-0.5", children: new Date(checkedOut[selected.id]).toLocaleString() }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => unmark(selected.id), className: "mt-3 text-xs text-[var(--as-text-60)] hover:text-[var(--as-text)] underline", children: "Undo check in" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => mark(selected.id), className: "w-full rounded-lg bg-gradient-gold py-3 text-xs px-[14px] font-semibold text-primary-foreground hover:opacity-90 transition", children: "Check In" })
        ] })
      ] })
    ] })
  ] });
}
function ExportsView({
  registrations,
  categories,
  capacity,
  checkedOut
}) {
  const exports$1 = [{
    title: "Full registration CSV",
    desc: "All participant records with full details.",
    onClick: () => exportCSV("all-registrations.csv", registrations)
  }, {
    title: "Category exports",
    desc: "One CSV per category with its registered participants.",
    onClick: () => CLASSES.forEach((c) => {
      const rows = registrations.filter((r) => r.creative_interest === c.name);
      if (rows.length) exportCSV(`${slug(c.name)}.csv`, rows);
    })
  }, {
    title: "Check-in report",
    desc: "Participants marked as checked in with timestamps.",
    onClick: () => {
      const rows = registrations.filter((r) => checkedOut[r.id]).map((r) => ({
        id: r.id,
        full_name: r.full_name,
        email: r.email,
        phone_number: r.phone_number,
        category: r.creative_interest,
        batch: r.class_batch,
        checked_in_at: checkedOut[r.id]
      }));
      exportGenericCSV("check-in-report.csv", rows);
    }
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Exports", subtitle: "Download registration reports and CSV files." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: exports$1.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 grid place-items-center rounded-lg bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-[var(--as-text)]", children: e.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[var(--as-text-50)] mt-0.5", children: e.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: e.onClick, className: "mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-gold px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
          " Download"
        ] })
      ] })
    ] }) }, e.title)) })
  ] });
}
function SectionHeader({
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl text-[var(--as-text)]", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-[var(--as-text-50)]", children: subtitle })
  ] });
}
function Card({
  children,
  className = "",
  padding = "md"
}) {
  const p = padding === "sm" ? "p-2" : "p-5 sm:p-6";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-2xl bg-[var(--as-card)] border border-[var(--as-border-5)] ${p} ${className}`, children });
}
function CardHeader({
  title,
  subtitle,
  action
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 mb-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-[var(--as-text)]", children: title }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[var(--as-text-40)] mt-0.5", children: subtitle })
    ] }),
    action
  ] });
}
function Stat({
  label,
  value,
  accent,
  tone = "default"
}) {
  const color = tone === "danger" ? "text-destructive" : tone === "warn" ? "text-primary" : accent ? "text-primary" : "text-[var(--as-text)]";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[var(--as-card)] border border-[var(--as-border-5)] p-4 sm:p-5 transition hover:border-primary/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-[var(--as-text-40)]", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-2 font-display text-3xl tabular-nums ${color}`, children: value.toLocaleString() })
  ] });
}
function StatusPill({
  isFull,
  isNearFull
}) {
  const cls = isFull ? "bg-destructive/15 text-destructive" : isNearFull ? "bg-primary/15 text-primary" : "bg-emerald-500/15 text-emerald-400";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full text-[10px] uppercase tracking-wider px-2.5 py-1 ${cls}`, children: isFull ? "Full" : isNearFull ? "Near full" : "Available" });
}
function ProgressBar({
  pct
}) {
  const tone = pct >= 100 ? "bg-destructive" : pct >= 80 ? "bg-primary" : "bg-primary/70";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full overflow-hidden bg-[var(--as-overlay-6)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full transition-all duration-500 ${tone}`, style: {
    width: `${Math.min(100, pct)}%`
  } }) });
}
function MiniCategory({
  c,
  capacity
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-[var(--as-card-2)] border border-[var(--as-border-5)] p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-[var(--as-text)]", children: c.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { isFull: c.isFull, isNearFull: c.isNearFull })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between text-xs text-[var(--as-text-50)] mb-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        c.total,
        "/",
        c.totalSlots
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        Math.round(c.fillPct),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, { pct: c.fillPct }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-[var(--as-text-40)] mt-2", children: [
      c.activeBatches,
      " batch",
      c.activeBatches > 1 ? "es" : "",
      " · ",
      capacity,
      "/batch"
    ] })
  ] });
}
function Th({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children });
}
function FilterInput({
  value,
  onChange,
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value, onChange: (e) => onChange(e.target.value), placeholder, className: "rounded-lg bg-[var(--as-card-2)] border border-[var(--as-border-10)] px-3 py-2 text-sm text-[var(--as-text)] placeholder:text-[var(--as-text-40)] outline-none focus:border-primary/60" });
}
function FilterSelect({
  value,
  onChange,
  options
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value, onChange: (e) => onChange(e.target.value), className: "rounded-lg bg-[var(--as-card-2)] border border-[var(--as-border-10)] px-3 py-2 text-sm text-[var(--as-text)] outline-none focus:border-primary/60", children: options.map(([v, l]) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: v, children: l }, v)) });
}
function slug(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function exportCSV(filename, rows) {
  const headers = ["id", "full_name", "phone_number", "email", "state_lga", "creative_interest", "class_batch", "age_range", "social_handle", "registration_timestamp"];
  const body = rows.map((r) => headers.map((h) => csvCell(r[h])).join(","));
  downloadCSV(filename, [headers.join(","), ...body].join("\n"));
}
function exportGenericCSV(filename, rows) {
  if (!rows.length) {
    downloadCSV(filename, "");
    return;
  }
  const headers = Object.keys(rows[0]);
  const body = rows.map((r) => headers.map((h) => csvCell(r[h])).join(","));
  downloadCSV(filename, [headers.join(","), ...body].join("\n"));
}
function csvCell(v) {
  if (v == null) return "";
  const s = String(v);
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}
function downloadCSV(filename, content) {
  const blob = new Blob([content], {
    type: "text/csv;charset=utf-8;"
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
export {
  AdminPage as component
};
