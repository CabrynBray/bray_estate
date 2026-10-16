# Bray Estate Website

A responsive multi-page website concept for a rustic, elegant country venue. The design uses forest green, warm ivory, sage, champagne gold, and walnut.

## Pages
- `index.html` — Home / landing page
- `venue.html` — Venue details
- `stays.html` — Five independently bookable guest-stay concepts
- `gallery.html` — Large image gallery
- `availability.html` — Date and event inquiry form
- `contact.html` — Contact inquiry form

## Open the website
1. Download and unzip the folder.
2. Open `index.html` in a browser, or open the folder in VS Code.
3. For local development, use the VS Code Live Server extension.

## Change the photos
The two uploaded reference images are in `images/`:
- `barn-exterior.jpg`
- `estate-master-plan.jpg`

Replace these files with your own photos using the same filenames, or update the `src` paths in the HTML. Gallery and stay photos currently repeat these reference images as placeholders. Replace them with real photos of the barn interior, ceremony spaces, cabins, lodges, patios, pond, and trails.

## Change the colors
Edit the CSS variables at the top of `css/main.css`. The palette is:
- Forest: `#243D32`
- Deep forest: `#172B23`
- Warm ivory: `#F7F3EA`
- Sage: `#A9B8A0`
- Champagne gold: `#B99A68`
- Walnut: `#51463A`

## Page-specific styling
Each page has its own stylesheet:
- `css/home.css`
- `css/venue.css`
- `css/stays.css`
- `css/gallery.css`
- `css/availability.css`
- `css/contact.css`

Shared styles live in `css/main.css`.

## Booking and contact limitations
This is a front-end concept. It does **not** connect to a live calendar, save bookings, prevent double bookings, calculate prices, or take payments. The forms currently attempt to open an email draft with a placeholder address.

Before publishing:
1. Replace `YOUR-EMAIL@example.com` in `js/main.js` with the venue's real email.
2. Replace placeholder stay names, capacities, amenities, prices, and photos with accurate details.
3. For true live availability and automatic reservations, connect a booking database/backend or a third-party booking platform. For payments, integrate a provider such as Stripe through a secure backend; never put secret payment keys in front-end code.
4. Check image rights, accessibility, property details, and mobile layout before launch.

## GitHub Pages
Upload the contents of this folder to your GitHub repository (keep the folder structure), enable GitHub Pages in repository settings, and publish from your chosen branch/folder. Static pages will work on GitHub Pages; live bookings and payments require an external service or backend.
