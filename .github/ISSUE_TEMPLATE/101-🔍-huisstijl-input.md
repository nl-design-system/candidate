---
name: Kernteam - 🔍 Huisstijl input
about: Is de component voldoende gebruikt in verschillende huisstijlen?
title: '{component-name} - 🔍 Huisstijl input'
labels:
  - 🔍 Candidate Selectiefase
  - designer relations
---

## 🔍 Huisstijl input

- [ ] Controleer of er tenminste 1 implementatie in de community gebruikt wordt in meerdere thema's
- [ ] Documenteer de bevindingen in de GitHub Discussion
- [ ] Zet de checkpoint in het GitHub projectbord op de juiste status

### Kijk of er tenminste 1 Community implementatie is van de component die wordt gestyled in verschillende thema's

De component moet gebruikt zijn door 2 huisstijlen die qua ontwerpkeuzes van elkaar verschillen. Bijvoorbeeld een vriendelijkere huisstijl met afgeronde hoeken, een vrolijke met veel kleuren of een zakelijk met simpele kleuren en een meer hoekige uitstraling.

#### Hoe kun je dit bijvoorbeeld doen?

Begin in de GitHub Discussion van de component, want daar kun je een voorbeeld van huisstijlen vinden die vaak gebruikt zijn met NL Design System. Bijvoorbeeld Utrecht, Rotterdam, Amsterdam, Rijkshuisstijl en Groningen.

Kijk vervolgens in de themes repository of die thema's daar met de community component getoond worden.

Vergelijk de Story waarbij de huisstijl wordt gebruikt met de screenshot in de GitHub Discussion of eventueel met de huisstijl zoals deze op de hoofdwebsite van de organisatie staat. (utrecht.nl, gemeente.groningen.nl)

### Documenteer bevindingen in de GitHub Discussion

Is de component succesvol ingezet door 2 of meer organisaties met verschillende huisstijlen? Zet dan de volgende tekst neer in de GitHub Discussion van de component

```md
## Candidate selectieproces: Is de component al ingesteld voor meerdere huisstijlen?

Het kernteam heeft gekeken of {naam-component} van {naam-organisatie} al geschikt is om richting Hall of Fame te gaan. Hiervoor willen we dat de component succesvol in tenminste 2 verschillende huisstijlen is ingezet.

We hebben gekeken naar de huisstijl {naam-organisatie-1}, {naam-organisatie-2} en {naam-organisatie-...} en we zijn tot de volgende conclusie gekomen:

🎉 Jazeker! Met jullie hulp hebben we genoeg informatie verzameld om een goed instelbaar component als Candidate beschikbaar te gaan maken.
```

🚩 Checkpoint:
🔍 Huisstijl input: Uitstekend

Is de component nog niet in genoeg verschillende huisstijlen beschikbaar, maar lijkt deze wel voldoende design tokens beschikbaar te hebben? Zet dan deze tekst neer:

```md
## Candidate selectieproces: Is de component al ingesteld voor meerdere huisstijlen?

Het kernteam heeft gekeken of {naam-component} van {naam-organisatie} al geschikt is om richting Hall of Fame te gaan. Hiervoor willen we dat de component succesvol in tenminste 2 verschillende huisstijlen is ingezet.

We hebben gekeken naar de huisstijl {naam-organisatie-1}, {naam-organisatie-2} en {naam-organisatie-...} en we zijn tot de volgende conclusie gekomen:

⌛️ Nog niet! We hebben jullie hulp nodig om de component voor meer huisstijlen in te zetten. Alleen dan krijgen we genoeg informatie om de component naar een volgend Estafettemodel niveau te brengen.

📣 Help je mee? Laat ons in deze Discussion weten of deze component ook werkt voor jouw huisstijl. Dat kan door jouw huisstijl in te stellen voor de component met design tokens in Figma óf in code.
```

🚩 Checkpoint:
🔍 Huisstijl input: Nee

Is de component niet goed in te stellen omdat deze nog onvoldoende design tokens lijkt te hebben om de geteste huisstijlen in te stellen? Maak dan een GitHub issue aan bij de betreffende Community repository en zet onderstaande tekst in de GitHub Discussion

```md
## Candidate selectieproces: Is de component al ingesteld voor meerdere huisstijlen?

Het kernteam heeft gekeken of {naam-component} van {naam-organisatie} al geschikt is om richting Hall of Fame te gaan. Hiervoor willen we dat de component succesvol in tenminste 2 verschillende huisstijlen is ingezet.

We hebben gekeken naar de huisstijl {naam-organisatie-1}, {naam-organisatie-2} en {naam-organisatie-...} en we zijn tot de volgende conclusie gekomen:

⌛️ Nog niet! We hebben een [GitHub issue]({url naar issue}) bij {naam-organisatie} aangemaakt zodat de component voor meer huisstijlen ingezet kan worden. Alleen dan krijgen we genoeg informatie om de component naar een volgend Estafettemodel niveau te brengen.

📣 Help je mee? Laat ons in deze Discussion weten of deze component ook werkt voor jouw huisstijl. Dat kan door jouw huisstijl in te stellen voor de component met design tokens in Figma óf in code.
```

🚩 Checkpoint:
🔍 Huisstijl input: Nee

---

### Interne doelen

- Het kernteam doet geen onnodig werk. De community doet minimaal 80% van het werk.
- Het kernteam heeft voldoende informatie om sommig werk uit de community (voorlopig) te negeren.
- Het kernteam kan zoveel mogelijk op basis van community beslissingen ook besluiten om bepaalde design tokens weg te laten.
