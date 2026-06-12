import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { E as EVENT } from "./event-CQKtk3vc.mjs";
import { H as Html } from "../_libs/react-email__html.mjs";
import { H as Head } from "../_libs/react-email__head.mjs";
import { P as Preview } from "../_libs/react-email__preview.mjs";
import { B as Body } from "../_libs/react-email__body.mjs";
import { C as Container } from "../_libs/react-email__container.mjs";
import { S as Section } from "../_libs/react-email__section.mjs";
import { T as Text } from "../_libs/react-email__text.mjs";
import { H as Heading } from "../_libs/react-email__heading.mjs";
import { H as Hr } from "../_libs/react-email__hr.mjs";
function RegistrationConfirmation({
  full_name = "Creative",
  class_batch = "—",
  creative_interest = "—",
  registration_id = "—"
}) {
  const firstName = full_name.split(" ")[0] || "Creative";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Html, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Head, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Preview, { children: "You're in — Kwara Kre8ives 2.0 registration confirmed" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Body,
      {
        style: {
          backgroundColor: "#ffffff",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          margin: 0,
          padding: 0,
          color: "#0f0f0f"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { style: { maxWidth: "560px", margin: "0 auto", padding: "32px 24px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Section,
            {
              style: {
                background: "linear-gradient(135deg, #D4AF37 0%, #F5D67A 100%)",
                borderRadius: "16px",
                padding: "28px 24px",
                textAlign: "center"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { style: { margin: 0, color: "#1a1a1a", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase" }, children: "Kwara Kre8ives 2.0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Heading, { style: { margin: "8px 0 0", color: "#1a1a1a", fontSize: "24px" }, children: [
                  "You're in, ",
                  firstName,
                  "!"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { style: { padding: "24px 4px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { style: { fontSize: "16px", lineHeight: "24px" }, children: [
              "Your registration for ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: EVENT.name }),
              " is confirmed. Kindly keep this email safe, as it will be required for access to the event."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Section,
              {
                style: {
                  border: "1px solid #eaeaea",
                  borderRadius: "12px",
                  padding: "16px 20px",
                  marginTop: "16px"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Registration ID", value: registration_id.slice(0, 8).toUpperCase() }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Assigned Class", value: class_batch }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Track", value: creative_interest }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Date", value: EVENT.dateLabel }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Arrival", value: EVENT.arrivalTime }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Venue", value: EVENT.venue.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Address", value: EVENT.venue.address })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Hr, { style: { borderColor: "#eaeaea", margin: "24px 0" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { style: { fontSize: "14px", color: "#525252", lineHeight: "22px" }, children: [
              "Need help? Reach us on ",
              EVENT.contact.phone,
              " or @",
              EVENT.contact.instagram,
              " on Instagram."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { style: { fontSize: "12px", color: "#8a8a8a", marginTop: "24px" }, children: [
              "© ",
              (/* @__PURE__ */ new Date()).getFullYear(),
              " Kwara Kre8ives. All rights reserved."
            ] })
          ] })
        ] })
      }
    )
  ] });
}
function Row({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("table", { style: { width: "100%", borderCollapse: "collapse" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { padding: "6px 0", fontSize: "12px", color: "#8a8a8a", textTransform: "uppercase", letterSpacing: "1px", width: "45%" }, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { padding: "6px 0", fontSize: "14px", color: "#0f0f0f", textAlign: "right" }, children: value })
  ] }) }) });
}
const template = {
  component: RegistrationConfirmation,
  subject: (data) => `You're in — ${EVENT.name} registration confirmed`,
  displayName: "Registration Confirmation",
  previewData: {
    full_name: "Temilola Alaji",
    class_batch: "Photography Class A",
    creative_interest: "Photography",
    registration_id: "abc12345"
  }
};
export {
  template as t
};
