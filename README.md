## Samenvatting HTML & CSS: Repareer Café De Kade

**Herhaling** - alle technieken uit Hoofdstuk 1 t/m 10
**PRIMM-fase:** Investigate → Modify → Make

### Waarom deze opdracht?

Café De Kade heeft een website laten maken door een "goedkope webbouwer" (lees: iemand die alles van AI heeft gekopieerd). De site ziet er niet uit. Jij bent de developer die het mag oplossen.

Repareren is een andere vaardigheid dan bouwen: je moet eerst **vinden** waar het misgaat. Dat doe je in het echte werk vaker dan een site vanaf nul maken.

### Startbestanden

Kopieer de map `samenvatting-dekade/start-html/` naar je eigen werkmap en open `index.html` in de browser.

### AI-gebruik

**Brons: AI uit.** Fouten zoeken doe je zelf, met DevTools (F12). **Zilver en goud: AI mag**, maar je moet elke regel kunnen uitleggen.

---

### 🥉 Brons: repareer de site (AI uit)

Hieronder staan de **klachten** van de eigenaar. Jij zoekt de **oorzaak** en lost het op. Er zijn 7 fouten.

| #   | Klacht van de eigenaar                                             |
| --- | ------------------------------------------------------------------ |
| 1   | "De site heeft helemaal geen opmaak!"                              |
| 2   | "De bovenbalk is niet donkerblauw en de footer ook niet."          |
| 3   | "Na de hero is alle opmaak weer weg."                              |
| 4   | "De middelste kaart ziet er anders uit dan de andere twee."        |
| 5   | "De prijzen zouden oranje moeten zijn."                            |
| 6   | "De derde kaart staat onder de andere twee in plaats van ernaast." |
| 7   | "Als ik op 'Menukaart' klik, springt de pagina nergens heen."      |

> **Tip:** los de klachten in volgorde op. Sommige fouten zie je pas als de vorige opgelost is.
> **Tip 2:** gebruik DevTools. Tabblad _Console_ toont bestanden die niet gevonden worden, tabblad _Elements_ laat zien welke CSS wel en niet op een element werkt.

Schrijf per fout in een comment op wat er mis was, bijvoorbeeld:

```css
/* Fout 5: var() ontbrak, zonder var() snapt CSS de variabele niet */
```

**Klaar met brons?** Laat je site zien aan de docent en ga door naar zilver.

---

### 🥈 Zilver: maak de code beter

De site werkt nu, maar de code is rommelig. Een collega moet dit later kunnen onderhouden.

1. **Eén knop-class.** `.knop-hero`, `.knop-1`, `.knop-2`, `.knop-3` en `.knop-reserveer` zijn bijna hetzelfde. Maak één class `.knop` en gebruik die overal. Geef hem een `:hover` **én** een `:focus`
2. **Alleen variabelen.** Er staan nog hex-codes (`#2a6f97`, `#e07a5f`, ...) buiten `:root`. Vervang ze allemaal door `var(--...)`
3. **Semantiek.** Zet alle secties binnen een `<main>`. Maak van de kaarten `<article>`-elementen
4. **Flexbox.** Zet de drie kaarten in een `<div class="kaarten">` en gebruik Flexbox in plaats van `inline-block`. Doe hetzelfde voor de header (logo links, navigatie rechts), dan is `float` niet meer nodig
5. **Responsive.** Onder 700px breed staan de kaarten onder elkaar en past het formulier op het scherm

**Test:** verander in `:root` alleen `--accent` naar een andere kleur. Verandert dan **alles** wat oranje was? Dan heb je stap 2 goed gedaan.

---

### 🥇 Goud: kies er minstens één

- **Uitgelichte kaart.** Maak de tosti de "Favoriet": een extra class `.kaart-uitgelicht` die alleen de achtergrond en tekstkleur verandert. Geen gekopieerde CSS!
- **Tweede thema.** Bedenk een ander kleurenschema (bijv. een kerstversie) door **alleen** de variabelen in `:root` te veranderen. Maak een screenshot van beide versies
- **Openingstijden.** Voeg een sectie "Openingstijden" toe die past in de stijl van de site (zelfde container, kopjes, kleuren)
- **Eigen idee.** Overleg met je docent

---

### Afsluiting: uitleggen (10 min)

Ga in tweetallen zitten. Wijs een willekeurige regel in de CSS van de ander aan. Die legt uit wat de regel doet en waarom die er staat. Wissel na 3 regels.

Dit is precies hoe het verantwoordingsgesprek van je eindproject werkt.

### Eisen

- [ ] Alle 7 klachten opgelost, met een comment per fout (brons)
- [ ] Eén `.knop`-class met hover en focus (zilver)
- [ ] Geen hex-codes buiten `:root` (zilver)
- [ ] Kaarten en header met Flexbox, responsive onder 700px (zilver)
- [ ] Minstens één goud-opdracht (goud)
