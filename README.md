# MARKETING MEDIA — Website

## How to Customize Your Website

### 1. Update Your Logo
Open `src/config/siteConfig.js` and find the `LOGO_CONFIG` section at the top:
```js
export const LOGO_CONFIG = {
  src: "YOUR_LOGO_FILE_PATH_OR_URL_HERE",  // Replace with your logo URL or file path
  alt: "MARKETING MEDIA Logo",
  height: "60px",
};
```
Place your logo file in the `public/` folder and set `src` to `/your-logo.png`, or use a full URL.

### 2. Update All Website Content
Open `src/config/siteConfig.js` — this is the **ONLY** file you need to edit for all text content.

Replace every `[ADD ...]` placeholder with your real data:
- **HERO**: Headline, subheadline, description, trust badges
- **SERVICES**: Service names, descriptions, icons
- **RESULTS**: Stats numbers and labels
- **PROCESS**: Step titles and descriptions
- **PORTFOLIO**: Project names, images, categories, results
- **TESTIMONIALS**: Client quotes, names, companies
- **WHY CHOOSE US**: Feature titles and descriptions
- **CONTACT**: Email, phone, address, social links, service options
- **FOOTER**: Tagline, service list

### 3. Change Colors
Open `src/App.css` and modify the CSS variables at the top:
```css
:root {
  --color-primary-blue: #1A3C8F;
  --color-baby-pink: #F8C8D4;
  --color-white: #FFFFFF;
  --color-soft-pink: #FDE8EE;
  --color-dark-blue: #0D2561;
}
```

### 4. Change Icons
Service and feature icons use [Lucide React](https://lucide.dev/icons) names.
In `siteConfig.js`, change the `icon` field to any valid Lucide icon name (e.g., `"Megaphone"`, `"BarChart3"`, `"Palette"`).

### 5. Deploy
- Run `yarn build` to create a production build
- Upload the `build/` folder to any static hosting (Netlify, Vercel, etc.)

### File Structure
```
src/
  config/siteConfig.js  ← EDIT THIS FILE for all content
  components/           ← Section components (no need to edit)
  App.js               ← Main app layout
  App.css              ← Custom styles & animations
  index.css            ← Base styles & fonts
```
