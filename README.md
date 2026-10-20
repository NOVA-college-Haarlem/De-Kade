# Café De Kade

**Samenvattingsopdracht** - HTML & CSS (Hoofdstuk 1 t/m 10) en JavaScript (Hoofdstuk 1 t/m 7)
**PRIMM-fase:** Investigate → Modify → Make
**Twee lessen:** les 1 repareer je de HTML en CSS, les 2 maak je de JavaScript werkend. Je werkt beide lessen in **dezelfde** site.

### Waarom deze opdracht?

Café De Kade heeft een website laten maken door een "goedkope webbouwer" (lees: iemand die alles van AI heeft gekopieerd). De site ziet er niet uit en de knoppen doen niks. Jij bent de developer die het mag oplossen.

Repareren is een andere vaardigheid dan bouwen: je moet eerst **vinden** waar het misgaat. Dat doe je in het echte werk vaker dan een site vanaf nul maken.

### Startbestanden

Download of clone deze repo en open `index.html` in de browser. Houd DevTools (F12) de hele tijd open.

### AI-gebruik

**Brons: AI uit.** Fouten zoeken doe je zelf, met DevTools. **Zilver en goud: AI mag**, maar je moet elke regel kunnen uitleggen.

---

## Les 1: HTML & CSS

### 🥉 Brons: repareer de opmaak (AI uit)

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
> **Tip 2:** tabblad _Console_ toont bestanden die niet gevonden worden, tabblad _Elements_ laat zien welke CSS wel en niet op een element werkt.

Schrijf per fout in een comment op wat er mis was, bijvoorbeeld:

```css
/* Fout 5: var() ontbrak, zonder var() snapt CSS de variabele niet */
```

**Klaar met brons?** Laat je site zien aan de docent en ga door naar zilver.

### 🥈 Zilver: maak de code beter

De site werkt nu, maar de code is rommelig. Een collega moet dit later kunnen onderhouden.

1. **Eén knop-class.** `.knop-hero`, `.knop-1`, `.knop-2`, `.knop-3` en `.knop-reserveer` zijn bijna hetzelfde. Maak één class `.knop` en gebruik die voor **alle** knoppen, ook "Dark mode", "Leegmaken" en "Alleen vega". Geef hem een `:hover` **én** een `:focus`
2. **Alleen variabelen.** Er staan nog hex-codes (`#2a6f97`, `#e07a5f`, ...) en `white` buiten `:root`. Vervang ze door `var(--...)`. Voor witte vlakken (kaarten, formulier) is er `--kaart`
3. **Semantiek.** Zet alle secties binnen een `<main>`. Maak van de kaarten `<article>`-elementen
4. **Flexbox.** Zet de drie kaarten in een `<div class="kaarten">` en gebruik Flexbox in plaats van `inline-block`. Doe hetzelfde voor de header (logo links, navigatie en knop rechts), dan is `float` niet meer nodig
5. **Responsive.** Onder 700px breed staan de kaarten onder elkaar en past het formulier op het scherm

**Test:** verander in `:root` alleen `--accent` naar een andere kleur. Verandert dan **alles** wat oranje was? Dan heb je stap 2 goed gedaan. Volgende les heb je dit nodig voor dark mode.

### 🥇 Goud: kies er minstens één

- **Uitgelichte kaart.** Maak de tosti de "Favoriet": een extra class `.kaart-uitgelicht` die alleen de achtergrond en tekstkleur verandert. Geen gekopieerde CSS!
- **Tweede thema.** Bedenk een ander kleurenschema (bijv. een kerstversie) door **alleen** de variabelen in `:root` te veranderen. Maak een screenshot van beide versies
- **Openingstijden.** Voeg een sectie "Openingstijden" toe die past in de stijl van de site (zelfde container, kopjes, kleuren)
- **Eigen idee.** Overleg met je docent

---

## Les 2: JavaScript

Je werkt verder in **je eigen versie** van les 1. Brons van les 1 nog niet af? Maak dat eerst af, anders werken sommige knoppen niet.

**Start:** in de `<head>` staat de regel `<script src="js/script.js"></script>` uitgecommentarieerd. Haal de comment-tekens weg. Open de Console: je ziet meteen een rode foutmelding.

### 🥉 Brons: repareer het script (AI uit)

Het script is door een AI-tool geschreven en niemand heeft het getest. Er zitten 7 fouten in het script en de HTML.

| #   | Klacht van de eigenaar                                                     |
| --- | -------------------------------------------------------------------------- |
| 1   | "Er werkt helemaal niets. In de Console staat een rode foutmelding."       |
| 2   | "Dark mode gaat aan, maar daarna nooit meer uit."                          |
| 3   | "Als ik twee keer op 'Bestel' klik, staat er `Totaal: € 06.756.75`. Wat?!" |
| 4   | "Als ik op 'Reserveer' klik, ververst de pagina en zie ik niks."           |
| 5   | "Nu krijg ik een rode foutmelding in de Console als ik reserveer."         |
| 6   | "Ik krijg altijd 'Vul je naam in', ook als ik mijn naam heb ingevuld."     |

> **Tip:** klacht 1 heeft **twee** oorzaken: één in de HTML en één in het script. Allebei geven ze dezelfde foutmelding. Lees de foutmelding goed: welk bestand, welke regel?
> **Tip 2:** los de klachten in volgorde op. Een fout in JavaScript stopt alles wat erna komt.
> **Dark mode doet bijna niks?** Dan staan er nog vaste kleuren in je CSS. Dark mode werkt via de variabelen uit les 1 (zilver stap 2).

Schrijf per fout in een comment op wat er mis was, bijvoorbeeld:

```js
// Fout 3: totaal was tekst ("0"), dus + plakte de getallen aan elkaar
```

**Klaar met brons?** Laat je site zien aan de docent en ga door naar zilver.

### 🥈 Zilver: maak de code beter

1. **Geen duplicatie.** De drie "Bestel"-knoppen hebben elk een eigen, bijna identieke click-handler. Vervang ze door **één** array met prijzen en een `forEach`, net als in Hoofdstuk 6:
   ```js
   const prijzen = [6.75, 8.50, 5.25];
   ```
2. **Leegmaken.** Laat de knop "Leegmaken" (`#leegmaken`) het totaal terugzetten naar `€ 0`
3. **Test:** voeg een vierde kaart toe in de HTML (met een `.bestel`-knop) en een vierde prijs in de array. Werkt hij zonder dat je extra JS schrijft? Dan heb je stap 1 goed gedaan

### 🥇 Goud: kies er minstens één

- **Nette prijs.** `Totaal: € 20.5` ziet er raar uit. Zoek op wat `toFixed(2)` doet en gebruik het, zodat er `€ 20.50` staat
- **Alleen vega.** De tosti en de soep hebben de class `vega`. Laat de knop "Alleen vega" (`#vega-filter`) de andere kaarten verbergen en weer tonen. Je hebt nodig: `forEach`, `classList.contains("vega")`, `classList.toggle()` en een CSS-class `.verborgen` met `display: none`
- **Dagmenu uit een array.** Haal de drie `<li>`'s uit de HTML. Maak een array met de gerechten en vul `#dagmenu-lijst` met `forEach`. Nieuw: zo voeg je een stukje HTML toe aan een element:
  ```js
  lijst.innerHTML += "<li>" + gerecht + "</li>";
  ```
- **Eigen idee.** Overleg met je docent

---

## Afsluiting van elke les: uitleggen (10 min)

Ga in tweetallen zitten. Wijs een willekeurige regel in de code van de ander aan. Die legt uit wat de regel doet en waarom die er staat. Wissel na 3 regels.

Dit is precies hoe het verantwoordingsgesprek van je eindproject werkt.

## Eisen

**Les 1**
- [ ] Alle 7 klachten opgelost, met een comment per fout (brons)
- [ ] Eén `.knop`-class met hover en focus, voor alle knoppen (zilver)
- [ ] Geen hex-codes of `white` buiten `:root` (zilver)
- [ ] Kaarten en header met Flexbox, responsive onder 700px (zilver)

**Les 2**
- [ ] Alle 6 klachten opgelost, met een comment per fout (brons)
- [ ] Bestel-knoppen via één array + `forEach` (zilver)
- [ ] Leegmaken-knop werkt (zilver)

**Goud:** minstens één goud-opdracht per les
