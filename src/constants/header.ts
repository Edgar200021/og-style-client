import messageIcon from '../assets/icons/message.svg'
import phoneIcon from '../assets/icons/phone.svg'
import telegramIcon from '../assets/icons/telegram.svg'
import whatsappIcon from '../assets/icons/whatsapp.svg'

export const CATEGORIES = [
  { label: 'Кроссовки', to: '/products?category=обувь&subCategory=кроссовки' },
  { label: 'Тапочки', to: '/products?category=обувь&subCategory=тапочки' },
  { label: 'Куртки', to: '/products?category=одежда&subCategory=куртки' },
  { label: 'Футболки', to: '/products?category=одежда&subCategory=футболки' },
  { label: 'Штаны', to: '/products?category=одежда&subCategory=штаны' },
  { label: 'Шорты', to: '/products?category=одежда&subCategory=шорты' },
  { label: 'Толстовки', to: '/products?category=одежда&subCategory=толстовки' },
]

export const NAVIGATION = [
  { label: 'Оплата и доставки', to: '/payment' },
  { label: 'Обмен и возврат', to: '/exchange' },
  { label: 'О компании', to: '/about' },
  { label: 'Контакты', to: '/contacts' },
  { label: 'Оригинал 100%', to: '/original' },
]

export const FEEDBACK = [whatsappIcon, telegramIcon, messageIcon, phoneIcon]
