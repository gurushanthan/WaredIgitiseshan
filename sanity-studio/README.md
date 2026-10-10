# WareDigitise News Studio

This is the Sanity editor for the public WareDigitise news feed. It uses the existing Sanity project (`oc86z5oj`) and its `production` dataset.

If `production` is not listed under **Sanity Manage → Datasets**, create it with **Public** visibility before continuing. Only content intentionally published on the public website should go in this dataset.

## Run the editor locally

From this directory, run `npm install`, then `npm run dev`. Sign in with the Sanity account that owns the project.

## Publish the editor

Run `npm run deploy`, choose a Studio hostname when prompted, then invite the admin's Sanity account from **Sanity Manage → Members**. The deployed editor link will be `https://<chosen-hostname>.sanity.studio`.

## Allow the public website to read news

In **Sanity Manage → API → CORS origins**, add:

- `https://waredigitise.com`
- `https://www.waredigitise.com`
- `http://localhost:8000` (for local preview)

Enable credentials only if the Studio origin needs them; the public website reads published posts without an API token. Never add a write token to this public site.
