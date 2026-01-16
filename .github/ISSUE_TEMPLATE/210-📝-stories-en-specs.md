---
name: Kernteam - 📝 Acceptatiecriteria vertaald naar Stories en Specs
about: Alle acceptatiecriteria die in eerdere stappen zijn opgesteld zijn opgenomen als stories en unit tests
title: '{component-name} - 📝 Acceptatiecriteria vertaald naar Stories en Specs'
labels:
  - 📝 Candidate Voorbereidingsfase
---

## 📝 Acceptatiecriteria vertaald naar Stories en Specs

- [ ] Verzamel alle acceptatiecriteria voor de component
- [ ] Vertaal de acceptatiecriteria naar Stories
- [ ] Documenteer welke acceptatiecriteria nog door geen enkele Community implementatie is gedekt
- [ ] Zet de checkpoint in het GitHub projectbord op de juiste status

### Verzamel alle acceptatiecriteria voor de component

In de vorige stappen zijn allerhande acceptatiecriteria verzameld. Maak een Canvas waarin je de linkjes naar die acceptatiecriteria verzameld zodat je weet wat je te doen staat.

Beschrijf welke tests er gedaan moeten worden om de component te testen aan de a11y acceptatiecriteria.

### Vertaal de acceptatiecriteria naar Stories

De Stories die we maken vormen een handige todo-lijst voor Developers die gebruikt kan worden voor het maken van de component. Deze Stories kunnen ook goed worden gereviewd om te zorgen dat de acceptatiecriteria juist vertaald zijn naar testbare functionaliteiten, voordat de component zelf wordt ontwikkeld. Ook kunnen we de stories gebruiken om Community implementaties te testen, zodat we weten welke onderdelen we uit implementaties kunnen gebruiken als basis voor de Candidate implementatie.

> [!TIP]
> Door gebruik te maken van de bestaande Community componenten in deze stories weten we welke functionaliteit meegenomen kan worden én kunnen we uitleggen waarom we de Candidate component op sommige vlakken anders implementeren dan de bestaande Community component.

- Maak stories voor de acceptatiecriteria die relevant zijn voor toegankelijkheid.
- Maak stories voor de acceptatiecriteria die relevant zijn voor design.
- Maak stories voor de acceptatiecriteria die relevant zijn voor development die nog niet gevangen worden door bovenstaande stories.

#### Hoe kun je dit bijvoorbeeld doen?

De stories worden later ge-update om niet de community componenten, maar de candidate component te renderen met dezelfde of betere uitkomsten.

Per acceptatiecriteria doorloop je deze stappen

##### 1. Maak een vertaling van het acceptatiecriterium in een lege Story

Bijvoorbeeld

```ts
export const ButtonWithInvisibleLabel: Story = {
  name: 'Button with invisible label',
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Een Button met daarin een Icon, zonder bijbehorend zichtbaar label.
Het label wordt wel meegenomen als aria-label`,
      },
    },
  },
};
```

Wanneer een acceptatiecriterium niet kan worden omgezet naar een Story wordt een unit test file gemaakt

Bijvoorbeeld

```ts
describe('Button with an invisible label', () => {
  todo.it('has no visible label', () => {});
  todo.it('accepts an aria-label', () => {});
  todo.it('the label is available for assistive technologies', () => {});
});
```

##### 2. Test de Community componenten in de lege Stories

- Zoek de componenten uit de Community die aan deze acceptatiecriteria voldoen
- Installeer de community component in de test-storybook
- Gebruik de component voor de Story waarvan je denkt dat hij voldoet.
- Voldoen er 2 Community implementaties? Kijk dan of ze erg van elkaar verschillen en of het de moeite waard is voor beide een Story toe te voegen.
- Werk samen met de Design System Lead om te zorgen dat de Stories aan de verwachtingen voldoen

### Documenteer welke acceptatiecriteria nog door geen enkele Community implementatie is gedekt

De missende functionaliteit uit Community implementaties is gedocumenteerd in een Canvas. Voor het geval dat: Ook acceptatiecriteria die niet in Stories kunnen worden gevat zijn gedocumenteerd in datzelfde Canvas

🚩 Checkpoint
📝 Stories en specs
