import { c as createServerRpc, s as supabaseAdmin } from "./client.server-BI-0zUHq.mjs";
import { B as BATCH_CAPACITY } from "./event-CQKtk3vc.mjs";
import { c as createServerFn } from "./server-qZdgkNCb.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
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
const AuthSchema = objectType({
  password: stringType().min(1).max(200)
});
const getAdminDashboard_createServerFn_handler = createServerRpc({
  id: "bd91712aa12a864ae43341e860d6d1c64b91b59ae5ce60ea0dbdc10eee9819c1",
  name: "getAdminDashboard",
  filename: "src/lib/admin.functions.ts"
}, (opts) => getAdminDashboard.__executeServer(opts));
const getAdminDashboard = createServerFn({
  method: "POST"
}).inputValidator((input) => AuthSchema.parse(input)).handler(getAdminDashboard_createServerFn_handler, async ({
  data
}) => {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected || data.password !== expected) {
    return {
      ok: false,
      error: "Invalid password"
    };
  }
  const {
    data: rows,
    error
  } = await supabaseAdmin.from("registrations").select("id, full_name, phone_number, email, state_lga, creative_interest, class_batch, age_range, social_handle, registration_timestamp").order("registration_timestamp", {
    ascending: false
  }).limit(1e4);
  if (error) {
    console.error("admin registrations load failed", error);
    return {
      ok: false,
      error: "Failed to load registrations"
    };
  }
  return {
    ok: true,
    registrations: rows ?? [],
    capacity: BATCH_CAPACITY
  };
});
export {
  getAdminDashboard_createServerFn_handler
};
