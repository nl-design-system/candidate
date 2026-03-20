---
name: Kernteam - 📝 Varianten bepaald
about: Component is, waar nodig, versimpeld of opgesplitst. Zodat er één of meerdere componenten over blijven met een duidelijke use case en documentatie.
title: '{component-name} - 📝 Varianten bepaald'
labels:
  - 📝 Candidate Voorbereidingsfase
  - designer relations
type: Task
---

## 📝 Varianten bepaald

Component is, waar nodig, versimpeld of opgesplitst. Zodat er één of meerdere componenten over blijven met een duidelijke use case en documentatie.

- [ ] Verzamel input uit de Community
- [ ] Besluit welke varianten Candidate worden
- [ ] Documenteer besluit in de GitHub Discussion
- [ ] Zet de checkpoint in het GitHub projectbord op de juiste status

### Verzamel input uit de Community

#### Hoe kun je dit bijvoorbeeld doen?

- Maak een Canvas aan die gedeeld wordt met het kernteam kanaal.
- Verzamel alle varianten die worden gebruikt, bekijk hiervoor implementaties en voorbeelden in de GitHub discussion.
- Geef de variant een naam en beschrijving en voeg screenshots bij als verduidelijking waar het over gaat.- Zet deze in een tabel en noteer welke varianten door welke organisaties worden gebruikt.

Bijvoorbeeld voor Paragraph:

| Paragraph | Amsterdam | Den Haag | DUO | Open Formulieren | Open Gemeenten | Rotterdam | RVO | Utrecht |
| Lead/Big/Header paragraph/Intro-text | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Small/Details Small/Small print | ✅ | ✅ | - ✅ | - | - | ✅ | ✅ |
| XL | - | - | - | - | - | - | ✅ | - |

Keuzes:

- **✅ Lead**: Een grotere Paragraph met de naam ‘lead’ lijkt door iedereen te worden gebruikt in enige vorm. Deze variant voegen we dus sowieso toe.
- **⌛️Small**: Een kleinere variant wordt ook veel gebruikt, maar heeft geen duidelijke beschrijving wanneer deze gebruikt kan worden en zorgt voor problemen omdat dan de font-size vaak kleiner is dan 16px. Hier moet beter over worden nagedacht voordat deze wordt toegevoegd als Candidate feature. Hier zou dan de richtlijn bij moeten dat de default-paragraph font-size bijvoorbeeld 18px zou moeten zijn, zodat je ruimte overhoudt voor een goed leesbare small font-size van 16px. Rijkshuisstijl lijkt dat veel toe doen, die hebben een standaard font-size van 20px en dus sowieso ruimte over voor kleinere, nog steeds goed leesbare, tekst. Voor nu kan dit door een van de Community organisaties beschikbaar worden gemaakt als een Community extention voor de Candidate component. Dat doe je bijvoorbeeld zo:

```css
.nl-paragraph--utrecht-small-print {
  font-size: var(--utrecht-paragraph-small-print-font-size);
}
```

```json
{
    "nl": {
        "paragraph": {
        "font-size": { "value": "18px" },
        "lead": {
            "font-size": { "value": "20px" }
        },
    },
    "utrecht": {
        "paragraph": {
            "small-print": {
                "font-size": { "value": "16px" }
            }
        }
    }
}
```

- **❄️ XL**: wordt maar door 1 organisatie gebruikt en telt voor nu dus als snowflake variant die als extention kan worden toegevoegd aan de Candidate component, maar waarvoor niet per se behoefte voor hergebruik lijkt te bestaan in de Community

Voorbeeld hypothese voor RVO met 4 verschillende formaten voor font-size:

```html
<!-- RVO extentie voor XL Paragraph -->
<p class="nl-paragraph--rvo-xl">XL Paragraph</p>

<!-- NL Paragraph-->
<p class="nl-paragraph--lead">Lead Paragraph</p>
<p class="nl-paragraph">Default Paragraph</p>

<!-- Utrecht extentie voor small-print gebruikt door RVO -->
<p class="nl-paragraph--utrecht-small-print">Smallprint</p>
```

```css
.nl-pragraph--rvo-xl {
  font-size: var(--rvo-paragraph-xl-font-size);
}
```

```json
{
  "nl": {
    "paragraph": {
      "font-size": { "value": "16px" },
      "lead": {
        "font-size": { "value": "18px" }
      }
    }
  },
  "utrecht": {
    "paragraph": {
      "small-print": {
        "font-size": { "value": "14px" }
      }
    }
  },
  "rvo": {
    "paragraph": {
      "xl": {
        "font-size": { "value": "20px" }
      }
    }
  }
}
```

### Besluit welke varianten Candidate worden

- Overleg de naam en beschrijving met het kernteam.
- Bepaal samen met de Design System Lead welke varianten in de Candidate component moeten worden opgenomen.
- Is het een variant die hoort bij een standaard HTML attribuut? Bepaal dan welke varianten wel worden ondersteund en ook geadviseerd worden, welke ondersteund worden maar niet geadviseerd worden en welke er niet ondersteund worden.
- Notuleer de besproken beredeneringen. Deze heb je nodig in de volgende stap. Dat doe je met een comment in dit GitHub issue met een comment:

```md
## Input type

### ondersteund:

- text
- search
- tel
- url
- email
- password

### ondersteund maar niet geadviseerd:

- hidden
- :not([type])
- date
- month
- week
- time
- datetime-local
- number

### niet ondersteund:

- color
- range
- radio
- checkbox
- file
- submit
- image
- reset
- button
```

### Documenteer besluit

- Optioneel: splits, in overleg met de Design System Lead, de component op in meerdere componenten. Zet de extra componenten, met logica die we daarin gaan opnemen, op de Backlog.
- Documenteer in de GitHub Discussion welke varianten wel en niet worden meegenomen voor de Candidate implementatie en waarom.

```md
## Candidate voorbereidingsfase: Versimpeld of gesplitst

De varianten voor de Candidate component zijn bepaald, dat hebben we gedaan op basis van alle voorbeelden die we in deze Discussion hebben gezien. Als een variant veel voorkomt, dan is het een algemeen nuttige variant!

### Deze varianten ondersteunen we:

**{variant-groep}** - (enum / boolean / string)

- {variant-naam}(default)
- {variant-naam}
- {variant-naam}

### Deze varianten ondersteunen we niet:

optioneel: welke varianten hebben we besloten om niet te supporten? Zie hiervoor de notulen in dit GitHub issue.

### Deze varianten ondersteunen we, maar raden we niet aan:

optioneel: welke varianten supporten we omdat ze standaard in HTML zitten, maar gaan we niet documenteren, niet beschikbaar maken in Figma en alleen meenemen in de test Storybook? Zie hiervoor de notulen in dit GitHub issue

### Mis je een variant?

Laat het in deze Discussion weten als er uit gebruikersonderzoek naar voren is gekomen dat deze design beslissing een hele verbetering zou zijn.

**💡 Tip**
Je kunt [varianten ook als extensie toevoegen](https://www.nldesignsystem.nl/handboek/componenten-vinden/#ik-mis-een-functionaliteit-binnen-een-candidate-of-hall-of-fame-component-wat-nu) aan een component.
```

Zijn er geen varianten? Documenteer dat dan ook in de GitHub Discussion.

```md
## Candidate voorbereidingsfase: Versimpeld of gesplitst

Er zijn meerdere implementaties van {component-naam} bekeken en met elkaar vergeleken. Op basis daarvan is besloten dat er géén specifieke varianten nodig zijn voor de Candidate component.
```

#### Voeg de besluiten toe aan de acceptatiecriteria

Maak acceptatiecriteria voor alle varianten die in de component worden meegenomen. Voeg deze toe aan de `acceptance-criteria.md` van de component in de Candidate repository.

```md
## Welke varianten ondersteunen we voor deze component

Deze varianten worden ondersteund. Wanneer ze standaard in HTML zitten worden ze in Typescript gedefinieerd door de attributen het standaard HTMLElement te gebruiken. Wanneer ze niet standaard in HTML zitten wordt deze type extended. Deze varianten worden gedocumenteerd op de website, in de README en in de standaard Storybook. Deze varianten worden beschikbaar gemaakt in Figma.

**{variant-groep}** - (enum / boolean / string / number)

{
Is het een enum? Noteer dan de waardes en of er een default is

- {variant-naam}(default)
- {variant-naam}
- {variant-naam}

Is het een boolean? Noteer dan de twee opties en welke de default is

- true (default)
- false

Is het een string of number? Laat deze dan leeg
}

### Deze varianten ondersteunen we niet:

{
optioneel:

Deze varianten die standaard in HTML zitten worden niet ondersteund. Ze worden uit de HTMLElement type gehaald met Omit bij het definieren van de properties van de component in Typescript.

Deze varianten worden ook niet gedocumenteerd en niet meegenomen in Figma.

Documenteer de niet ondersteunde varianten op basis van de notulen in dit GitHub issue.
}

### Deze varianten ondersteunen we, maar raden we niet aan:

{
optioneel:

Deze varianten supporten we omdat ze standaard in HTML zitten door de HTMLElement type te extenden in Typescript. Deze varianten worden meegenomen in de test Storybook. Deze varianten worden niet gedocumenteerd op de website of in de README, niet beschikbaar in Figma en niet meegenomen in de standaard Storybook.

Documenteer de ondersteunde, maar niet aangeraden varianten op basis van de notulen in dit GitHub issue.
}
```

🚩 Checkpoint
📝 Varianten bepaald: Done
