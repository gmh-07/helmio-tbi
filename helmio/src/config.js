import hero from '../assets/png01.jpeg'
import machine1 from '../assets/png02.jpeg'
import machine2 from '../assets/png03.jpeg'

const CONV = 'https://miaoda-conversation-file.s3cdn.medo.dev/user-8bbak51zufb4/conv-8bbalgeugdts/20251219/'
const SITE_IMG = 'https://miaoda-site-img.s3cdn.medo.dev/images/'

// Leave email as '' to hide the Email card. Add one later and the card appears automatically.
export const SITE = {
  email: '',
  phone: '+919172194317',
  phoneLabel: '91721 94317',
  instagram: 'https://www.instagram.com/sharun.innovations?stkn=Mmw0aXF4M2F0MTNm',
  instagramLabel: '@sharun.innovations',
  whatsapp: 'https://wa.me/919172194317',
}

export const IMG = {
  hero,
  machine: [machine1, machine2],
  pain: [
    CONV + 'file-8c5na3x3905c.jpg',   // Itchy Scalp
    CONV + 'file-8c5najpc59mo.png',   // Unpleasant Odor
    CONV + 'file-8c5na3x39pfk.jpg',   // Hair Fall & Acne
    CONV + 'file-8c5na3x39csg.jpg',   // Urge to Wash Hair
  ],
  steps: [
    CONV + 'file-8c3hf0oelp1c.png',   // UV Sterilization
    CONV + 'file-8c3hf0oem800.png',   // Fog Disinfection
    CONV + 'file-8c3hf0oemebk.png',   // Engineered Airflow
    CONV + 'file-8c3hf0oemkn4.png',   // Thermal Drying
    '',                               // Freshness Spray (add your own image URL here)
  ],
  places: {
    fuel: SITE_IMG + 'abb6f549-6f8b-432e-853c-6a637bbf9fb8.jpg',
    mall: SITE_IMG + 'fcd8b5ac-64e0-4cee-9939-55e107b01aae.jpg',
    wash: CONV + 'file-8c58kvunnpj5.jpg',
    apartments: CONV + 'file-8c58kvunn08w.jpg',
    metro: CONV + 'file-8c58kvunn6kg.jpg',
    cafes: CONV + 'file-8c58kvunncw0.jpg',
    service: CONV + 'file-8c58kvunnpj4.jpg',
  },
}
