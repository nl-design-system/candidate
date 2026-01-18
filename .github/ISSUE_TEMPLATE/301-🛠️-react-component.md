---
name: Kernteam - 🛠️ React component
about: React component is ontwikkeld, maakt gebruik van de CSS component en wordt gebruikt in de Storybook en testbestanden
title: '{component-name} - 🛠️ React component'
labels:
  - 🛠️ Candidate Ontwikkelfase
  - frontend
---

## 🛠️ React component

Vaak wordt deze stap samen met de CSS component stap uitgevoerd, omdat de component anders geen stylesheet heeft.

- [ ] Maak de React component beschikbaar
- [ ] Documenteer de React component in Storybook
- [ ] Test de component met unit tests
- [ ] Laat de component reviewen
- [ ] Zet de checkpoint in het GitHub projectbord op de juiste status

### Maak de React component beschikbaar

Er zijn al in een eerdere bestanden aangemaakt in de Candidate repository voor de component. Controleer of hierbij ook alle React bestanden zijn klaargezet die je in deze stap nodig hebt en vul eventueel aan.

Controleer dus of er een package is in `/packages/components-react/{component}-react` met daarin een `src/` directory. In deze directory staat de file `{component}.tsx` (waarbij `{component}` lower kebab cased is). Zijn deze er niet? Maak deze dan aan.

Maak een interface of type genaamd `{Component}Props` gebaseerd op de API zoals hij voor de component is bepaald. Extend hierbij voor zover mogelijk bestaande DOM elementen.

Schrijf een render method voor de component op basis van de semantiek zoals bepaald in een eerder stap.

Analyseer welke typescript attributen het component inherit. Denk bijvoorbeeld aan `HTMLAttributes<HTMLSpanElement>`

Gebruik wanneer nodig ook typescript regels voor gecombineerde attributen. Denk bijvoorbeeld aan

```ts
  (Omit<HTMLAttributes<HTMLSpanElement>, 'role' | 'aria-hidden' | 'aria-label' | 'aria-labelledby' | 'dir'> & {
  'aria-hidden'?: true;
  'aria-label'?: never;
  'aria-labelledby'?: never;
  role?: never;
  })
```

Maak een React bestand met geinjecteerde CSS beschikbaar door `src/css.tsx` de React component en de CSS component exporteerd. Je kunt ervoor kiezen hier op dit moment alleen de lege template file te importeren, de stijl volgt later in de stap "CSS component".

### Documenteer de React component in Storybook

In de stap "📝 Stories en specs" zijn lege stories voor de component klaargezet. Zorg nu dat de component in deze stories gebruikt wordt en vul waar nodig aan.

- Zorg dat er tenminste een "Default" story beschikbaar is in `/packages/storybook`
- Zorg dat de `Argstable` met controls de API van de component documenteert
- Zorg dat alle varianten als story beschikbaar zijn in `/packages/storybook` en `/packages/storybook-test`
- Zorg dat alle states als story beschikbaar zijn in `/packages/storybook-test`
- Zorg dat alle testcases voor gebruik als story beschikbaar zijn in `/packages/storybook-test`
- Zorg dat alle testcases voor toegankelijkheid als story beschikbaar zijn in `/packages/storybook-test`
- Zorg dat er genoeg stories zijn om alle design token beslissingen te zien in `/packages/storybook-test`

### Test de component met unit tests

In de stap "📝 Stories en specs" zijn lege tests voor de component klaargezet. Zorg nu dat de tests geimplementeerd worden en vul waar nodig aan.

- Zorg dat er unit tests zijn voor de alle APIs van de component
- Zorg dat er unit tests zijn voor de semantiek van de component
- Zorg dat er waar mogelijk unit tests zijn voor de testcases voor toegankelijkheid
- Zorg dat er waar mogelijk unit tests zijn voor de testcases voor gebruik

### Laat de component reviewen

Nu komt alles wat we in de voorbereidingsfase hebben bedacht samen. Controleer samen met de Design System Lead of alle testcases beschikbaar zijn en de component klaar staat voor publicatie.

🚩 Checkpoint
🛠️ React component
