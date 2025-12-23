<!-- @license CC0-1.0 -->

# Candidate

## Aan de slag als developer

Voorbereiding:

1. (Optioneel) Installeer [Node Version Manager "`nvm`"](https://github.com/nvm-sh/nvm), als je die ook wilt gebruiken om makkelijk de goede Node.js versie te gebruiken.
2. [Installeer `pnpm`](https://pnpm.io/installation), hiermee installeer je de dependencies van dit project.
3. Installeer de juiste Node.js versie, die is vastgelegd in `.nvmrc`. Als je in stap 1 "`nvm`" heb geïnstalleerd voer je dit uit in de terminal: `nvm install`, en dan `nvm use`. Zo niet dan [download](https://nodejs.org/) je Node.js en volg je de installatie-instructies.
4. Installeer alle dependencies met `pnpm install`.
5. Verwijder voor de zekerheid alle oude bestanden met `pnpm run clean`.
6. Maak het project klaar om op te starten met `pnpm run build`.

## Stories voor test-scenario's bijdragen

Er zijn twee Storybook applicaties in dit project. Voor een volledige verzamling van test-scenario's gebruiken we "Storybook Test".

Start Storybook met `pnpm run storybook-test`.

Je kunt de code voor stories vinden in de map [`packages/storybook-test/stories/`](packages/storybook-test/stories), daar kun je uitbreidingen doen.

## Release van nieuwe Candidate componenten

1. De GitHub Action om packages te publiceren moet tijdelijk toegang krijgen om een nieuwe package te publiceren. Een administrator moet op npmjs.com een "read and write" token aanmaken met de scope `@nl-design-system-candidate`. De token expiry moet ingesteld zijn op maximaal 1 dag.
1. Ga dan naar de [Environments Settings van deze repository](https://github.com/nl-design-system/candidate/settings/environments). Ga dan de "Publish" environment. Klik op "Add environment secret". Maak daar een `NPM_TOKEN` aan, en stel de token in die zojuist is aangemaakt.
1. Maak een changeset om de nieuwe package te publiceren. Gebruik `pnpm changeset` in de terminal om de wizard te starten.

   ```log
   🦋  Which packages would you like to include? … my-component
     ◉ @nl-design-system-candidate/my-component-css
     ◉ @nl-design-system-candidate/my-component-react
     ◉ @nl-design-system-candidate/my-component-docs
     ◉ @nl-design-system-candidate/my-component-tokens

   🦋  Which packages should have a major bump? …
   ◉ all packages
     ◉ @nl-design-system-candidate/my-component-css@0.0.1
     ◉ @nl-design-system-candidate/my-component-react@0.0.1
     ◉ @nl-design-system-candidate/my-component-docs@0.2.0
     ◉ @nl-design-system-candidate/my-component-tokens@0.0.0

   🦋  WARNING: Releasing a major version for @nl-design-system-candidate/button-css will be its first major release.
   🦋  If you are unsure if this is correct, contact the package's maintainers before committing this changeset.
   🦋  Are you sure you want to release the first major version of @nl-design-system-candidate/button-css? (Y/n) › true

   🦋  WARNING: Releasing a major version for @nl-design-system-candidate/my-component-css will be its first major release.
   🦋  If you are unsure if this is correct, contact the package's maintainers before committing this changeset.
   🦋  Are you sure you want to release the first major version of @nl-design-system-candidate/my-component-css? (Y/n) · true
   🦋  WARNING: Releasing a major version for @nl-design-system-candidate/my-component-react will be its first major release.
   🦋  If you are unsure if this is correct, contact the package's maintainers before committing this changeset.
   🦋  Are you sure you want to release the first major version of @nl-design-system-candidate/my-component-react? (Y/n) · true
   🦋  WARNING: Releasing a major version for @nl-design-system-candidate/my-component-docs will be its first major release.
   🦋  If you are unsure if this is correct, contact the package's maintainers before committing this changeset.
   🦋  Are you sure you want to release the first major version of @nl-design-system-candidate/my-component-docs? (Y/n) · true
   🦋  WARNING: Releasing a major version for @nl-design-system-candidate/my-component-tokens will be its first major release.
   🦋  If you are unsure if this is correct, contact the package's maintainers before committing this changeset.
   🦋  Are you sure you want to release the first major version of @nl-design-system-candidate/my-component-tokens? (Y/n) · true

   🦋  Please enter a summary for this change (this will be in the changelogs).
   🦋    (submit empty line to open external editor)
   🦋  Summary › Initial release as NL Design System Candidate component.
   ```

1. Verwijder `"private": true,` uit de `package.json` van deze component.
1. Maak een Pull Request met deze changes.
1. Vraag om een review en merge de Pull Request.
1. Wacht tot automatisch een Pull Request wordt aangemaakt met de nieuwe release: `docs(release): design system packages`. Het kan zijn dat deze Pull Request al bestaat door andere changes. Wacht dan tot de changelog van jouw component erin is opgenomen.
1. Review deze PR zelf, en merge de Pull Request.
1. Houd de GitHub Action workflows in de gaten bij de `main` branch. Als het proces klaar is, controleer dan de logs van `publish-npm` of alles goed is gegaan. Als het goed is staat in de logs dat de npm packages succesvol zijn gepubliceerd met versie 1.0.0.
1. Ga naar de pagina's van de volgende npm packages. Vervang "my-component" door de naam van jouw component.
   - `https://npmjs.com/package/@nl-design-system/my-component-css`
   - `https://npmjs.com/package/@nl-design-system/my-component-docs`
   - `https://npmjs.com/package/@nl-design-system/my-component-react`
   - `https://npmjs.com/package/@nl-design-system/my-component-tokens`

1. Als alle npm packages succesvol zijn gepubliceerd, dan is de `NPM_TOKEN` niet meer nodig. Ga weer naar de Environment Settings en verwijder de `NPM_TOKEN`.
1. Een administrator kan de volgende stap doen: ga op npmjs.com naar de Settings van elke npm package. Doe de volgende instellingen:
   - Stel OpenID Connect in
     - Publisher: GitHub Actions
     - Organisation: `nl-design-system`
     - Repository: `candidate`
     - Workflow filename: `publish.yml`
     - Environment name: `publish`
   - Publishing Access:
     - Requiring an additional authentication method adds another level of security for your package: "Require two-factor authentication and disallow tokens (recommended)"
     - Klik op "Update Package Settings" om op te slaan.
