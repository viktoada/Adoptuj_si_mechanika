# Adoptuji Mechanika 🤖

Webová aplikace pro podporu adopce mechanů prostřednictvím her a dobrovolných příspěvků.

## Jak si web načíst

### Předpoklady
- Node.js (v16 nebo vyšší)
- npm nebo yarn

### Instalace a spuštění

1. **Klonuj repozitář:**
   ```bash
   git clone https://github.com/viktoada/Adoptuj_si_mechanika.git
   cd Adoptuj_si_mechanika
   ```

2. **Nainstaluj závislosti:**
   ```bash
   npm install
   ```

3. **Spusť vývojový server:**
   ```bash
   npm run dev
   ```

4. **Otevři v prohlížeči:**
   ```
   http://localhost:3000
   ```

## Co obsahuje?

### Funkce MVP

✅ **Mřížka 12 karet mechaniků**
- Každá karta má "rozšířit" animaci
- Zobrazuje cartoon-styl popis
- 3 tlačítka: Hrát, Adoptovat, Top skóre

✅ **Minihra**
- Jednoduchá klikací hra (60 sekund)
- Sbírání bodů
- Uložení skóre do leaderboardu (dobrovolné jméno)

✅ **Adopce s QR kódem**
- Výběr částky (přednastavené nebo vlastní)
- Generování QR kódu
- Zobrazení IBAN pro manuální převod
- Privacy notice

✅ **Leaderboard**
- Top skóre pro jednotlivé mechaniky
- Global top 5 všech
- Filtrování podle mechanika

## Technologie

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **QR kódy**: qrcode.react
- **UI ikony**: lucide-react
- **Storage**: localStorage (pro leaderboard)

## Struktura

```
src/
├── components/
│   ├── MechanicCard.jsx      # Kartička mechanika
│   ├── GameModal.jsx         # Minihra
│   ├── AdoptionModal.jsx     # Adopce + QR
│   ├── LeaderboardModal.jsx  # Leaderboard
│   └── Grid.jsx              # Mřížka
├── data/
│   └── mechanics.js          # Data 12 mechaniků
├── utils/
│   ├── payment.js            # QR + IBAN funkce
│   └── leaderboard.js        # Leaderboard logika
├── App.jsx                   # Hlavní komponenta
├── main.jsx                  # Entry point
└── index.css                 # Global styly
```

## Build a Deploy

```bash
# Build pro produkci
npm run build

# Preview buildu
npm run preview
```

Web je připraven k nasazení na Vercel, Netlify nebo jiný hosting podporující Node.js.

## Privacy & GDPR

- Jméno v adopci je **dobrovolné**
- Leaderboard jméno je **dobrovolné**
- Žádné údaje se neodesílají na server (MVP verzí)
- Všechna data se ukládají lokálně v prohlížeči

## Roadmap

Po MVP:
- [ ] Integrace platební brány
- [ ] Více minihier
- [ ] Achievements/Odznaky
- [ ] Uživatelské profily
- [ ] Analytics
- [ ] Backend pro perzistenci dat

## License

MIT
