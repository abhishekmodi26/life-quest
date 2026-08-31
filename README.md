# Life Quest — your own free web app

This folder is your complete tracker, ready to host anywhere for free.
Progress saves in your browser on each device, and your Vault backups
move it between devices or apps.

## Step 1 — Carry your progress over
1. Open your current Life Quest tracker (the Claude artifact).
2. Records tab → The Vault → **Export backup**. Keep the .json file.

## Step 2 — Put it online (pick one, all free)

**Netlify Drop (easiest, ~2 minutes)**
1. Go to https://app.netlify.com/drop (free account).
2. Drag this whole folder onto the page.
3. You get a URL like `https://something.netlify.app` — that's your app.

**GitHub Pages (most permanent)**
1. Create a free account at github.com → New repository (public), e.g. `life-quest`.
2. Upload all files from this folder (drag & drop on the repo page), commit.
3. Repo Settings → Pages → Source: `main` branch, `/ (root)` → Save.
4. Your app lives at `https://YOURNAME.github.io/life-quest/`.

**Cloudflare Pages** — pages.cloudflare.com → free account → Upload assets → drag folder.

## Step 3 — Restore your progress
Open your new URL → Records tab → The Vault → **Restore from file** → pick the backup from Step 1. Everything returns: XP, streaks, journals, photos, trophies.

## Step 4 — Make it feel like an app on your phone
Open the URL in Chrome (Android) or Safari (iPhone) → browser menu →
**Add to Home Screen**. It installs with its own icon, opens full-screen,
and works offline after the first load.

## Things to know
- Progress lives in each browser's storage. It survives closing the tab and
  restarting the phone, but clearing browser data erases it — so keep the
  weekly Vault backup habit. Backups also move progress between devices.
- Pick ONE home (the artifact or this app) as your real tracker, so the
  record doesn't split. Move with a backup whenever you switch.
- Push reminders still come from Claude, independent of where the app lives.
- Never edit index.html by hand mid-arc; ask Claude for changes, then
  re-upload the new file — your progress is in the browser, not the file.

## Sharing a view-only ledger (wife / trainer)
1. Every Sunday you already export a backup. Rename that file `progress.json`.
2. Upload it to this same repo (replacing the old one), commit.
3. Send them your app URL with `?view` at the end:
   `https://YOURNAME.github.io/life-quest/?view`
They see your real record — quests, weight, trends, trophies — strictly read-only. It refreshes each time you upload a new progress.json. Without that file, the viewer page shows "no shared ledger found".
