# Design System Strategy: The Automotive Concierge

## 1. Overview & Creative North Star
The "Creative North Star" for this design system is **The Digital Curator**. In the high-end automotive sourcing world, luxury is defined by precision, scarcity, and effortless service. This system rejects the cluttered "marketplace" aesthetic in favor of a bespoke editorial experience.

By leveraging the stark contrast of the KMT Global logo, the UI uses intentional asymmetry, expansive breathing room, and overlapping structural elements to create a sense of mechanical precision and architectural depth. We move beyond "templates" by treating every screen as a high-fidelity gallery where typography and tonal layering do the heavy lifting, not lines or boxes.

## 2. Colors & Tonal Depth
The palette is a sophisticated monochrome spectrum designed to feel expensive and authoritative.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Boundaries must be established through background color shifts.
*   Use `surface` (#131313) for the primary canvas.
*   Transition to `surface_container_low` (#1b1b1b) for secondary sections.
*   Use `surface_container` (#1f1f1f) or `surface_container_high` (#2a2a2a) to define content "islands."

### Surface Hierarchy & Nesting
Think of the UI as a series of stacked, precision-milled layers. 
*   **Lowest Layer:** `surface_container_lowest` (#0e0e0e) for deep background elements or recessed inputs.
*   **Active Layer:** `surface` (#131313) as the global base.
*   **Elevated Layer:** `surface_bright` (#393939) for interactive elements like cards that need to "catch the light."

### The "Glass & Gradient" Rule
To add visual "soul" to the automotive aesthetic, use Glassmorphism for floating navigation and detail overlays. Apply `surface_container` with a 70% opacity and a 20px backdrop-blur. 
*   **Signature Textures:** For primary CTAs and Hero backgrounds, apply a subtle linear gradient from `primary` (#ffffff) to `primary_container` (#d4d4d4) to mimic the sheen of automotive paint.

## 3. Typography: Editorial Authority
The type system balances the technical "Space Grotesk" with the humanistic "Manrope."

*   **Display & Headlines (Space Grotesk):** These are your "statements." Use `display-lg` (3.5rem) with tight tracking (-2%) for hero sections. The geometric, tech-forward nature of Space Grotesk mirrors the precision of vehicle engineering.
*   **Titles & Body (Manrope):** Use `title-md` and `body-lg` for all functional descriptions. Manrope’s neutrality ensures that "Concierge-level service" feels approachable and trustworthy.
*   **Labels (Space Grotesk):** Use `label-md` (0.75rem) in all-caps with generous letter-spacing (0.05rem) for metadata—mimicking the stamps on high-performance engine components.

## 4. Elevation & Depth: Tonal Layering
We achieve hierarchy without traditional structural lines.

*   **The Layering Principle:** Depth is achieved by "stacking" surface-container tiers. A `surface_container_high` card sitting on a `surface` background creates a natural lift.
*   **Ambient Shadows:** For floating elements (Modals, Dropdowns), shadows must be extra-diffused. Use a 40px blur with 6% opacity using a tint of `on_surface` (#e2e2e2).
*   **The "Ghost Border" Fallback:** If a container requires further definition for accessibility, use the `outline_variant` (#474747) at 15% opacity. Never use 100% opaque borders.

## 5. Components

### Buttons
*   **Primary:** High-contrast `on_primary` (#1a1c1c) text on `primary` (#ffffff) background. 0.25rem (`DEFAULT`) roundedness.
*   **Secondary:** `surface_container_high` background with `on_surface` text. No border.
*   **States:** Hovering over a primary button should trigger a slight shift to `secondary` (#c7c6c6).

### Input Fields
*   **Style:** Recessed appearance. Use `surface_container_lowest` for the field background. 
*   **Focus:** Indicate focus with a `primary` (#ffffff) bottom-bar only (2px), rather than a full outline.

### Cards & Lists
*   **Forbid Dividers:** Do not use line separators. Use `Spacing 8` (2.75rem) to separate list items, or alternate background shades between `surface` and `surface_container_low`.
*   **Imagery:** Vehicle photography should use the "Ken Burns" effect (subtle zoom/pan) when hovered, housed within `md` (0.375rem) rounded corners.

### Concierge-Specific Components
*   **Status Timeline:** A vertical stepper using `outline_variant` lines (10% opacity) and `primary` dots to track a vehicle sourcing journey from "Auction" to "Delivery."
*   **Spec-Sheet Grids:** A 2-column asymmetric grid for vehicle specifications, using `label-md` for keys and `title-sm` for values.

## 6. Do’s and Don'ts

### Do:
*   **Do** use asymmetrical layouts. Let a vehicle image bleed off the right edge of the screen while typography is anchored left.
*   **Do** use white space as a luxury "material." If in doubt, add more padding from the `Spacing 16` or `20` tokens.
*   **Do** use the logo as a watermark in `surface_container_high` (low opacity) in the background of empty states.

### Don't:
*   **Don't** use pure #000000 for backgrounds; use the `surface` (#131313) to allow for subtle shadows and depth.
*   **Don't** use standard "blue" for links. Use `primary` (white) with an underline or `tertiary` (#e2e2e2) for subtle interaction.
*   **Don't** use rounded corners larger than `xl` (0.75rem). High-end automotive design favors "softened tension" over "bubbly" friendliness.