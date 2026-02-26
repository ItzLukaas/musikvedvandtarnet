# Musik ved Vandtårnet

Hjemmeside for arrangementerne Musik ved Vandtårnet – gratis koncerter ved Grindsted Vandtårn sommeren 2026.

## Kør lokalt

```bash
npm install
npm run dev
```

Åbn [http://localhost:3000](http://localhost:3000).

## Byg til produktion

```bash
npm run build
npm start
```

Designet følger plakatens farver og typografi (teal #2E5F57, rødbrun #B12D29, guld #EDC776).

## Upload til GitHub

1. Gå til [github.com/new](https://github.com/new) og opret et nyt repository (fx navn: `musikvedvandtarnet`). Vælg **Public**. Lad være med at tilføje README eller .gitignore – de findes allerede.
2. Kør i terminalen (fra projektmappen):

```bash
cd c:\Users\Bandit\Downloads\musikvedvandtarnet
git remote add origin https://github.com/DIT-BRUGERNAVN/musikvedvandtarnet.git
git branch -M main
git push -u origin main
```

Erstat `DIT-BRUGERNAVN` med dit GitHub-brugernavn. Hvis repo’et hedder noget andet, brug det i stedet for `musikvedvandtarnet` i URL’en.
