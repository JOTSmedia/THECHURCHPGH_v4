# The Church Recording Studio — V4

Current package version: **5.0.0**. V4 opens with an actual photograph of the church’s stained glass and replaces the interactive console chapter with an expandable **Equipment List**. Rooms, video services, green-screen availability, Dana’s profile, the photographic gallery, Instagram, and the reviewable email inquiry remain.

Delivery location: **Desktop/THECHURCHPGH/v4**. Earlier versions remain separate. The console model is preserved as an independent project in **Desktop/API**; the V4 website has no 3D runtime or connection to that project. Current verification is recorded in `docs/QA-REPORT.md`.

## Preview locally

Install Node.js 22 or later, open a terminal in this folder, and run:

```sh
npm run dev
```

Open the address printed by the server (normally `http://127.0.0.1:4173`). Use `PORT=4174 npm run dev` if that port is busy. You can also double-click `index.html` for a basic offline preview; the local server is recommended for full browser behavior and media.

## Check and build

```sh
npm run check
npm run build
```

`_site/` is the publication directory. Root source files also work directly on a static host. Internal pages, styles, scripts, images, fonts, and navigation use relative paths, including on a repository subpath. Legacy routes redirect to their new locations.

## Publish to GitHub Pages

1. Upload **the contents of this folder**, including `.github/` and `.nojekyll`, to a repository root. `index.html` must be at the root.
2. In **Settings → Pages → Build and deployment**, choose **GitHub Actions**.
3. Push to `main`, or run the included deployment workflow manually. It validates the site, configures public metadata on its build copy, builds, and deploys.

No dependency installation, API key, external build service, or contact backend is required. The workflow uses Node 22. For a branch deployment, configure the intended public base first, commit the resulting metadata, then select `main` and `/ (root)` in Pages.

## Local paths and sharing

The delivered source has no fixed publishing hostname. `npm run configure -- --local` restores portable relative metadata. At publication, the optional `npm run configure -- https://YOUR-DOMAIN/OPTIONAL-PATH/` command supplies the absolute canonical, sharing-image, and sitemap URLs required by public crawlers. Do not edit those URLs individually. A sharing service needs a publicly reachable URL to fetch an image; desktop files alone cannot produce a public preview.

The V4 share-image path is `assets/images/church-loading-v4.jpg`, showing the church opening. Capture and metadata verification are recorded in `docs/QA-REPORT.md`. Outbound contact, Instagram, video, map, and source-credit links remain intentional external destinations.

## Opening and equipment

The opening uses `assets/images/church-opening.webp`, an existing actual studio stained-glass photograph. It is an interim image until the requested replacement photograph is supplied. Keep the architectural glass within real photography; do not add fabricated glass overlays.

`assets/opening.js` tracks five resource outcomes: the hero image, opening image, and three local font loads. Its horizontal rail and percentage represent settled resource outcomes, not total download bytes. A normal opening has a 1.8-second minimum, a 4.5-second deadline, and a 0.5-second exit. Reduced or globally paused motion removes the minimum and uses a 1.4-second deadline. Enter Site and Escape skip. Refresh replays the opening and returns to the hero; the footer can replay it. Initial deep links and `?opening=skip` remain useful for direct navigation.

The Equipment List has eight native expandable categories containing 174 inventory items. Category headings have no counts. It works without JavaScript and remains available on `gear.html`. The factual custom 40-channel API 2448 listing and real installation photograph are retained as equipment content. No console model, canvas, or model controls remain in V4.

## Content, contact, and accessibility

Copy is concise and factual: Recording Studio identifies the business once and Pittsburgh appears once in the hero. Studio A, Studio B, and Mastering are the three room choices. Video services and green-screen availability are user-supplied facts. Personnel features Dana only; mastering inquiries use the studio contact form and email.

The form validates input, prepares a message for review, and offers Open email app, Copy message, and Download message. It does not send to a server or report a successful send. Uppercase is presentation only; typed values remain intact.

The official Instagram profile widget loads lazily and retains retry/status recovery and an Open Profile link. YouTube loads only after Play Session and retains a direct link. Both are third-party services.

Semantic landmarks, visible focus, native disclosures and fields, keyboard room controls, reduced-motion support, persisted global motion pause, and no-script access remain. Native scroll drives the photographic hero. Idle reading motion yields immediately to visitor activity and is blocked by forms, media, dialogs, selection, hidden state, and reduced/global motion preferences. No dedicated auto-scroll controls or speed labels are shown. Links and buttons are nonselectable; form values remain selectable.

## Editing

- Page content and expandable inventory: `index.html`; inventory utility page: `gear.html`.
- Shared primitives: `assets/style.css`; main composition: `assets/experience.css`.
- Church opening: `assets/opening.js`, `assets/opening.css`, and `assets/images/church-opening.webp`.
- Equipment disclosures: `assets/equipment.css`.
- Rooms and inquiries: `assets/app.js`; scroll scenes and Instagram: `assets/experience.js`.
- Current design authority: `DESIGN.md` and `.impeccable/design.json`.
- Facts, provenance, and verification: `docs/CONTENT-AUDIT.md`, `docs/ASSET-SOURCES.json`, and `docs/QA-REPORT.md`.

V3’s desktop hero spacing is retained: typography responds to viewport height and width, with a reserved gap above the bottom links. Real chapter photographs and the room-title clearance remain. Existing studio, manufacturer, and video photography retains its copyright; no open license is asserted. Preserve source credits and bundled Chivo and Libre Caslon Display licenses.

The older ZIP referenced in the original conversation was unavailable to this chat and was never inspected or merged. This delivery continues the current local redesign. No public deployment is implied by the local package.
