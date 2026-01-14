---
name: Kernteam - 📝 Varianten bepaald
about: Component is, waar nodig, versimpeld of opgesplitst. Zodat er één of meerdere componenten over blijven met een duidelijke use case en documentatie.
title: '{component-name} - 📝 Varianten bepaald'
labels:
  - 📝 Candidate Voorbereidingsfase
---

## 📝 Varianten bepaald

Component is, waar nodig, versimpeld of opgesplitst. Zodat er één of meerdere componenten over blijven met een duidelijke use case en documentatie.

- [ ] Verzamel input uit de Community
- [ ] Besluit welke varianten Candidate worden
- [ ] Documenteer besluit in de GitHub Discussion
- [ ] Maak de packages beschikbaar voor de nieuwe Candidate component
- [ ] Documenteer besluit in de Candidate repository
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

- Overleg de naam en beschrijving met het kernteam
- Bepaal samen met de Design System Lead welke varianten in de Candidate component moeten worden opgenomen
- Notuleer de besproken beredeneringen op, deze heb je nodig in de volgende stap.

### Maak de packages beschikbaar voor de nieuwe Candidate component

Het is vanaf dit moment handig dat er een omgeving is waarin de component en al zijn aanhangsels kan worden ontwikkeld. Maak dus in [de Candidate repository](https://github.com/nl-design-system/candidate) de packages alvast aan voor

- de css component
- de react component
- de component docs

Maak daarnaast alvast de mapjes aan:

- het mapje voor deze component in storybook-test
- het mapje voor deze component in storybook-non-conforming
- het mapje voor deze component in storybook

#### Hoe doe je dit bijvoorbeeld

Er is hiervoor een experimenteel script beschikbaar in de Candidate repository. `scripts/create-package.sh`. Deze kun je in je terminal draaien, waarbij je kunt aangeven om welke component het gaat etc. Op basis hiervan worden template bestanden en mapjes aangemaakt die je in de volgende stappen kunt vullen.

### Documenteer besluit

- Optioneel: splits, in overleg met de Design System Lead, de component op in meerdere componenten en zet de extra componenten met logica die we daarin gaan opnemen op de Backlog.
- Documenteer in de GitHub Discussion welke varianten wel en niet worden meegenomen voor de Candidate implementatie en waarom.

```md
## Candidate voorbereidingsfase: Versimpeld of gesplitst

De varianten voor de Candidate component zijn bepaald, dat hebben we gedaan op basis van alle voorbeelden die we in deze Discussion hebben gezien. Als een variant veel voor komt, dan is het een algemeen nuttige variant!

### Deze varianten nemen we mee:

**{variant-groep}** - {enum / boolean / string)

- {variant-naam}
- {variant-naam}
- {variant-naam}

### Deze varianten nemen we mee:

{optioneel: welke varianten zijn zo smerig dat we ze niet hebben meegenomen? Beschrijf ook waarom}

### Mis je een variant?

Laat het in deze Discussion weten als er uit gebruikersonderzoek naar voren is gekomen dat deze design beslissing een hele verbetering zou zijn.

**💡 Tip**
Je kunt varianten ook als extentie toevoegen aan de component. Documentatie hoe je dan kunt doen volgt. Vraag ons er gerust naar.
```

- Zet de naam en beschrijving van de varianten die we gaan meenemen naar Candidate in de GitHub Backlog issue van de component. Maak acceptatiecriteria voor alle varianten die in de component worden meegenomen. Voeg deze toe aan de `acceptance-criteria.md` van de component in de Candidate repository.

🚩 Checkpoint
📝 Varianten bepaald: Done
