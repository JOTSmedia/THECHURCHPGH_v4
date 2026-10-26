---
name: The Church Recording Studio
description: V4 — actual church photography, native equipment disclosures, concise studio content.
colors:
  bg: "#171310"
  surface: "#28211c"
  ink: "#f2eee5"
  muted: "#c9bfb2"
  accent: "#bea083"
  light: "#e1dfd9"
  dark-ink: "#29201a"
  interior-ground: "#10100f"
  api-field: "#0b1823"
  video-field: "#101e18"
  people-field: "#211711"
  archive-field: "#1e1b13"
  field-rule: "#7b746b"
  placeholder: "#5e554c"
  action-hover: "#755a40"
typography:
  display:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "min(22vw, 370px, 42svh)"
    fontWeight: 400
    lineHeight: 0.72
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(64px, 10vw, 160px)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(28px, 3.1vw, 48px)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Chivo, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0.015em"
  label:
    fontFamily: "Chivo, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
rounded:
  square: "0"
spacing:
  gutter: "clamp(20px, 3.4vw, 64px)"
  section: "120px"
  chapter-gap: "50px"
  form-column: "26px"
components:
  action-link:
    backgroundColor: "transparent"
    rounded: "{rounded.square}"
    padding: "14px 0"
  action-link-hover:
    textColor: "{colors.action-hover}"
  room-option:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.square}"
    padding: "6px 0"
  room-option-hover:
    textColor: "{colors.ink}"
  field:
    backgroundColor: "transparent"
    textColor: "{colors.dark-ink}"
    rounded: "{rounded.square}"
    padding: "10px 0"
  playback:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.square}"
    padding: "17px 24px"
  playback-hover:
    backgroundColor: "{colors.accent}"
---

# Design System: The Church Recording Studio — V4

## Direction

The actual building supplies the visual identity: timber, stone, stained glass within photographs, and the working rooms. Monumental Libre Caslon Display and restrained Chivo controls remain uppercase, concise, and factual. V4 replaces the prior model-led arrival and console section with a photographic church opening and an expandable Equipment List. It preserves V3’s desktop hero spacing and the established chapter compositions.

This file and `.impeccable/design.json` describe the current website. Earlier direction records and reviews in `docs/` are historical. Current verification is recorded in `docs/QA-REPORT.md`. User-facing version: V4. Internal package: 5.0.0.

## Composition

- The full photographic hero retains native scrolling and its centered two-line name. From 701px, its height is 100svh with a 480px minimum; title size is `min(22vw,370px,42svh)`. The title sits `clamp(110px,20svh,190px)` above the bottom. Bottom links use `clamp(24px,4svh,42px)` clearance. Mobile remains unchanged.
- Studio A, Studio B, and Mastering are the three room choices. Titles sit below their photographs with 42px top clearance, or 32px on small screens. Do not reintroduce overlap or negative offsets.
- Equipment is a working inventory: eight native disclosure groups and 174 entries. The real API installation photograph and factual console listing remain. The chapter contains no model or canvas. Keep direct access to the complete `gear.html` inventory.
- Video services and green-screen availability use the actual live-room photographic field. Only user-confirmed capabilities are stated.
- Dana is the only personnel profile. Keep the face fully visible; preserve the 4:5 crop and top-centered focal point. Mastering inquiries route through the studio contact form and email.
- The archive is a native sideways gallery beginning with the actual tape photograph. Contact uses a light stone surface with a restrained actual piano field.

## Church opening

`assets/opening.css` owns the opening presentation; `assets/opening.js` owns its lifecycle. The interim image at `assets/images/church-opening.webp` is copied from an existing actual studio stained-glass photograph. Replace it when the user supplies the intended image. Do not invent a cathedral interior or overlay fabricated glass onto other imagery.

The horizontal rail and percentage report five settled readiness outcomes: the hero image, opening image, and three local font loads. They are not download-byte measurements. Normal minimum: 1800ms. Deadline: 4500ms, followed by a 500ms exit. Reduced/global-paused motion has no minimum and a 1400ms deadline. Skip and Escape close it; refresh replays it and returns to the hero. The footer Replay Opening action remains. Deep links and the explicit skip parameter remain available.

The website no longer depends on Three.js or a WebGL model. The preserved standalone model in Desktop/API is separate and must not be imported into V4.

## Color and photographic fields

Warm paper, dark timber, muted stone, and aged brass remain the primary colors. `--interior-ground` is the shared near-black used by surviving interior chapters. Real images provide chapter differences: installation photography at Equipment, the live room at Video, the cathedral roof behind Personnel, tape at Gallery, and the piano at Contact. Preserve legibility with restrained image opacity and the existing ground colors. Contact and utility reading surfaces remain light.

## Controls and accessibility

Use simple text actions, square corners, visible focus, and native controls. The Equipment List uses `details` and `summary` so it works without script. Preserve keyboard room selection, inquiry validation, reviewable email/copy/download actions, and selection within form values. Link, button, and disclosure labels are nonselectable.

All owned display text and placeholders are uppercase through CSS. Preserve underlying typed values and exported messages. Do not add redundant Pittsburgh or recording-studio taglines, invented rates, rooms, equipment, or credentials.

Instagram remains a lazy official profile iframe with retry/status and a direct profile link. YouTube loads on request. The inquiry prepares text; it does not claim to have sent a message.

Motion is bounded and responds to reduced-motion and global-pause preferences. Native scroll remains under visitor control. Idle reading motion yields to interaction and has no displayed speed or separate pause/resume UI. Keep menu, dialogue, media, form, selection, and hidden-document blocking behavior.

## Files and sharing

Pages, images, fonts, and scripts use relative local paths. A public base can be configured at deployment without hardcoding a GitHub host into the delivered source. The current share-image asset is `assets/images/church-loading-v4.jpg`, representing the church opening; its capture and metadata verification belong in `docs/QA-REPORT.md`.

Keep the original photography credits and font licenses. Historical console implementation records do not describe the V4 runtime. Preserve earlier website versions independently of this V4 folder.
