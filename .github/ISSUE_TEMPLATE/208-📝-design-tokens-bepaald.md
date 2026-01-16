---
name: Kernteam - 📝 Design tokens bepaald
about: Er is besloten welke design tokens worden meegenomen en wat de logische basis-tokens zijn
title: '{component-name} - 📝 Design tokens bepaald'
labels:
  - 📝 Candidate Voorbereidingsfase
---

## 📝 Design tokens bepaald

- [ ] Maak een overzicht van de gebruikte design tokens
- [ ] Nieuw: maak een overzicht van de missende design tokens
- [ ] Verzamel de design tokens voor states
- [ ] Verzamel de design tokens voor varianten
- [ ] Bepaal welke tokens algemeen nuttig zijn
- [ ] Documenteer beslissingen in de GitHub Discussion
- [ ] Zet de checkpoint in het GitHub projectbord op de juiste status

### Maak een overzicht van alle design tokens die gebruikt worden voor verschillende huisstijlen

- Maak een Canvas aan die gedeeld wordt met het kernteam kanaal.
- Verzamel alle design tokens die worden gebruikt, bekijk hiervoor implementaties en voorbeelden in de GitHub discussion. En kies de design token naam die klopt met de NL Design System naming convention.
- Zet deze in een tabel en noteer welke design tokens door welke organisaties worden gebruikt.

> [!WARNING]
>
> **Let op**
>
> Als een token géén value heeft, kun je hem als niet gebruikt beschouwen.
>
> Het is ook goed om via Inspect Element de CSS van de component te bekijken. Het kan voorkomen dat een component zijn stijling vanuit een andere tokenset ontvangt.

Bijvoorbeeld

| Paragraph                         | Amsterdam | Den Haag | DUO | Open Formulieren | Open Gemeenten | Rotterdam | RVO | Utrecht |
| --------------------------------- | --------- | -------- | --- | ---------------- | -------------- | --------- | --- | ------- |
| font-family                       | ✅        | ✅       | ✅  | ✅               | ✅             | ✅        | ✅  | ✅      |
| font-size                         | ✅        | ✅       | -   | ✅               | -              | -         | ✅  | ✅      |
| padding-block-start / padding-top | -         | ✅       | -   | -                | -              | -         | ✅  | -       |

### Maak een overzicht van de missende design tokens

Gebruik de bestaande Canvas om ook in kaart te brengen of er design tokens missen. Dat kun je bijvoorbeeld doen door naar de screenshots in de GitHub Discussion te kijken en te valideren dat die designs allemaal met een of meer van de Community componenten kan worden bereikt.

Missen er tokens? Zet deze dan in een nieuwe tabel voor missende tokens om straks bij het bepalen van de algemeen nuttige design tokens mee te nemen.

### Verzamel de design tokens voor states

Ook design tokens voor states van interactieve elementen zijn goed om te verzamelen. Bijvoorbeeld een Button. Maak daarvoor een losse tabel, zodat we het overzicht goed houden en zet daarin op dezelfde manier als voor de standaard component de tokens en hun gebruik.

Bijvoorbeeld

| Button                   | Amsterdam | Den Haag | DUO | Open Formulieren | Open Gemeenten | Rotterdam | RVO | Utrecht |
| ------------------------ | --------- | -------- | --- | ---------------- | -------------- | --------- | --- | ------- |
| default-background-color | ✅        | ✅       | ✅  | ✅               | -              | -         | ✅  | ✅      |
| hover-border-width       | ✅        | ✅       | ✅  | -                | -              | -         | ✅  | ✅      |
| pressed-background-color | -         | -        | -   | ✅               | -              | -         | -   | ✅      |
| presed-color             | ✅        | -        | -   | -                | -              | -         | -   | ✅      |

### Verzamel de design tokens voor varianten

Ook design tokens voor varianten zijn goed om te verzamelen. Bijvoorbeeld een Lead paragraph. Maak daarvoor een losse tabel, zodat we het overzicht goed houden en zet daarin op dezelfde manier als voor de standaard component de tokens en hun gebruik. Neem hierin ook tokens voor de state van die component mee die binnen de variant moeten kunnen worden aangepast.

Bijvoorbeeld

| Button—primary-action  | Amsterdam | Den Haag | DUO | Open Formulieren | Open Gemeenten | Rotterdam | RVO | Utrecht |
| ---------------------- | --------- | -------- | --- | ---------------- | -------------- | --------- | --- | ------- |
| font-size              | ✅        | ✅       | -   | ✅               | -              | -         | ✅  | ✅      |
| background-color       |           |          |     |                  |                |           |     |         |
| hover-background-color |           |          |     |                  |                |           |     |         |

### Bepaal welke tokens algemeen nuttig zijn

- Bepaal samen met de Design System Lead welke design tokens in de Candidate component moeten worden opgenomen, welke niet meegenomen worden omdat ze snowflakes zijn en welke niet aan onze richtlijnen voldoen

### Documenteer beslissingen in de GitHub Discussion

Leg vast welke design tokens varianten wel en niet worden meegenomen voor de Candidate implementatie en waarom. Dat kan met dit bericht.

```md
## Candidate voorbereidingsfase: Design tokens bepaald

De design tokens voor de Candidate component zijn bepaald. Dat hebben we gedaan op basis van alle designs die we in deze Discussion hebben gezien.
Als een beslissing 2+ keer voor komt, dan is het een algemeen nuttige beslissing!

### Deze design tokens nemen we mee:

Beschikbare design tokens vind je in: [{component}-tokens/tokens.json]({url}).

{optioneel}### Deze design tokens nemen we niet mee:
{Welke design tokens zijn zo smerig dat we ze niet hebben meegenomen? Beschrijf ook waarom}

### Mis je een design token?

Laat het in deze Discussion weten als er uit gebruikersonderzoek naar voren is gekomen dat deze design beslissing een hele verbetering zou zijn.

**💡 Tip**
Je kunt design tokens ook als extentie toevoegen aan de component. Documentatie hoe je dan kunt doen volgt. Vraag ons er gerust naar.
```

### Bepaal de logische common tokens voor alle component-tokens

- Component tokens zijn gekoppeld aan logische Common (basis) tokens.

### Leg de tokens vast in tokens.json

- Tokens zijn gedocumenteerd in tokens.json formaat en beschikbaar op NPM als `@nl-design-system-candidate/{component}-tokens`
- Zorg dat de design tokens NL Design System naming conventies volgen en zijn geprefixed met 'nl'.

🚩 Checkpoint
Design tokens bepaald
