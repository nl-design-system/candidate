<!-- @license CC0-1.0 -->

# Changesets: Wat je moet weten en hoe je ze gebruikt

Lees meer over [Changesets](https://github.com/changesets/changesets).

## Wat je moet weten

### Wanneer heb je een changeset nodig?

Een changeset is nodig voor elke wijziging die wordt gepubliceerd in een package, zoals:

- Bugfixes
- Nieuwe features
- Breaking changes

Er is **geen changeset nodig** voor wijzigingen die niet worden gepubliceerd, zoals documentatie-updates of aanpassingen in de build-configuratie.

Changesets genereren changelogs, die ontwikkelaars helpen te begrijpen welke wijzigingen zijn doorgevoerd. Houd dit einddoel in gedachten bij het schrijven van een changeset.

### Naamgeving van een changeset

De naamgeving van een changeset maakt niet uit en kan automatisch worden gegenereerd. Let er echter op dat de gegenereerde naam niet ongepast is.

### Semantische versie kiezen

Gebruik de volgende richtlijnen bij het kiezen van een versie:

- **`major`** → Voor breaking changes
- **`minor`** → Voor nieuwe features
- **`patch`** → Voor bugfixes

Bij breaking changes:

- Leg uit **wat** er is veranderd
- Motiveer **waarom** de wijziging nodig was
- Geef aan **hoe** gebruikers hun code moeten aanpassen

### Changesets publiceren

Na het mergen van je pull request maakt de Changeset Action automatisch een nieuwe pull request aan met de verzamelde changesets.

- Deze PR wordt steeds bijgewerkt met nieuwe changesets die naar `main` worden gemerged.
- Zorg ervoor dat je deze PR op het juiste moment merged om een nieuwe package-versie te publiceren.

### Lege changesets

Soms is een lege changeset nodig, bijvoorbeeld om een release af te dwingen zonder daadwerkelijke wijzigingen in de code.

## Hoe gebruik je changesets?

### Changesets genereren via een script

In `package.json` staat een script om changesets toe te voegen:

```json
"scripts": {
  "changeset": "changeset add"
}
```

Een nieuwe changeset maak je met:

```sh
pnpm run changeset
```

Dit opent een interactieve prompt waarin je de wijzigingen kunt specificeren.

Een lege changeset maak je met:

```sh
pnpm run changeset --empty
```

### Handmatig een changeset toevoegen

Maak een nieuw Markdown-bestand in de `.changeset`-map en plak het volgende sjabloon:

```markdown
---
'@nl-design-system-candidate/<package-name>': major
---

Beschrijving
```

- Voeg alle relevante packages toe tussen de eerste set `---`, elk op een nieuwe regel, tussen dubbele aanhalingstekens.
- Beschrijf na de tweede set `---` welke wijzigingen zijn doorgevoerd.

Voor een **lege changeset** gebruik je alleen:

```markdown
---
---
```

---
