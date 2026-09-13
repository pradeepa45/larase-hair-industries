# LARASE HAIR INDUSTRIES PRIVATE LIMITED

Official website for **LARASE HAIR INDUSTRIES PRIVATE LIMITED** — 100% natural human hair from Guntur, Andhra Pradesh.

This archive is the full source of the site: pages, styles, product photography, brand mark, map, and share images.

## Run on your computer

You need **[Node.js 22](https://nodejs.org/)** (or newer) and npm.

```bash
unzip larase-hair-industries-source.zip
cd larase-hair-industries
npm install
npm run dev
```

Open **http://localhost:8080** in a browser.

To stop the server, press `Ctrl+C` in the terminal.

## Production build

```bash
npm run build
```

The app is set up for a **Vercel** deploy (TanStack Start + Nitro). Any host that can run a Vite / Node 22 app also works.

## What is in this folder

| Path | Contents |
| --- | --- |
| `src/routes/` | Home page and document shell |
| `src/components/` | Header, gallery, contact, footer, logo download |
| `src/lib/site.ts` | Company copy, GST, IEC, phones, address |
| `public/gallery/` | Product photography |
| `public/brand/` | Logo PNG / SVG / kit |
| `public/images/` | Hero and atelier stills |
| `public/maps/` | Location pin image |
| `public/og.jpg` | Link preview image |
| `public/x-banner.jpg` | X / Twitter banner |

## Company details

- **Legal name:** LARASE HAIR INDUSTRIES PRIVATE LIMITED
- **Address:** Dhanu Nilayam, 22-17-1196, Babu Jagjivan Ramnagar, Vengalarao Nagar, Bharatpet 9th Lane, Guntur, Andhra Pradesh 522002
- **GST:** 37AAFCL8708G1ZA
- **IEC:** AAFCL8708G
- **CIN:** U32904AP2024PTC115098
- **Phone:** +91 99897 19999 · +91 91157 19999
- **Email:** larasehair.industries@gmail.com

Edit `src/lib/site.ts` to change copy, credentials, or contact details.

Brand files (PNG, SVG, kit) live in `public/brand/`.

## Stack

React 19, TanStack Start / Router, Tailwind CSS v4, Vite 8.
