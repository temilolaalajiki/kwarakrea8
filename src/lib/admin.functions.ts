import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { BATCH_CAPACITY } from "@/lib/event";

const AuthSchema = z.object({ password: z.string().min(1).max(200) });

export type Registration = {
  id: string;
  full_name: string;
  phone_number: string;
  email: string;
  state_lga: string;
  creative_interest: string;
  class_batch: string;
  age_range: string;
  social_handle: string | null;
  registration_timestamp: string;
};

export const getAdminDashboard = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => AuthSchema.parse(input))
  .handler(async ({ data }) => {
    const expected = process.env.ADMIN_PASSWORD;
    if (!expected || data.password !== expected) {
      return { ok: false as const, error: "Invalid password" };
    }

    const { data: rows, error } = await supabaseAdmin
      .from("registrations")
      .select(
        "id, full_name, phone_number, email, state_lga, creative_interest, class_batch, age_range, social_handle, registration_timestamp",
      )
      .order("registration_timestamp", { ascending: false })
      .limit(10000);

    if (error) {
      console.error("admin registrations load failed", error);
      return { ok: false as const, error: "Failed to load registrations" };
    }

    return {
      ok: true as const,
      registrations: (rows ?? []) as Registration[],
      capacity: BATCH_CAPACITY,
    };
  });
