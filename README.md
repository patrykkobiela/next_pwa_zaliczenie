# Allegro PWA - Aplikacja Zakupowa

Aplikacja PWA (Progressive Web App) inspirowana Allegro, stworzona w Next.js z TypeScript i Tailwind CSS.

## Funkcje

- 📱 **Progressive Web App** - możliwość instalacji jako aplikacja
- 🛒 **Koszyk zakupowy** - dodawanie produktów, zmiana ilości, usuwanie
- 💾 **LocalStorage** - zapisywanie stanu koszyka
- 🎨 **Responsywny design** - dostosowany do różnych rozmiarów ekranów
- 🔍 **5 produktów** - laptop, słuchawki, smartwatch, aparat, tablet
- 🎨 **Styl Allegro** - pomarańczowy motyw kolorystyczny

## Instalacja

1. Zainstaluj zależności:
```bash
npm install
```

2. Uruchom serwer deweloperski:
```bash
npm run dev
```

3. Otwórz przeglądarkę: [http://localhost:3000](http://localhost:3000)

## Budowanie

```bash
npm run build
npm start
```

## Technologie

- **Next.js 14** - Framework React
- **TypeScript** - Typowanie
- **Tailwind CSS** - Stylowanie
- **next-pwa** - Funkcjonalność PWA
- **Context API** - Zarządzanie stanem koszyka

## Struktura projektu

```
├── app/                    # Strony aplikacji
│   ├── cart/              # Strona koszyka
│   ├── layout.tsx         # Layout główny
│   ├── page.tsx           # Strona główna
│   └── globals.css        # Style globalne
├── components/            # Komponenty
│   ├── Header.tsx         # Nagłówek
│   └── ProductCard.tsx    # Karta produktu
├── context/               # Context API
│   └── CartContext.tsx    # Context koszyka
├── data/                  # Dane
│   └── products.ts        # Lista produktów
└── public/                # Pliki statyczne
    └── manifest.json      # Manifest PWA
```

## Autor

Stworzono dla celów edukacyjnych.
