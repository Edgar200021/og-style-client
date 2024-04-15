
import whatsappIcon from '../assets/icons/whatsapp.svg'
import telegramIcon from '../assets/icons/telegram.svg'
import messageIcon from '../assets/icons/message.svg'
import phoneIcon from '../assets/icons/phone.svg'

export const CATEGORIES = [
	{'label': "Кроссовки", to: "/products?category=обувь&subcategory=кроссовки"},
	{'label': "Тапочки", to: "/products?category=обувь&subcategory=тапочки"},
	{'label': "Куртки", to: "/products?category=одежда&subcategory=куртки"},
	{'label': "Футболки", to: "/products?category=одежда&subcategory=футболки"},
	{'label': "Штаны", to: "/products?category=одежда&subcategory=штаны"},
	{'label': "Шорты", to: "/products?category=одежда&subcategory=шорты"},
	{'label': "Толстовки", to: "/products?category=одежда&subcategory=толстовки"},
]

export const NAVIGATION = [
	{'label': "Оплата и доставки", to: "/payment"},
	{'label': "Обмен и возврат", to: "/exchange"},
	{'label': "О компании", to: "/about"},
	{'label': "Контакты", to: "/contacts"},
	{'label': "Оригинал 100%", to: "/original"},
]

export const FEEDBACK = [ whatsappIcon, telegramIcon,messageIcon,phoneIcon]

