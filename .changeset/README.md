<!-- @license CC0-1.0 -->

# Changesets

Lees meer over [Versionering: Hoe beheer je pakketversies?](http://nldesignsystem.nl/handboek/developer/changesets) en [SemVer: Major, Minor of Patch?](http://nldesignsystem.nl/handboek/developer/changes).

## Changesets genereren via een script

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

## Handmatig een changeset toevoegen

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
