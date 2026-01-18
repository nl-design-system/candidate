---
name: Kernteam - 📝 API bepaald
about: Er is besloten welke API's algemeen nuttig zijn en hoe deze APIs zijn opgebouwd
title: '{component-name} - 📝 API bepaald'
labels:
  - 📝 Candidate Voorbereidingsfase
  - designer relations
  - developer relations
---

## 📝 API bepaald

- [ ] Analyseer welke APIs het best beschikbaar kunnen worden gemaakt in de component
- [ ] Bepaal de APIs die beschikbaar worden gemaakt voor de component
- [ ] Leg de APIs vast in de acceptatiecriteria van de component
- [ ] Zet de checkpoint in het GitHub projectbord op de juiste status

### Analyseer welke APIs het best beschikbaar kunnen worden gemaakt in de component

Breng in kaart welke API’s community componenten nu hebben. Dat zijn de modifiers die in de CSS implementatie zitten, de props in React, Angular of Vue en eventueel de slots in Webcomponenten.

#### Hoe kun je dit bijvoorbeeld doen als Developer?

- Maak een Canvas aan.
- Bekijk welke Community implementaties er zijn voor de component. Bijvoorbeeld: Utrecht en Amsterdam.
- Selecteer de CSS componenten en maak een lijst van alle modifiers die je vindt. Een modifier is alles achter `--` in de class name. Dus bij `utrecht-button--primary-action` is `primary-action` een API die beschikbaar is.
- Selecteer de React, VueJS en Angular componenten en maak een lijst van alle props die je vindt, inclusief of de component children kan hebben. Dus bij UtrechtButton kom je daar bijvoorbeeld children en appearance tegen. Neem, als dat uit de TypeScript beschrijvingen blijkt, ook op welke waarde er in zo’n property kan zitten. Bijvoorbeeld `appearance: 'primary-action-button' | 'secondary-action-button' | 'subtle-button'`;
- Selecteer de Webcomponenten en maak een lijst van de attributen en slots die je daar vindt. Bijvoorbeeld `attribute: appearance` en `slot: icon`

#### Hoe kun je dit bijvoorbeeld doen als Designer?

- Maak een canvas aan
- Bekijk de component in Figma en maak een lijst van de properties die worden gebruikt en beschrijf wat er in zo’n property als opties aangeboden wordt. Zoals bijvoorbeeld `number`, `text`, of specifieke waardes
- Bekijk de component in Storybook en maak notities wanneer de APIs daar van Figma lijken te verschillen

### Bepaal de APIs die beschikbaar worden gemaakt voor de component

Maak op basis van de vorige stap een voorstel voor de APIs die nodig zijn voor de Candidate implementatie. Zorg er hierbij voor dat:

- De APIs goed in lijn zijn met onze API conventies en voor naamgeving waar mogelijk gebruik maken van de naamgeving in web standaarden
- Bekijk of de naamgeving en het gedrag van de APIs consistent is met vergelijkbare Candidate en Hall of Fame componenten
- Zorg dat de APIs goed kunnen worden geimplementeerd in meerdere technieken, door goed rekening te houden met "reserved keywords" in die rechnieken. Bijvoorbeeld: Geen global HTML attributes, Geen ECMAScript reserved keywords, Geen ref omdat deze voor problemen kan zorgen in React, etc.

### Leg de APIs vast in de acceptatiecriteria van de component

Documenteer de acceptatiecriteria voor het maken van de component met Markdown in de docs van de Candidate repository.

🚩 Checkpoint
📝 API bepaald
