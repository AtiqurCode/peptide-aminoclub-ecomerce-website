export type ProductCategory = 'Metabolic' | 'Tissue Repair' | 'Cellular' | 'Cosmetic' | 'Nootropic'
export type ProductKind = 'Vial' | 'Spray'

export interface Product {
  id: string
  name: string
  category: ProductCategory
  kind: ProductKind
  purity: string
  basePrice: number
  tint: string
  sub: string
  lot: string
  abbr: string
  date: string
  img: string
}

const S3 = 'https://s3.us-east-1.amazonaws.com/medusajs.cloud-data-prod-use1-20241127093450366600000001/e432a7e0149b9f2bd6e%2F'
const SITE = 'https://www.aminoclub.com'

const GEN = [
  S3 + 'Group%20427319410-01KWCZYZBEV8W0FD843ZBY73PR.png',
  S3 + 'Group%20427319411%20%282%29-01KWCZ4XZMAQQGZEYBXD5TF8AA.png',
  S3 + 'Group%20427319415-01KWD02G3YQ1MRKKF9RZGWE961.png',
  S3 + 'Vaccine-Bottle_v013-01KDHQH9PVKHPQY0NTXSQ7A9K5.png'
]

const IMAGE_MAP: Record<string, string> = {
  glp1: S3 + 'GLP-1%20%28SM%29-01KYMQP96GMJFNS2XA6FK1WVJG.png',
  glp2: S3 + 'GLP-2%20%28TR%29-01KYMPT8WGCB2M4VSE0F0NGMY9.png',
  ghkcu: S3 + 'GHK-Cu.thumbnail-01KE3R2EE8KPZ8BWMB18HJEZCP.png',
  tesa: S3 + 'Tesamorelin.thumbnail-01KE3X89J7GJBEVSEQEQ8C19GB.png',
  bpc: SITE + '/images/hero/BPC157.webp',
  bpcspray: SITE + '/images/hero/BPC157Desktop.webp',
  nad: SITE + '/images/hero/NAD.webp',
  nadspray: SITE + '/images/BottlesUpdated/NAD-Spray.png',
  tb500: SITE + '/images/hero/TB500.webp',
  glut: SITE + '/images/hero/AminoH2ODesktop.png'
}

const RAW: [string, string, ProductCategory, ProductKind, string, number, string, string][] = [
  ['glp3', 'GLP-3 (RT)', 'Metabolic', 'Vial', '99.82', 45.63, '#E9EFFB', 'Triple-agonist reference compound'],
  ['glp2', 'GLP-2 (T19)', 'Metabolic', 'Vial', '99.10', 38.99, '#DCEBF8', 'Metabolic research peptide'],
  ['glp1', 'GLP-1 (SM)', 'Metabolic', 'Vial', '99.41', 32.45, '#FBE3E6', 'Incretin analogue'],
  ['ghkcu', 'GHK-Cu', 'Cosmetic', 'Vial', '99.67', 15.42, '#DFF0F6', 'Copper tripeptide'],
  ['tesa', 'Tesamorelin', 'Metabolic', 'Vial', '99.23', 45.49, '#EFF0CF', 'Secretagogue peptide'],
  ['mots', 'MOTS-c', 'Cellular', 'Vial', '99.55', 25.98, '#E6E9F8', 'Mitochondrial peptide'],
  ['nad', 'NAD+', 'Cellular', 'Vial', '99.31', 45.49, '#FBE7EC', 'Cellular cofactor'],
  ['cjc', 'CJC-1295', 'Metabolic', 'Vial', '99.44', 38.99, '#E7F3E1', 'Secretagogue peptide'],
  ['bpc', 'BPC-157', 'Tissue Repair', 'Vial', '99.19', 25.99, '#E9F5DE', 'Cytoprotective peptide'],
  ['kpv', 'KPV', 'Cellular', 'Vial', '99.02', 25.99, '#E4EEFB', 'Tripeptide fragment'],
  ['klow', 'KLOW', 'Tissue Repair', 'Vial', '99.12', 64.99, '#EDE7F9', 'Peptide blend'],
  ['slu', 'SLU-PP-332', 'Metabolic', 'Vial', '99.28', 15.47, '#EDF2E2', 'ERR agonist compound'],
  ['glut', 'Glutathione', 'Cellular', 'Vial', '99.41', 38.99, '#E9EAF7', 'Antioxidant tripeptide'],
  ['mt2', 'Melanotan II', 'Cosmetic', 'Vial', '99.36', 15.47, '#FAEFD9', 'Melanocortin analogue'],
  ['glow', 'GLOW', 'Tissue Repair', 'Vial', '99.21', 58.49, '#E6F4EC', 'Peptide blend'],
  ['selank', 'Selank', 'Nootropic', 'Vial', '99.08', 15.47, '#E8ECF9', 'Anxiolytic research peptide'],
  ['mt1', 'Melanotan I', 'Cosmetic', 'Vial', '99.33', 19.47, '#F7EAF1', 'Melanocortin analogue'],
  ['tb500', 'TB-500', 'Tissue Repair', 'Vial', '99.51', 25.99, '#DEEAF7', 'Actin-binding peptide'],
  ['igf', 'IGF-1 LR3', 'Tissue Repair', 'Vial', '99.62', 45.49, '#EAF1E4', 'Growth factor analogue'],
  ['amq', '5-Amino-1MQ', 'Metabolic', 'Vial', '99.44', 32.49, '#F1EDE2', 'NNMT inhibitor compound'],
  ['pt141', 'PT-141', 'Nootropic', 'Vial', '99.17', 15.49, '#FBE3EF', 'Melanocortin agonist'],
  ['cagri', 'Cagrilintide', 'Metabolic', 'Vial', '99.29', 45.49, '#E7EFF9', 'Amylin analogue'],
  ['dsip', 'DSIP', 'Nootropic', 'Vial', '99.26', 15.49, '#E5E2F2', 'Delta sleep peptide'],
  ['epi', 'Epithalon', 'Cellular', 'Vial', '99.13', 15.49, '#E9F0F6', 'Telomerase research peptide'],
  ['ipa', 'Ipamorelin', 'Metabolic', 'Vial', '99.35', 24.95, '#EFF3DF', 'Secretagogue peptide'],
  ['bpcspray', 'BPC-157 Spray', 'Tissue Repair', 'Spray', '99.19', 29.99, '#E9F5DE', 'Nasal research spray'],
  ['nadspray', 'NAD+ Spray', 'Cellular', 'Spray', '99.31', 32.45, '#FBE7EC', 'Nasal research spray'],
  ['selankspray', 'Selank Spray', 'Nootropic', 'Spray', '99.08', 30.99, '#E8ECF9', 'Nasal research spray'],
  ['mt2spray', 'Melanotan II Spray', 'Cosmetic', 'Spray', '99.36', 35.99, '#FAEFD9', 'Nasal research spray']
]

export const catalog: Product[] = RAW.map((r, i) => {
  const [id, name, category, kind, purity, basePrice, tint, sub] = r
  return {
    id,
    name,
    category,
    kind,
    purity,
    basePrice,
    tint,
    sub,
    lot: 'LOT ' + (240001 + i * 37),
    abbr: name.replace(/\s*\(.*\)/, '').replace(' Spray', ''),
    date: 'Aug ' + (10 + (i % 18)) + ', 2026',
    img: IMAGE_MAP[id] || GEN[i % GEN.length]!
  }
})

export function findProduct(id: string): Product {
  return catalog.find(p => p.id === id) || catalog[0]!
}

export const categoryNames = ['All', 'Metabolic', 'Tissue Repair', 'Cellular', 'Cosmetic', 'Nootropic', 'Sprays'] as const

export function matchesCategory(product: Product, category: string): boolean {
  if (category === 'All') return true
  if (category === 'Sprays') return product.kind === 'Spray'
  return product.category === category
}

export const guarantees = [
  { n: '99% purity guaranteed', d: 'Every batch verified', tint: '#CFF2C4' },
  { n: 'Shipment protection', d: 'Every order fully covered', tint: '#DDEBFA' },
  { n: 'CoA with every batch', d: 'Third-party tested in the US', tint: '#FEFECA' }
]

export const boxPerks = [
  'Free Amino H₂O in every single box',
  'Free 2-day delivery, every month',
  'Swap items anytime after your first box',
  'CoA-verified batches, third-party tested'
]

export const bulkTierTable = [
  { qty: 5, off: 15 },
  { qty: 10, off: 25 },
  { qty: 25, off: 40 },
  { qty: 50, off: 50 }
]

export const assayData = [
  { n: 'Peptide Purity', method: 'RP-HPLC 214nm', d: 'Reverse-phase HPLC quantifies the target peptide against every related peak. Release standard is 99%.' },
  { n: 'Net Peptide Content', method: 'HPLC quantitation', d: 'Measures actual milligrams of peptide in the vial, so 10mg on the label means 10mg in the vial.' },
  { n: 'Identity', method: 'HPLC · RTM', d: 'Retention-time match against a certified reference standard confirms the compound matches the label.' },
  { n: 'Appearance', method: 'Visual inspection', d: 'Lyophilized cake or solution inspected for color, uniformity, and physical integrity before release.' },
  { n: 'Fentanyl Screen', method: 'Immunoassay, 50 ng/mL', d: 'Every batch screened for fentanyl contamination. Result on every certificate: not detected.' },
  { n: 'Heavy Metals', method: 'ICP-MS USP 233', d: 'Arsenic, cadmium, lead, mercury, and chromium quantified by mass spectrometry against strict limits.' },
  { n: 'Sterility', method: 'PCR', d: 'PCR-based microbial detection verifies no bacterial or fungal growth in the vial.' },
  { n: 'Endotoxin', method: 'USP 85 kinetic', d: 'Bacterial endotoxin quantified in EU/mL by the kinetic method, reported on every certificate.' }
]

export const coaMini = [
  { n: 'Net peptide content', v: '10.04 mg' },
  { n: 'Fentanyl screen', v: 'Not detected' },
  { n: 'Heavy metals', v: 'Pass' },
  { n: 'Endotoxin', v: '< 0.05 EU/mL' }
]

export const features = [
  { n: 'Always in stock', d: 'Top research pipelines mean the catalog stays stocked — no waiting on the compound your study needs.', tint: '#CFF2C4' },
  { n: 'Volume pricing', d: 'Bulk pricing scales with the order, with the whole run pulled from a single lot.', tint: '#DDEBFA' },
  { n: 'Safe, protected shipping', d: 'Cold-pack shipping where required, discreet packaging, and free protection on every parcel.', tint: '#FEFECA' },
  { n: 'Researcher community', d: 'Compare notes with other labs, share protocols, and see what peers are running.', tint: '#E9E7FB' },
  { n: '99%+ purity guaranteed', d: 'Every batch tested by an accredited lab and published with its certificate.', tint: '#FCE7EC' },
  { n: 'Documentation library', d: 'Assay panels, storage guidance, and archived lots stay available for reference.', tint: '#E6F4EC' }
]

export const faqData = [
  { q: 'What purity level are your peptides and how is it verified?', a: 'Every batch is assayed by reverse-phase HPLC against a certified reference standard at an ISO 17025 accredited lab. We release at 99% or higher and publish the chromatogram result on the certificate.' },
  { q: 'What is a Certificate of Analysis and where do I find it?', a: 'The CoA is the lab report for the exact lot in your vial. It lives on the product page, in the certificate library, and behind the QR code printed on the label.' },
  { q: 'How should I store lyophilized product?', a: 'Lyophilized peptides are stable at 2–8°C and sealed under nitrogen. Keep them dry and dark; once reconstituted, refrigerate and use within the window on the certificate.' },
  { q: 'How fast do orders ship?', a: 'Orders placed before 2pm ET ship the same business day with cold packaging where required. Members get free 2-day signed delivery.' },
  { q: 'What is your return and refund policy?', a: 'Unopened vials can be returned within 30 days. If a shipment arrives damaged or goes missing in transit, shipment protection covers a free reship.' },
  { q: 'Are these peptides for human use?', a: 'No. Everything in the catalog is supplied strictly for in vitro laboratory research by qualified professionals — not for human, veterinary, or food use.' }
]

export const referrals = [
  { i: 'J', n: 'Jordan · Lab 8842', v: '+840 pts' },
  { i: 'M', n: 'Mira · Cell Bio Group', v: '+512 pts' },
  { i: 'A', n: 'Aditi · Northline Labs', v: '+296 pts' }
]

export const tabRows = [
  { d: 'Aug 04 · GLP-3 (RT) ×2', v: '$391.20' },
  { d: 'Aug 11 · Monthly box', v: '$137.98' },
  { d: 'Aug 18 · TB-500 bulk ×10', v: '$623.70' },
  { d: 'Aug 23 · NAD+ Spray', v: '$131.72' }
]

export const marqueeItems = ['Third-party tested', '99%+ purity', 'CoA every batch', 'Ships same day', 'ISO 17025 lab', 'Research use only']

export interface MembershipTier {
  n: string
  d: string
  price: string
  per: string
  perks: { t: string, on: boolean }[]
  cta: string
  flag: string
}

export const tierData: MembershipTier[] = [
  { n: 'Member', d: 'Start earning points on every order.', price: 'Free', per: '', perks: [{ t: '2.5× points per $1', on: true }, { t: 'Free standard shipping', on: false }, { t: 'Free 2-day shipping', on: false }, { t: 'Early access + member drops', on: false }, { t: 'Priority fulfillment', on: false }], cta: 'Your current plan', flag: 'Current plan' },
  { n: 'Insider', d: 'Free standard shipping and boosted points.', price: '$9.99', per: '/mo', perks: [{ t: '3.5× points per $1', on: true }, { t: 'Free standard shipping', on: true }, { t: 'Free 2-day shipping', on: false }, { t: 'Early access + member drops', on: false }, { t: 'Priority fulfillment', on: false }], cta: 'Choose Insider', flag: '' },
  { n: 'VIP', d: 'Free 2-day shipping and early access.', price: '$19.99', per: '/mo', perks: [{ t: '5× points per $1', on: true }, { t: 'Free standard shipping', on: true }, { t: 'Free 2-day shipping', on: true }, { t: 'Early access + member drops', on: true }, { t: 'Priority fulfillment', on: false }], cta: 'Choose VIP', flag: 'Most popular' },
  { n: 'Founder', d: 'Priority shipping and 2,500 bonus points monthly.', price: '$99.99', per: '/mo', perks: [{ t: '10× points per $1', on: true }, { t: 'Free standard shipping', on: true }, { t: 'Free 2-day shipping', on: true }, { t: 'Early access + member drops', on: true }, { t: '+2,500 bonus points / month', on: true }], cta: 'Choose Founder', flag: '' }
]

export interface OrderRecord {
  id: string
  items: string
  status: 'Delivered' | 'Shipped'
  pts: number
  total: string
}

export const orderData: OrderRecord[] = [
  { id: 'AC-24812', items: 'GLP-3 (RT) 10mg · BPC-157 5mg', status: 'Delivered', pts: 431, total: '$118.47' },
  { id: 'AC-24790', items: 'Monthly box · 4 compounds', status: 'Shipped', pts: 484, total: '$137.98' },
  { id: 'AC-24731', items: 'TB-500 20mg × 10 (bulk)', status: 'Delivered', pts: 2103, total: '$623.70' },
  { id: 'AC-24688', items: 'NAD+ Spray 10mg', status: 'Delivered', pts: 114, total: '$32.45' }
]

export const footerColumns = [
  { h: 'Shop', links: [{ t: 'All products', to: '/store' }, { t: 'Build a box', to: '/box' }, { t: 'Bulk orders', to: '/bulk' }] },
  { h: 'Resources', links: [{ t: 'Certificates of analysis', to: '/coa' }] },
  { h: 'Support', links: [{ t: 'Contact us', to: '/contact' }, { t: 'FAQ', to: '/contact' }, { t: 'Shipping info', to: '/contact' }, { t: 'Returns & refunds', to: '/contact' }] },
  { h: 'Legal', links: [{ t: 'Privacy policy', to: '/contact' }, { t: 'Terms of service', to: '/contact' }, { t: 'Affiliate terms', to: '/contact' }, { t: 'Research use only', to: '/contact' }] }
]

export const socialLinks = [
  { label: 'Instagram', icon: 'i-simple-icons-instagram' },
  { label: 'X', icon: 'i-simple-icons-x' },
  { label: 'YouTube', icon: 'i-simple-icons-youtube' }
]

export const paymentIcons = ['i-simple-icons-visa', 'i-simple-icons-mastercard', 'i-simple-icons-applepay', 'i-simple-icons-googlepay']

export const navItems = [
  { label: 'Products', to: '/store', isNew: false },
  { label: 'Build a Box', to: '/box', isNew: true },
  { label: 'Bulk Orders', to: '/bulk', isNew: true },
  { label: 'CoAs', to: '/coa', isNew: false },
  { label: 'Membership', to: '/membership', isNew: false },
  { label: 'Account', to: '/account', isNew: false },
  { label: 'Contact', to: '/contact', isNew: false }
]
