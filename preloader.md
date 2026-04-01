# KISAN CARTS Preloader Color Scheme

The preloader for KISAN CARTS's website uses a carefully selected color palette that aligns with the brand's identity and creates a visually appealing loading experience.

## Primary Background

The preloader uses a rich red gradient background that creates depth and visual interest:

```css
bg-gradient-to-br from-red-900 via-red-800 to-red-900
```

This gradient transitions from a deep red (`red-900`) at the top-left, through a slightly lighter red (`red-800`) in the middle, and back to deep red (`red-900`) at the bottom-right. This creates a subtle, professional appearance that maintains brand consistency.

## Text and Content Colors

### Main Counter Text
- **Color**: `text-white` (Pure white)
- **Opacity**: 100%
- **Purpose**: The main counter numbers (showing percentages and statistics) use full white for maximum contrast and readability against the red background.

### Header Text
- **Color**: `text-white/40` (White with 40% opacity)
- **Purpose**: The category headers above the counters (like "Products Delivered", "Quality Assurance") use semi-transparent white to create visual hierarchy.

### Loading Text
- **Color**: `text-white/60` (White with 60% opacity)
- **Purpose**: The "Loading..." text uses 60% white opacity, making it visible but secondary to the main counter.

## Loading Bar

The loading progress indicator uses:

1. **Bar Background**: `bg-white/20` (White with 20% opacity)
   - Creates a subtle container for the progress indicator

2. **Progress Indicator**: `bg-gradient-to-r from-red-400 to-red-500`
   - A horizontal gradient from lighter red (`red-400`) to medium red (`red-500`)
   - This creates a sense of motion and progress

## Decorative Elements

- **Vertical Divider**: `bg-gradient-to-b from-transparent via-white/20 to-transparent`
  - A subtle vertical line that transitions from transparent to 20% white opacity and back
  - Creates visual separation between elements without being distracting

## Color Psychology

The red color scheme in the preloader:
- Establishes brand identity immediately
- Creates a sense of energy and dynamism
- Conveys passion and reliability
- Maintains visual consistency with the rest of the website

The careful use of opacity levels creates depth and hierarchy, guiding the user's eye to the most important information while they wait for the site to load.