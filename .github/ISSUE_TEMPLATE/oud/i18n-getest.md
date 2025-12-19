---
name: i18n getest
about: Getest op geschiktheid voor internationalisatie.
title: '{component-name} - i18n getest'
labels:
  - desk research
  - documentation
  - community collaboration 🤝
  - storybook
---

### Criteria

Getest op geschiktheid voor internationalisatie.

## Taken

- [ ] Implementeer default story met realistische voorbeeldcontent.
- [ ] Test met vertalingen:
  - [ ] Implementeer Duitse of Italiaanse vertalingen.
  - [ ] Controleer tekstlengte verschillen.
- [ ] Test right-to-left ondersteuning:
  - [ ] Valideer layout in right-to-left modus.
  - [ ] Controleer `dir` en `lang` attributen.
  - [ ] Test tekstweergave met right-to-left voorbeeldteksten, in bijvoorbeeld Arabisch.
- [ ] Als de component toont die localisatie vereist, moet je die testen in meerdere locales.
  - [ ] Test de data in verschillende locales. Bijvoorbeeld: `nl-NL`, `nl-BE` of `de-DE`.
  - [ ] Valideer valuta weergave.
- [ ] Test of de component goed vertaald kan worden met automatische vertaalsoftware, zoals Google Translate in een browser.
  - [ ] Identificeer content die niet vertaald moet worden.
  - [ ] Controleer dat de juiste onderdelen vertaald wordt.
  - [ ] Controleer dat door de gebruiker ingevoerde data niet vertaald wordt.
- [ ] Test of deze component in een andere taal kan zijn dan een pagina waarin de component staat.

[De nieuwste versie van het "i18n getest" stappenplan](https://github.com/nl-design-system/candidate/blob/main/.github/ISSUE_TEMPLATE/i18n-getest.md) vind je in de Git repository. Controleer voor het afronden van dit GitHub Issue of de stappen hier boven volledig zijn.
