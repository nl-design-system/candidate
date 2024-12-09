<!-- @license CC0-1.0 -->

# Candidate

## Aan de slag als developer

Voorbereiding:

1. Installeer [Node Version Manager "`nvm`"](https://github.com/nvm-sh/nvm), als je die ook wilt gebruiken om makkelijk de goede Node.js versie te gebruiken.
2. [Installeer `pnpm`](https://pnpm.io/installation), hiermee installeer je de dependencies van dit project.
3. Installeer de juiste Node.js versie, die is vastgelegd in `.nvmrc`. Voer dit uit in de terminal: `nvm install`, en dan `nvm use`.
4. Installeer alle dependencies met `pnpm install`.
5. Verwijder voor de zekerheid alle oude bestanden met `pnpm run clean`.
6. Maak het project klaar om op te starten met `pnpm run build`.

## Stories voor test-scenario's bijdragen

Er zijn twee Storybook applicaties in dit project. Voor een volledige verzamling van test-scenario's gebruiken we "Storybook Test".

Start Storybook met `pnpm run storybook-test`

Je kunt de code voor stories vinden in de map [`packages/storybook-test/stories/`](packages/storybook-test/stories), daar kun je uitbreidingen doen.
