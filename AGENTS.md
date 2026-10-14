# Project rules
- Keep the three insurance product pages in shared `ProductIntro`, with page-owned text and SEO, so their concise presentation stays consistent.
- Compose homepage sections in `Index` and keep comparison and founder presentation in `EditorialSections`, so landing changes remain separate from application logic.
- Use shared `BilanButton` for the landing and short product pages, so their conversion destination and label stay consistent.
- Hide the floating WhatsApp widget on the homepage, which provides its secondary contact link in the hero, to avoid competing conversion actions.
- Share regulatory disclosures through `RegulatoryDetails` and transparency content through `TransparencySections`, so the footer, dedicated pages and homepage do not drift apart.
- Capture report requests separately from callback opt-in; `buildContactPreferences` is the single outbound mapping and omits the phone unless callback consent is explicitly true, so a report alone cannot trigger phone outreach from its payload.
- Keep Make as the existing external lead delivery endpoint and await its response before confirming submission; external email automation, CRM mapping and advisor signatures are not implemented by the client and must be verified separately.