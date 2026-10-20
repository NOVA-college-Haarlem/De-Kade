## Samenvatting JavaScript: Café De Kade komt tot leven

**Herhaling** - alle technieken uit Hoofdstuk 1 t/m 7
**PRIMM-fase:** Investigate → Modify → Make

### Waarom deze opdracht?
De website van Café De Kade ziet er goed uit, maar de JavaScript is door een AI-tool geschreven en niemand heeft hem getest. **Niets werkt.** Jij gaat het repareren en daarna uitbreiden.

### Startbestanden
Kopieer de map `samenvatting-dekade/start-js/` naar je eigen werkmap en open `index.html` in de browser. Open meteen de **Console** (F12).

### AI-gebruik
**Brons: AI uit.** Fouten zoeken doe je zelf, met de Console. **Zilver en goud: AI mag**, maar je moet elke regel kunnen uitleggen.

---

### 🥉 Brons: repareer het script (AI uit)

Hieronder staan de **klachten** van de eigenaar. Jij zoekt de **oorzaak** en lost het op. Er zitten 7 fouten in het script en de HTML.

| # | Klacht van de eigenaar |
|---|---|
| 1 | "Er werkt helemaal niets. In de Console staat een rode foutmelding." |
| 2 | "Dark mode gaat aan, maar daarna nooit meer uit." |
| 3 | "Als ik twee keer op 'Bestel' klik, staat er `Totaal: € 06.756.75`. Wat?!" |
| 4 | "Als ik op 'Reserveer' klik, ververst de pagina en zie ik niks." |
| 5 | "Nu krijg ik een rode foutmelding in de Console als ik reserveer." |
| 6 | "Ik krijg altijd 'Vul je naam in', ook als ik mijn naam heb ingevuld." |

> **Tip:** Klacht 1 heeft **twee** oorzaken: een in de HTML en een in het script. Allebei geven ze dezelfde foutmelding. Lees de foutmelding goed: welk bestand, welke regel?
> **Tip 2:** los de klachten in volgorde op. Een fout in JavaScript stopt alles wat erna komt, dus sommige fouten zie je pas als de vorige opgelost is.

Schrijf per fout in een comment op wat er mis was, bijvoorbeeld:
```js
// Fout 3: totaal was tekst ("0"), dus + plakte de getallen aan elkaar
```

**Klaar met brons?** Laat je site zien aan de docent en ga door naar zilver.

---

### 🥈 Zilver: maak de code beter

1. **Geen duplicatie.** De drie "Bestel"-knoppen hebben elk een eigen, bijna identieke click-handler. Vervang ze door **één** array met prijzen en een `forEach`, net als in Hoofdstuk 6:
   ```js
   const prijzen = [6.75, 8.50, 5.25];
   ```
2. **Leegmaken.** Er staat een knop "Leegmaken" (`#leegmaken`). Laat hem het totaal terugzetten naar `€ 0`
3. **Test:** voeg een vierde kaart toe in de HTML (met een `.bestel`-knop) en een vierde prijs in de array. Werkt hij zonder dat je extra JS schrijft? Dan heb je stap 1 goed gedaan

---

### 🥇 Goud: kies er minstens één

- **Nette prijs.** `Totaal: € 20.5` ziet er raar uit. Zoek op wat `toFixed(2)` doet en gebruik het, zodat er `€ 20.50` staat
- **Alleen vega.** De tosti en de soep hebben de class `vega`. Laat de knop "Alleen vega" (`#vega-filter`) de andere kaarten verbergen en weer tonen. Je hebt nodig: `forEach`, `classList.contains("vega")`, `classList.toggle()` en een CSS-class die een element verbergt (staat al klaar: `.verborgen`)
- **Dagmenu uit een array.** De lijst `#dagmenu-lijst` is leeg. Maak een array met drie gerechten en vul de lijst met `forEach`. Nieuw: zo voeg je een stukje HTML toe aan een element:
  ```js
  lijst.innerHTML += "<li>" + gerecht + "</li>";
  ```
- **Eigen idee.** Overleg met je docent

---

### Afsluiting: uitleggen (10 min)
Ga in tweetallen zitten. Wijs een willekeurige regel in het script van de ander aan. Die legt uit wat de regel doet en waarom die er staat. Wissel na 3 regels.

Dit is precies hoe het verantwoordingsgesprek van je eindproject werkt.

### Eisen
- [ ] Alle 6 klachten opgelost, met een comment per fout (brons)
- [ ] Bestel-knoppen via één array + `forEach` (zilver)
- [ ] Leegmaken-knop werkt (zilver)
- [ ] Minstens één goud-opdracht (goud)
