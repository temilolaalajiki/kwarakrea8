import { c as createServerRpc, s as supabaseAdmin } from "./client.server-BI-0zUHq.mjs";
import { A as AGE_RANGES, C as CLASS_NAMES } from "./event-CQKtk3vc.mjs";
import { r as reactExports } from "../_libs/react.mjs";
import { t as template } from "./registration-confirmation-C3v6Pogz.mjs";
import { c as createServerFn } from "./server-qZdgkNCb.mjs";
import "../_libs/seroval.mjs";
import { r as render } from "../_libs/react-email__render.mjs";
import { o as objectType, s as stringType, l as literalType, e as enumType } from "../_libs/zod.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/react-email__html.mjs";
import "../_libs/react-email__head.mjs";
import "../_libs/react-email__preview.mjs";
import "../_libs/react-email__body.mjs";
import "../_libs/react-email__container.mjs";
import "../_libs/react-email__section.mjs";
import "../_libs/react-email__text.mjs";
import "../_libs/react-email__heading.mjs";
import "../_libs/react-email__hr.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
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
const SITE_NAME = "Kwara Kre8ives";
const SENDER_DOMAIN = "notify.kwarakre8ives.com";
const FROM_DOMAIN = "kwarakre8ives.com";
function generateToken() {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
}
async function getOrCreateUnsubscribeToken(email) {
  const normalized = email.toLowerCase();
  const { data: existing } = await supabaseAdmin.from("email_unsubscribe_tokens").select("token, used_at").eq("email", normalized).maybeSingle();
  if (existing && !existing.used_at) return existing.token;
  const token = generateToken();
  const { error } = await supabaseAdmin.from("email_unsubscribe_tokens").upsert(
    { token, email: normalized },
    { onConflict: "email", ignoreDuplicates: true }
  );
  if (error) {
    console.error("Failed to create unsubscribe token", error);
    return null;
  }
  const { data: stored } = await supabaseAdmin.from("email_unsubscribe_tokens").select("token").eq("email", normalized).maybeSingle();
  return stored?.token ?? null;
}
async function enqueueRegistrationConfirmationEmail(row) {
  try {
    const { data: suppressed } = await supabaseAdmin.from("suppressed_emails").select("id").eq("email", row.email.toLowerCase()).maybeSingle();
    if (suppressed) {
      console.log("Skipping confirmation email: address is suppressed");
      return;
    }
    const templateData = {
      full_name: row.full_name,
      class_batch: row.class_batch,
      creative_interest: row.creative_interest,
      registration_id: row.id
    };
    const element = reactExports.createElement(
      template.component,
      templateData
    );
    const html = await render(element);
    const text = await render(element, { plainText: true });
    const subject = typeof template.subject === "function" ? template.subject(templateData) : template.subject;
    const messageId = crypto.randomUUID();
    await supabaseAdmin.from("email_send_log").insert({
      message_id: messageId,
      template_name: "registration-confirmation",
      recipient_email: row.email,
      status: "pending"
    });
    const unsubscribeToken = await getOrCreateUnsubscribeToken(row.email);
    if (!unsubscribeToken) {
      console.error("No unsubscribe token; skipping email");
      return;
    }
    const { error: enqueueError } = await supabaseAdmin.rpc("enqueue_email", {
      queue_name: "transactional_emails",
      payload: {
        message_id: messageId,
        to: row.email,
        from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
        sender_domain: SENDER_DOMAIN,
        subject,
        html,
        text,
        purpose: "transactional",
        label: "registration-confirmation",
        idempotency_key: messageId,
        unsubscribe_token: unsubscribeToken,
        queued_at: (/* @__PURE__ */ new Date()).toISOString()
      }
    });
    if (enqueueError) {
      console.error("Failed to enqueue confirmation email", enqueueError);
      await supabaseAdmin.from("email_send_log").insert({
        message_id: messageId,
        template_name: "registration-confirmation",
        recipient_email: row.email,
        status: "failed",
        error_message: "Failed to enqueue email"
      });
    }
  } catch (err) {
    console.error("Confirmation email enqueue threw", err);
  }
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
const submitRegistration_createServerFn_handler = createServerRpc({
  id: "2acc0a4260be1ee504ae24740195058c8e1f85e9b507a2e2b13d779478779f01",
  name: "submitRegistration",
  filename: "src/lib/registration.functions.ts"
}, (opts) => submitRegistration.__executeServer(opts));
const submitRegistration = createServerFn({
  method: "POST"
}).inputValidator((input) => RegistrationSchema.parse(input)).handler(submitRegistration_createServerFn_handler, async ({
  data
}) => {
  const emailLower = data.email.toLowerCase();
  const phone = data.phone_number.trim();
  const {
    data: existing
  } = await supabaseAdmin.from("registrations").select("email, phone_number").or(`email.eq.${emailLower},phone_number.eq.${phone}`).limit(1);
  if (existing && existing.length > 0) {
    const dup = existing[0];
    if (dup.email?.toLowerCase() === emailLower) {
      return {
        ok: false,
        error: "This email is already registered."
      };
    }
    if (dup.phone_number === phone) {
      return {
        ok: false,
        error: "This phone number is already registered."
      };
    }
  }
  const {
    data: row,
    error
  } = await supabaseAdmin.from("registrations").insert({
    full_name: data.full_name,
    phone_number: phone,
    email: emailLower,
    state_lga: data.state_lga,
    creative_interest: data.creative_interest,
    age_range: data.age_range,
    social_handle: data.social_handle || null
  }).select("id, class_batch, creative_interest, full_name, email").single();
  if (error) {
    if (error.code === "23505") {
      return {
        ok: false,
        error: "This email or phone number is already registered."
      };
    }
    console.error("Registration insert failed", error);
    return {
      ok: false,
      error: "Could not complete registration. Please try again."
    };
  }
  await enqueueRegistrationConfirmationEmail({
    id: row.id,
    full_name: row.full_name,
    email: row.email,
    class_batch: row.class_batch,
    creative_interest: row.creative_interest
  });
  return {
    ok: true,
    id: row.id,
    class_batch: row.class_batch,
    creative_interest: row.creative_interest,
    full_name: row.full_name,
    email: row.email
  };
});
const getClassCounts_createServerFn_handler = createServerRpc({
  id: "fe1fdea9f8e25ae158785c6c08d7511e61e559da75c78f8904993276882e26f8",
  name: "getClassCounts",
  filename: "src/lib/registration.functions.ts"
}, (opts) => getClassCounts.__executeServer(opts));
const getClassCounts = createServerFn({
  method: "GET"
}).handler(getClassCounts_createServerFn_handler, async () => {
  const {
    data,
    error
  } = await supabaseAdmin.rpc("get_class_counts");
  if (error) {
    console.error("get_class_counts failed", error);
    return {
      counts: {}
    };
  }
  const counts = {};
  for (const row of data ?? []) {
    counts[row.creative_interest] = Number(row.total);
  }
  return {
    counts
  };
});
export {
  getClassCounts_createServerFn_handler,
  submitRegistration_createServerFn_handler
};
