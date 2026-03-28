# Design System Strategy: KMT Global

## 1. Overview & Creative North Star: "Precision Monochrome"
The core objective of this design system is to mirror the mechanical precision and transparent nature of the Japanese automotive auction system. We are moving away from the "template" look of standard car marketplaces toward a high-end editorial experience that feels like a premium horology magazine or a precision engineering manual.

**The Creative North Star: The Digital Curator.**
This system does not just "list" cars; it archives them. Through intentional asymmetry—such as oversized typography paired with narrow data columns—and a brutalist lack of decorative ornamentation, we create a sense of absolute reliability. We replace traditional UI "friendliness" with professional authority, utilizing a strictly monochrome palette to emphasize the raw forms of automotive design.

---

## 2. Colors: The Tonal Spectrum
Luxury is defined by what is absent. In this system, color is entirely absent, replaced by a sophisticated hierarchy of light and shadow.

*   **Primary Palette:** 
    *   `primary` (#ffffff) and `background` (#131313) create the high-contrast foundation.
    *   `secondary` (#c7c6c6) acts as the bridge for secondary information and iconography.
*   **The "No-Line" Rule:** 1px solid borders for sectioning are strictly prohibited. Boundaries must be defined by shifts in background tokens (e.g., a section using `surface_container_low` sitting on a `surface` background). This forces a cleaner, more integrated layout.
*   **Surface Hierarchy & Nesting:** Treat the UI as physical layers of high-grade material. Use `surface_container_lowest` (#0e0e0e) for deep background elements and `surface_container_highest` (#353535) for active, elevated components.
*   **The Glass & Gradient Rule:** For hero sections, use a subtle gradient transitioning from `primary` (#ffffff) to `primary_container` (#d4d4d4) to give a metallic, brushed-aluminum sheen. Floating modals should use a 60% opacity on `surface_container` with a 24px backdrop blur to maintain the high-end "frosted glass" aesthetic.

---

## 3. Typography: Engineered Elegance
We utilize a pairing of **Space Grotesk** for engineering precision and **Inter** for readable clarity.

*   **Display & Headlines (Space Grotesk):** These are the structural pillars. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) to mimic the stamping on an engine block. These should be high-contrast (`on_background` #e2e2e2).
*   **Body & Titles (Inter):** Reserved for data and descriptions. `body-lg` (1rem) provides a neutral, functional contrast to the expressive headlines.
*   **Labels (Space Grotesk):** `label-md` (0.75rem) should always be uppercase with increased tracking (+0.1em) for a technical, "spec-sheet" feel.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "soft" for an automotive sourcing service. We achieve depth through structural stacking.

*   **The Layering Principle:** Avoid elevation shadows where possible. Instead, place a `surface_container_high` card inside a `surface_container_low` section. The subtle difference in hex values provides all the separation required for a sophisticated eye.
*   **Ambient Shadows:** If an element must float (like a "Quick Bid" button), use an extra-diffused shadow: `box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.4)`. The shadow must never look like a black smudge; it must look like a soft occlusion of light.
*   **The "Ghost Border" Fallback:** For input fields or cards that require a defined edge for accessibility, use the `outline_variant` (#474747) at 20% opacity. If you can see the line clearly, it is too heavy.
*   **Radius Scale:** In line with the "precision engineered" theme, the roundedness scale is set to `0px`. Sharp corners convey industrial strength and align with the sharp geometry of the KMT Global logo.

---

## 5. Components: Industrial Primitives

*   **Buttons:**
    *   **Primary:** Solid `primary` (#ffffff) background with `on_primary` (#1a1c1c) text. Sharp corners.
    *   **Secondary:** Ghost style. No background, `outline` (#919191) border at 20% opacity.
*   **Cards & Lists:**
    *   **Rule:** Forbid divider lines. Use vertical white space (`spacing-8` or `spacing-10`) to separate car listings.
    *   **Layout:** Use asymmetrical grids—large car imagery on the left, condensed technical specs (using `label-sm`) on the right.
*   **Input Fields:**
    *   Use `surface_container_highest` for the background. No border. On focus, shift the background to `surface_bright` (#393939).
*   **Chips:**
    *   Used for vehicle categories (e.g., "Auction Grade 4.5"). Rectangular, using `secondary_container` (#464747) with `label-md` text.
*   **Auction Progress Bar:**
    *   A bespoke component. Use a thin line of `primary` (#ffffff) against a `surface_container_highest` (#353535) track. No rounded ends.

---

## 6. Do's and Don'ts

### Do:
*   **DO** use whitespace as a functional element. High-end design requires room to breathe.
*   **DO** use `surface_variant` (#353535) for subtle hover states rather than changing colors.
*   **DO** align text to a strict vertical axis to maintain the "spec-sheet" aesthetic.
*   **DO** leverage the high-contrast `on_primary_fixed` (#ffffff) for critical calls to action.

### Don't:
*   **DON'T** use icons with rounded corners or "friendly" illustrations. Use technical, thin-stroke SVG icons.
*   **DON'T** introduce any hue. Even a "cool blue" or "warm grey" will break the monochrome purity of the KMT Global brand.
*   **DON'T** use 100% opaque borders. They clutter the visual field and look "bootstrap."
*   **DON'T** use center-alignment for long blocks of text. Stick to left-aligned editorial layouts.