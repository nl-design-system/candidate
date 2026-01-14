---
name: Kernteam - 📝 Issues bekend
about: Openstaande issues voor de Community implementaties verzameld
title: '{component-name} - 📝 Issues bekend'
labels:
  - 📝 Candidate Voorbereidingsfase
---

## 📝 Issues bekend

Kijk naar de repositories in de Community waarin dit component geimplementeerd is. Stel vragen in Developer Open Hour en Designer Open Hour. Bepaal welke belangrijke issues er nog open staan en welke features die nog niet in de Community component zijn meegenomen.

- [ ] Bekijk welke issues er nog open staan in verschillende Community implementaties
- [ ] Vergelijk de screenshots in de GitHub Discussion en de Community implementaties
- [ ] Bepaal welke breaking changes die gepland staan worden meegenomen in de Candidate implementatie
- [ ] Bepaal welke feature en design token requests kunnen worden meegenomen in de Candidate implementatie
- [ ] Leg vast welke acceptatiecriteria nodig zijn om de bekende issues te voorkomen
- [ ] Documenteer beslissingen in de GitHub Discussion
- [ ] Zet de checkpoint in het GitHub projectbord op de juiste status

### Bekijk welke issues er nog open staan in verschillende Community implementaties

- Kijk welke Community repositories deze component hebben en zoek bij deze repositories op de naam van de component.
- Bepaal welke open staande issues relevant zijn voor deze component en plaats deze issues in een comment onder dit issue.
- Kijk ook of er in de GitHub Discussion van de component comments staan waaruit blijkt dat er nog feature requests of issues voor de component zijn.
- Analyseer welke issues moeten worden voorkomen met acceptatiecriteria en welke breaking changes moeten worden overwogen voor de Candidate implementatie

### Bepaal welke breaking changes die gepland staan worden meegenomen in de Candidate implementatie

- Beoordeel wat de impact en wenselijkheid is van deze voorgestelde breaking changes en API-wijzigingen.
- Bepaal met de Design System Lead en Product Manager welke API wijzigingen doorgevoerd kunnen worden in de Candidate component en welke eerst in de Community moeten worden uitgetest.

### Vergelijk de screenshots in de GitHub Discussion en de Community implementaties

- Analyseer welke functionaliteit er nog nodig is om de verzamelde screenshots in de GitHub Discussion voor elkaar te krijgen.
- Vergelijk je welke features nog niet bestaan in de Community implementaties, maar wel gewenst zijn.
- Maak een voorstel welke nieuwe design tokens en component variaties moeten worden overwogen voor de Candidate component

### Bepaal welke feature en design token requests kunnen worden meegenomen in de Candidate implementatie

- Analyseer wat de impact en wenselijkheid is van de feature requests in de community. Hoe verhouden deze zich tot de keuzes in bestaande Candidate componenten? Hoe veel organisaties hebben deze feature nodig? Is het beter om deze feature eerst in de Community uit te proberen?
- Bepaal met de Design System Lead en de Product Manager welke nieuwe features worden meegenomen in de Candidate implementatie en welke eerst in de Community moeten worden uitgetest.

Is het beter om de feature eerst in de Community uit te testen? Noteer dit dan ook in de GitHub Discussion, inclusief uitleg hoe iemand dat bijvoorbeeld kan doen.

### Leg vast welke acceptatiecriteria nodig zijn om de bekende issues te voorkomen

- Leg vast welke bugs voorkomen moeten worden met betere documentatie en voorbeelden
- Leg vast welke toegankelijkheidsproblemen voorkomen moeten worden in de acceptatiecriteria van de Candidate component
- Leg vast welke bugs in gebruik van de component voorkomen moeten worden met acceptatiecriteria
- Analyseer welke acceptatiecriteria niet extra nodig zijn omdat ze al opgevangen worden met andere acceptatiecriteria.

### Documenteer beslissingen in de GitHub Discussion

Zijn er issues bekend? Plaats dan de volgende tekst

```md
## Openstaande issues die worden meegenomen voor Candidate

We hebben gekeken bij X Y en Z en de volgende issues zijn bekend voor {naam-component}.

- Link naar issue 1
- Link naar issue 2
- ....

We hebben besloten om issue 1, 2, en 3 mee te nemen. Issues 4 en 5 nemen we niet mee want `{risico, niet in lijn met de rest van de Candidate componenten, niet bewezen nodig, ...}`

### Hoe kun je helpen om deze features wel in de Candidate implementatie te krijgen?

Pas de wijzigingen eerst in de Community implementatie toe en vraag andere organisaties in de community om deze ook in hun projecten te gebruiken. Documenteer jullie bevindingen en successen in de GitHub Discussion, deel deze in de Heartbeat en op Slack. Zo heeft het kernteam meer bewijs dat de feature wenselijk en haalbaar is en kan deze besluiten de functionaliteit alsnog, of in een volgende versie mee te nemen.
```

🚩 Checkpoint
📝 Issues bekend: Issues vastgelegd

Zijn er geen issues bekend? Plaats dan de volgende tekst:

```md
## Openstaande issues die worden meegenomen voor Candidate

We hebben geen openstaande issues gevonden.

### Hebben we een issue gemist?

Laat het in deze Discussion weten.

Laat ons dan weten als er uit gebruikersonderzoek naar voren is gekomen dat deze design beslissing een hele verbetering zou zijn.

zijn er issues die we hebben gemist? Laat het ons dan via deze Discussion weten
Zet de uitkomsten in de GitHub issue van de component
```

🚩 Checkpoint
📝 Issues bekend: Geen issues aanwezig

---

### Interne doelen

- De component implementatie werkt in verschillende frameworks en systemen, eventuele issues die daaruit voortkomen zijn bekend
