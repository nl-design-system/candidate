---
name: Kernteam - 🧪 Accessibility getest
about: We testen of de component voldoet aan de acceptatiecriteria voor toegankelijkheid
title: '{component-name} - 🧪 Accessibility getest'
labels:
  - 🧪 Candidate Testfase
---

## 🧪 Accessibility getest

Test de acceptatiecriteria voor toegankelijkheid

1. Test de stories die gemaakt zijn om op de acceptatiecriteria voor toegankelijkheid te testen
2. Testresultaten opslaan in story bij story.parameters.testResult.pass (of feedback geven aan Developer tot het slaagt)
3. Testen of de component werkt zonder CSS. De simpele manier: handmatige test, bijvoorbeeld door in Developer tools CSS uit te zetten, of in Firefox "View ➝ Page Style ➝ No Style". In een ideale wereld is de component zonder CSS ook een Story, maar dat is makkelijker gezegd dan gedaan

```css
.disable-css \* {
  all: revert !important;
}
```

🚩 Checkpoint
🧪 A11y getest
