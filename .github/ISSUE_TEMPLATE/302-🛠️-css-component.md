---
name: Kernteam - 🛠️ CSS component
about: CSS component is ontwikkeld, wordt beschikbaar gemaakt in de React component en wordt gebruikt in de Storybook en testbestanden
title: '{component-name} - 🛠️ CSS component'
labels:
  - 🛠️ Candidate Ontwikkelfase
  - frontend
---

## 🛠️ CSS component

Vaak wordt deze stap samen met de React component stap uitgevoerd, omdat de component anders niet zichtbaar is in Storybook.

- [ ] Maak de CSS component beschikbaar
- [ ] Documenteer de CSS component in Storybook
- [ ] Maak waar mogelijk de HTML component beschikbaar
- [ ] Laat de component reviewen
- [ ] Zet de checkpoint in het GitHub projectbord op de juiste status

### Maak de CSS component beschikbaar

Alle CSS wordt gemaakt met `@mixins` en beschikbaar gemaakt in css BEM class names.

- Zorg dat er een omgeving klaarstaat voor de component in `/packages/components-css`. In deze map staan `src/{component}.scss` en `src/_mixin.scss`.

- Zorg dat de CSS de structuur van de (React) component uit de stap ‘React component is ontwikkeld’.
- Zorg dat de CSS BEM gebruikt voor classnames.
- Zorg dat de implementatie van CSS geschreven is als SCSS mixin.
- Zorg dat de implementatie zoveel mogelijk gebruik maakt van de bestaande community componenten, zodat oplossingen die daar door bugs in gebruik zijn toegevoegd voor volgordelijkheid van states, responsiveness etc. gelijk meegenomen worden.
- Zorg dat de mixins design tokens gebruiken zoals deze bepaald zijn in de tokens.json file
- Zorg dat eventuele interne design tokens beginnen met `_` en zet deze niet in de tokens.json file
- Zorg voor een meaningful fallback voor design tokens wanneer deze niet zijn ingevuld
- Zorg waar mogelijk voor hardening van de component door eventuele extra css resets toe te passen
- Zorg dat de mixins worden gebruikt in de CSS
- Zorg dat de css samen met de React component wordt geexporteerd in `packages/components-react/{component}/src/css.tsx`

### Documenteer de CSS component in Storybook

In de stap "📝 Stories en specs" zijn lege stories voor de component klaargezet. Zorg nu dat de component in deze stories gebruikt wordt en vul waar nodig aan.

- Zorg dat er tenminste een "Default" Story beschikbaar is in `/packages/storybook/{component}.css.stories.tsx`
- Zorg dat alle varianten als Story beschikbaar zijn in `/packages/storybook/{component}.css.stories.tsx`
- Zorg dat alle variaties voor gebruik, bijvoorbeeld `<link role="button class="nl-button">` voor de `nl-button` component als Story beschikbaar zijn

### Maak waar mogelijk de HTML component beschikbaar

Is er voor de component een equivalent in html? Zoals bijvoorbeeld `<button>` voor `.nl-button`, `<a>` voor `.nl-link` en `<mark>` voor `.nl-mark`, dan maken we ook een HTML component beschikbaar die direct de html elementen target zonder `class` of `id` selectors.

Heeft de component geen browser equivalent? Sla deze stap dan over.
Heeft de component wel zo'n browser equivalent? Maak dan de `src/html/{component}.scss` en `src/html/_mixin.scss` bestanden beschikbaar.

- Zorg dat voor alle css waarvoor een native selector bestaat een `@mixin` beschikbaar word gemaakt.
- Zorg dat voor dat de native selector in de `{component}.scss` gebruik maakt van de juiste mixin.
- Zorg dat de voor elke HTML selector een Story beschikbaar word gemaakt in `storybook-test/stories/{component}.html.stories.tsx` met render functies in `storybook-test/stories/{component}.html.tsx`.

### Laat de component reviewen

Nu komt alles wat we in de voorbereidingsfase hebben bedacht samen. Controleer samen met de Design System Lead of alle testcases beschikbaar zijn en de component klaar staat voor publicatie.

🚩 Checkpoint
🛠️ CSS component
