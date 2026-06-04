# Branded Email Setup for kwarakre8ives.com

Goal: send registration confirmations and contact replies from your own branded address (e.g. `noreply@kwarakre8ives.com`) instead of the default Lovable sender.

## Step 1 — Set up your sender domain

I'll open the email setup dialog so we can register `kwarakre8ives.com` as your verified sender. Behind the scenes this delegates a subdomain (default `notify.kwarakre8ives.com`) to Lovable's nameservers, which handles SPF/DKIM/MX automatically.

You'll need to add 2 NS records at Whogohost (same DNS panel where we added the site records). Then it auto-verifies (usually 15–60 minutes).

Note: this delegation is only on the `notify` subdomain, so it won't affect the website (`@` and `www`) records we already set up.

## Step 2 — Email infrastructure

Once the domain is in, I'll provision the sending infrastructure (queue, retry safety, suppression list, unsubscribe handling, send logs). No action needed from you.

## Step 3 — Branded auth emails (registration confirmations)

Since registrations on Kwara Kre8ives currently use the `registrations` table (not Supabase Auth signups), confirm which you mean:

- **A. Custom branded confirmation email** sent when someone fills the registration form (e.g. "Thanks for registering for [Class Batch], here are next steps") — this is a **transactional email** template I'll create.
- **B. Supabase Auth emails** (password reset, email verification for admin login) — branded **auth email** templates.
- **C. Both A and B.**

## Step 4 — Contact reply emails

Two interpretations — please pick:

- **D. Auto-acknowledgement**: when someone submits the contact form, they automatically get "Thanks, we received your message" from `noreply@kwarakre8ives.com`. (Fully automated.)
- **E. Notify admin**: when someone submits, *you* get an email at your inbox with their message, so you can reply manually from your own mail client. (No branded sender needed for your reply — you reply from wherever your real inbox is.)
- **F. Both D and E.**

## Step 5 — Sender addresses

What "From" addresses do you want?
- Registration confirmation: `noreply@kwarakre8ives.com`? `hello@kwarakre8ives.com`? Custom name like "Kwara Kre8ives <hello@kwarakre8ives.com>"?
- Contact auto-reply: same or different?
- Admin notification recipient: which inbox should contact form submissions go to?

## What I need from you to proceed

1. **A / B / C** for confirmation emails
2. **D / E / F** for contact emails
3. **Sender names + addresses** (Step 5)
4. **Admin inbox** for contact form notifications (if D/E/F includes E)

Once you answer, I'll start the domain setup dialog and build everything end-to-end.
