export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories?: string[];
}

export const categories: Category[] = [
  {
    id: 'elektronika',
    name: 'Elektronika',
    icon: '💻',
    subcategories: ['Laptopy', 'Smartfony', 'Tablety', 'Smartwatche'],
  },
  {
    id: 'moda',
    name: 'Moda',
    icon: '👔',
    subcategories: ['Odzież męska', 'Odzież damska', 'Obuwie', 'Akcesoria'],
  },
  {
    id: 'dom',
    name: 'Dom i Ogród',
    icon: '🏠',
    subcategories: ['Meble', 'Dekoracje', 'Narzędzia', 'Ogród'],
  },
  {
    id: 'dziecko',
    name: 'Dziecko',
    icon: '👶',
    subcategories: ['Zabawki', 'Odzież', 'Wózki', 'Akcesoria'],
  },
  {
    id: 'uroda',
    name: 'Uroda',
    icon: '💄',
    subcategories: ['Kosmetyki', 'Perfumy', 'Pielęgnacja', 'Makijaż'],
  },
  {
    id: 'zdrowie',
    name: 'Zdrowie',
    icon: '⚕️',
    subcategories: ['Suplementy', 'Sprzęt medyczny', 'Zdrowa żywność'],
  },
  {
    id: 'kultura',
    name: 'Kultura i rozrywka',
    icon: '📚',
    subcategories: ['Książki', 'Muzyka', 'Filmy', 'Gry'],
  },
  {
    id: 'sport',
    name: 'Sport i turystyka',
    icon: '⚽',
    subcategories: ['Odzież sportowa', 'Sprzęt', 'Rower', 'Fitness'],
  },
  {
    id: 'motoryzacja',
    name: 'Motoryzacja',
    icon: '🚗',
    subcategories: ['Części', 'Akcesoria', 'Opony', 'Kosmetyki samochodowe'],
  },
  {
    id: 'nieruchomosci',
    name: 'Nieruchomości',
    icon: '🏘️',
    subcategories: ['Mieszkania', 'Domy', 'Działki', 'Lokale'],
  },
];
