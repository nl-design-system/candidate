---
name: Kernteam - 🔍 WCAG input
about: Is de component meegenomen in toegankelijkheidsrapporten?
title: '{component-name} - 🔍 WCAG input'
labels:
  - 🔍 Candidate Selectiefase
  - a11y specialist
---

## 🔍 WCAG input

- [ ] Kijk of de component is meegenomen in toegankelijkheidsrapporten
- [ ] Besluit of er zelf een onderzoek gedaan moet worden
- [ ] Documenteer de bevindingen in de GitHub Discussion
- [ ] Zet de checkpoint in het GitHub projectbord op de juiste status

### Bekijk toegankelijkheidsrapporten van websites waar het component in gebruikt wordt

Vraag de community om input in de Community Sprints, op Slack en in Open Hours.

#### Hoe kun je dit bijvoorbeeld doen?

Door checkpoint 'Selectie - component gebruikt' weten we dat de component gebruikt is in productie. Kijk op de website die bij dat checkpoint wordt genoemd of er al een toegankelijkheidsverklaring op staat. Als dat zo is, mooi! Kijk dan of deze recent is, want we willen wel graag weten of dit component dan is gebruikt.

##### Kijk of er ook een technisch rapport beschikbaar is

Weet je of de component is gebruikt in een applicatie waarvoor een techniek audit is gedaan omdat het van een leverancier is die de techniek aan meerdere organisaties verkoopt? (Denk bijvoorbeeld aan Open Formulieren) Dan is het handig om ook de techniek audit toe te voegen in deze stap. Daarvan weten we namelijk zeker dat er veel uitgebreider is getest. Je kunt hiervoor de website [digitoegankelijk.nl](https://www.digitoegankelijk.nl/ondersteuning/algemene-onderzoeken-platforms-en-apps) gebruiken

Optioneel: Twijfel je, wil je meer informatie, of staat hij er niet op? Vraag dan aan deze organisatie of ze je meer kunnen vertellen over de uitkomsten of plannen van een WCAG-audit.

### Noteer uitkomsten uit de WCAG-EM audits

Er wordt opgeschreven welke eventuele problemen in de geteste implementaties voorkomen. Dat doen we in de GitHub Discussion, zodat extra input van de community hier later ook nog kan worden toegevoegd.

Waren er audits beschikbaar? Zet dan dit bericht in de GitHub Discussion

```md
## Candidate selectieproces: Is de component al meegenomen in een WCAG-EM audit?

Om de {naam-component} van {naam-organisatie} als een toegankelijk Candidate component beschikbaar te maken is het handig als we weten of de Community implementaties al helemaal toegankelijk kunnen worden ingezet.

We hebben hiervoor gekeken of er een toegankelijkheidsverklaring beschikbaar was voor de projecten die in productie worden gebruikt. En:

🎉 Ja! We hebben de uitkomsten van de volgende WCAG-EM audit (1 of meerdere) kunnen vinden:

- {naam-organisatie} gebruikt het in {url-audit}
- ...

{ Niet verplicht, haal deze sectie weg als er geen problemen zijn gevonden }

### Notities voor toegankelijkheid

📝 We hebben wat dingen gevonden die in een Candidate implementatie beter kunnen. Omdat we die niet willen vergeten hebben we hier de notities gemaakt:
... notities
```

🚩 Checkpoint:
🔍 WCAG input: In WCAG-EM Audit

Geen audits beschikbaar in de community?
Overleg of de Product Manager. Wordt besloten dat we niet op de Community willen wachten, dan laten we dit component in 1 of meer productie implementaties toetsen door een Toegankelijkheidsspecialist uit het kernteam. Dat doen we dan volgens de WCAG-EM aanpak, maar zonder de hele website of pagina te testen.

Plaats het volgende bericht als hij niet gevonden is, maar we hebben het zelf kunnen doen:

```md
## Candidate selectieproces: Is de component al meegenomen in een WCAG-EM audit?

Om de {naam-component} van {naam-organisatie} als een toegankelijk Candidate component beschikbaar te maken is het handig als we weten of de Community implementaties al helemaal toegankelijk kunnen worden ingezet.

We hebben hiervoor gekeken of er een toegankelijkheidsverklaring beschikbaar was voor de projecten die in productie worden gebruikt. En:
Nee, die hebben we niet gevonden. Maar goed nieuws, we hebben hem wel zelf kunnen bekijken in productie.

We hebben naar de volgende pagina's gekeken:

- {naam-organisatie} gebruikt het op {url-pagina}
- ...

{ Niet verplicht, haal deze sectie weg als er geen problemen zijn gevonden }

### Notities voor toegankelijkheid

📝 We hebben wat dingen gevonden die in een Candidate implementatie beter kunnen. Omdat we die niet willen vergeten hebben we hier de notities gemaakt:
... notities
```

🚩 Checkpoint:
🔍 WCAG input: Door kernteam

Waren er geen audits beschikbaar en gaan we het zelf nu nog niet testen? Zet dan dit andere bericht in de GitHub Discussion

```md
## Candidate selectieproces: Is de component al meegenomen in een WCAG-EM audit?

Om de {naam-component} van {naam-organisatie} als een toegankelijk Candidate component beschikbaar te maken is het handig als we weten of de Community implementaties al helemaal toegankelijk kunnen worden ingezet.

We hebben hiervoor gekeken of er een toegankelijkheidsverklaring beschikbaar was voor de projecten die in productie worden gebruikt. En:

⌛️ Nog niet! We hebben jullie hulp nodig om te ontdekken waar de component al in een WCAG-EM audit is meegenomen.

📣 Weet jij van een audit die is gedaan voor een project die dit component gebruikt? Laat het ons dan in deze GitHub Discussion of op Slack weten.
```

🚩 Checkpoint:
🔍 WCAG input: Nee

---

### Interne doelen

- De Candidate component biedt voldoende opties, voorbeelden van goede code en begeleidende documentatie om deze toegankelijk in te zetten in verschillende projecten.
- Het kernteam kan besluiten om componenten met onopgeloste toegankelijkheidsproblemen, waarvoor zij zelf ook geen oplossing weten, niet op te nemen in het design system.
