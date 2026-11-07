// The single source of truth for agency details, links, content and starting prices.
export const config = {
  agencyName: 'FORM DIGITAL',
  whatsapp: '923349261882',
  whatsappDisplay: '+92 334 9261882',
  email: 'umairjalbani80@gmail.com'
};
export const services = [
  { number:'01', icon:'MonitorSmartphone', title:'Business Website Development', description:'Professional websites that establish credibility and generate customer inquiries.' },
  { number:'02', icon:'UtensilsCrossed', title:'Restaurant & Hospitality Websites', description:'Digital menus, WhatsApp ordering, reservations and restaurant websites.' },
  { number:'03', icon:'Store', title:'E-commerce & Product Catalogues', description:'Product displays, categories, product inquiries and online shopping experiences.' },
  { number:'04', icon:'HeartPulse', title:'Healthcare & Clinic Websites', description:'Doctor profiles, medical services, appointment inquiries and clinic information.' },
  { number:'05', icon:'House', title:'Real Estate Websites', description:'Property listings, property details and customer inquiry systems.' },
  { number:'06', icon:'Layers3', title:'Website Redesign', description:'Transform outdated websites into modern, responsive business platforms.' }
];
// Swap each url for the live demo URL when it is deployed.
export const projects = [
  {number:'PROJECT 01',name:'AANGAN',category:'Restaurant & Hospitality',description:'A modern restaurant website featuring an interactive menu, food photography, WhatsApp ordering and location integration.',tech:'React · Responsive UI',url:'#contact',theme:'aangan',mark:'AANGAN',tagline:'PAKISTANI KITCHEN',heading:'A table made for gathering.'},
  {number:'PROJECT 02',name:'TECHNOVA',category:'Electronics & Retail',description:'A professional electronics store website with product categories, product displays and inquiry functionality.',tech:'React · Product catalogue',url:'#contact',theme:'technova',mark:'TECHNOVA',tagline:'DESIGNED FOR EVERYDAY',heading:'The objects of tomorrow.'},
  {number:'PROJECT 03',name:'ESTATE & CO.',category:'Real Estate',description:'A sophisticated property website featuring property listings, property details and inquiry options.',tech:'React · Listing system',url:'#contact',theme:'estate',mark:'ESTATE & CO.',tagline:'CURATED LIVING',heading:'Find a place that feels right.'},
  {number:'PROJECT 04',name:'PAWS & CARE',category:'Veterinary & Healthcare',description:'A professional veterinary clinic website featuring veterinary services, doctor information, appointment inquiries and contact details.',tech:'React · Appointment UI',url:'#contact',theme:'paws',mark:'PAWS + CARE',tagline:'VETERINARY CLINIC',heading:'Care, for every paw.'}
];
export const packages = [
  {name:'STARTER',audience:'For small businesses that need a professional online presence.',price:'15,000',features:['A focused business website','Mobile-responsive design','Core contact information','WhatsApp contact integration']},
  {name:'BUSINESS',audience:'For businesses that need a more complete and polished website.',price:'20,000',features:['Everything in Starter','More pages and tailored layouts','Service or product presentation','On-page search foundations']},
  {name:'ADVANCED',audience:'For businesses requiring additional functionality and custom features.',price:'30,000',features:['Everything in Business','Custom functionality scope','Catalogues, listings or forms','Launch support and handover']}
];
export const industries = [['Restaurants & Cafes','UtensilsCrossed'],['Healthcare & Clinics','HeartPulse'],['Retail & Electronics','Store'],['Real Estate','House'],['Professional Services','ShieldCheck'],['Startups & Small Businesses','Zap']];
