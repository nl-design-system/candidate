<!-- @license CC0-1.0 -->

# Storybook Non-conforming

De ontwikkelomgeving van [deze Storybook](http://localhost:6008) luistert op poort `6008`.

## Voorwaarden

De onderstaande commando's moeten worden uitgevoerd in de root van de repository.

1. Afhankelijkheden installeren

   ```shell
   pnpm install
   ```

1. Componenten bouwen

   ```shell
   pnpm run build
   ```

## Storybook starten

Storybook starten kan op twee manieren. Het maakt niet uit welke manier je gebruikt.

### Manier 1: Naar de juiste map gaan en Storybook starten

Het onderstaande commando moet worden uitgevoerd in de root van de repository.

1. Ga naar de Storybook map.

   ```shell
   cd packages/storybook-non-conforming
   ```

1. Start Storybook met pnpm.

   ```shell
   pnpm run storybook
   ```

### Manier 2: Storybook rechtstreeks starten met pnpm

Het maakt niet uit in welke map van de repository het onderstaande commando wordt uitgevoerd.

```shell
pnpm --filter @nl-design-system-candidate/storybook-non-conforming run storybook
```
