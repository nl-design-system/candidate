<!-- @license CC0-1.0 -->

Lees meer over [Versionering: Hoe beheer je pakketversies?][1] en [SemVer: Major, Minor of Patch?][2].

## Changeset sjabloon

Kopieer en plak het onderstaande sjabloon. Je kunt hiervoor de kopieer knop in het template gebruiken.

```markdown
---
'@nl-design-system-candidate/<package-name>': major
---

Beschrijving
```

Vul tussen de twee sets `---` in voor welke packages je allemaal veranderingen hebt doorgevoerd. Zet elk package tussen
dubbele aanhalingstekens op een nieuwe regel.

Gebruik:

- `"@nl-design-system-candidate/<package-name>": major` voor breaking changes
- `"@nl-design-system-candidate/<package-name>": minor` voor nieuwe features
- `"@nl-design-system-candidate/<package-name>": patch` voor bug fixes

Beschrijf na de tweede set `---` welke veranderingen je hebt doorgevoerd.

Geef bij breaking changes aan **wat** er veranderd is, **waarom** de verandering nodig was en **hoe** gebruikers van het
package hun code moeten aanpassen.

Je kunt een changeset ook maken op de command line, dat doe je zo:

```sh
pnpm run changeset
```

Dit opent een interactieve prompt waarin je de wijzigingen kunt specificeren.

### Lege changeset

Soms is het nodig om een lege changeset toe te voegen. Kopieer daarvoor het volgende sjabloon.

```markdown
---
---
```

Of voer het volgende commando uit op de command line:

```sh
pnpm run changeset:empty
```

[1]: http://nldesignsystem.nl/handboek/developer/changesets
[2]: http://nldesignsystem.nl/handboek/developer/changes
