# Add Place to Explore Page

Add a new place to the explore page (`app/explore/data.ts`), then commit and push a PR branch.

## Usage

```
/add-place <name>: <description>. <Google Maps URL>
```

Example:
```
/add-place Atara: excellent little Palestinian restaurant. No reservation needed. https://maps.app.goo.gl/...
```

## Steps

1. **Parse the input** — extract name, description, and Google Maps URL from `$ARGUMENTS`.

2. **Get coordinates** — fetch the Google Maps URL in a browser or via search to extract the `@lat,lng` from the redirected URL. If no URL is provided, search the web for the place name + Istanbul to find coordinates.

3. **Determine category and subcategory** — infer from the description:
   - `breakfast` — breakfast/brunch spots
   - `lunch` — lunch restaurants
   - `dinner` — dinner restaurants (subcategory: `Turkish` | `Fine Dining` | `International`)
   - `coffee` — cafes and coffee shops
   - `nightlife` — bars and clubs
   - `shop` — shops (subcategory: `Accessories` | `Clothing` | `Lifestyle`)
   - `visit` — sights (subcategory: `History` | `Arts & Culture`)
   - `do` — activities (subcategory: `Explore` | `Wellness`)
   - `stay` — hotels

4. **Determine neighborhood** — infer from the address or coordinates (Beşiktaş, Karaköy, Beyoğlu, Nişantaşı, Bebek, Etiler, Bomonti, Cihangir, Fatih, etc.).

5. **Add the entry** to `app/explore/data.ts` inside the correct `// ── <Category> ──` section comment. Follow the existing format exactly:

```typescript
{
  name: "Place Name",
  neighborhood: "Neighborhood",
  description: "Description from user input",
  category: "dinner",
  subcategory: "International",   // omit if not applicable
  lat: 41.042923,
  lng: 29.00812,
},
```

6. **Create a PR branch** named `feat/add-<kebab-case-name>` from `main`, commit only `app/explore/data.ts`, push, and open a GitHub PR targeting `main` with a short description.

## Notes

- Only modify `app/explore/data.ts` — nothing else.
- Coordinates must be precise (5+ decimal places) — extract from the Google Maps URL `@lat,lng` fragment, or from a geocoding search.
- If the user provides a shortened Google Maps URL (maps.app.goo.gl), search for the place name to find the full address and coordinates rather than fetching the short URL directly.
- The existing places list shows the style conventions — match them exactly.
