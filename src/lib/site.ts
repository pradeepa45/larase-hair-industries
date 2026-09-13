export const COMPANY = {
  legalName: "LARASE HAIR INDUSTRIES PRIVATE LIMITED",
  shortName: "LARASE",
  tagline: "Beauty in every strand. Integrity in every bundle.",
  established: "2024",
  cin: "U32904AP2024PTC115098",
  gst: "37AAFCL8708G1ZA",
  iec: "AAFCL8708G",
  pan: "AAFCL8708G",
  roc: "RoC Vijayawada",
  email: "larasehair.industries@gmail.com",
  phones: [
    { display: "+91 99897 19999", tel: "+919989719999", digits: "919989719999" },
    { display: "+91 91157 19999", tel: "+919115719999", digits: "919115719999" },
  ],
  address: {
    lines: [
      "Dhanu Nilayam, 22-17-1196",
      "Babu Jagjivan Ramnagar, Vengalarao Nagar",
      "Bharatpet 9th Lane",
      "Guntur, Andhra Pradesh 522002",
    ],
    mapsUrl: "https://maps.app.goo.gl/xxn6WSEcJ7yBp6Fx9",
    lat: 16.3174232,
    lng: 80.440394,
  },
  hsCodes: [
    { code: "05010010", label: "Human hair, unworked" },
    { code: "05010020", label: "Human hair, worked / processed" },
  ],
} as const;

export const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#quality", label: "Quality" },
  { href: "#products", label: "Products" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
] as const;

export type HairCategory = "wavy" | "curly" | "straight" | "blonde";

export const FILTERS: { id: "all" | HairCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "wavy", label: "Wavy" },
  { id: "curly", label: "Curly" },
  { id: "straight", label: "Straight" },
  { id: "blonde", label: "Blonde" },
];

export const PRODUCTS: {
  src: string;
  alt: string;
  title: string;
  category: HairCategory;
}[] = [
  {
    src: "/gallery/studio_wavy.jpg",
    alt: "Natural dark brown wavy human hair bundle on linen",
    title: "Natural Wavy Bundle",
    category: "wavy",
  },
  {
    src: "/gallery/wavy_1.jpg",
    alt: "Long natural wavy hair, back view",
    title: "Wavy Length",
    category: "wavy",
  },
  {
    src: "/gallery/wavy_3.jpg",
    alt: "Soft natural wavy hair on a mannequin",
    title: "Soft Wave",
    category: "wavy",
  },
  {
    src: "/gallery/wavy_2.jpg",
    alt: "Close-up of a natural wavy hair weft",
    title: "Wavy Weft",
    category: "wavy",
  },
  {
    src: "/gallery/studio_curly.jpg",
    alt: "Sculptural natural curly human hair bundle",
    title: "Natural Curl Bundle",
    category: "curly",
  },
  {
    src: "/gallery/curly_2.jpg",
    alt: "Close-up of a curly hair weft",
    title: "Curly Weft",
    category: "curly",
  },
  {
    src: "/gallery/curly_1.jpg",
    alt: "Natural curly hair length",
    title: "Curly Length",
    category: "curly",
  },
  {
    src: "/gallery/studio_straight.jpg",
    alt: "Sleek straight human hair weft hanging in studio light",
    title: "Straight Weft",
    category: "straight",
  },
  {
    src: "/gallery/straight_1.jpg",
    alt: "Natural black straight hair bundle",
    title: "Straight Bundle",
    category: "straight",
  },
  {
    src: "/gallery/straight_2.jpg",
    alt: "Close-up of a straight hair weft",
    title: "Single Drawn Straight",
    category: "straight",
  },
  {
    src: "/gallery/studio_blonde.jpg",
    alt: "Honey blonde natural hair bundle on cream linen",
    title: "Blonde Bundle",
    category: "blonde",
  },
  {
    src: "/gallery/blonde_1.jpg",
    alt: "Long blonde hair, back view",
    title: "Blonde Length",
    category: "blonde",
  },
  {
    src: "/gallery/blonde_2.jpg",
    alt: "Blonde hair with a center part, back view",
    title: "Blonde Silk",
    category: "blonde",
  },
  {
    src: "/gallery/blonde_3.jpg",
    alt: "Blonde wig on a mannequin, front view",
    title: "Blonde Finish",
    category: "blonde",
  },
  {
    src: "/gallery/blonde_4.jpg",
    alt: "Close-up of a blonde hair weft",
    title: "Blonde Weft",
    category: "blonde",
  },
  {
    src: "/gallery/blonde_7.jpg",
    alt: "Blonde weft texture close-up",
    title: "Blonde Texture",
    category: "blonde",
  },
];

export const PROMISES = [
  {
    title: "100% natural human hair",
    body: "Temple-grade and collected Indian hair, unprocessed at the root. No synthetic mix, no animal hair.",
  },
  {
    title: "Cuticle-aligned grading",
    body: "Single and double drawn lots, sorted for length, density, and direction so the hair lasts wash after wash.",
  },
  {
    title: "Export-ready lots",
    body: "Wefts, bulk, and bundles packed for domestic wholesale and international shipment from Guntur.",
  },
  {
    title: "Traceable paperwork",
    body: "GST, IEC, and CIN on every commercial invoice. HS codes 0501 0010 and 0501 0020 as applicable.",
  },
] as const;

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${COMPANY.phones[0].digits}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function mapsEmbedSrc() {
  const { lat, lng } = COMPANY.address;
  const delta = 0.006;
  const bbox = `${lng - delta},${lat - delta},${lng + delta},${lat + delta}`;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
}
