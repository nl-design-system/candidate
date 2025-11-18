<!-- @license CC0-1.0 -->

# Button

## Installatie

Via npm

```shell
npm install @nl-design-system-candidate/button-react
```

Via pnpm

```shell
pnpm add @nl-design-system-candidate/button-react
```

Via yarn

```shell
yarn add @nl-design-system-candidate/button-react
```

## Usage

Als je het React component wilt gebruiken

```typescript
import { Button } from '@nl-design-system-candidate/button-react';
```

Als je het React component inclusief styles wilt gebruiken

```typescript
import { Button } from '@nl-design-system-candidate/button-react/css';
```

## Documentatie

Voor de volledige documentatie, zie [de storybook documentatie pagina](https://nl-design-system.github.io/candidate/?path=/docs/button--documentatie).

## Props

Dit zijn alle properties geïmplementeerd op de button. Naast deze properties
worden alle extra props die op de component geplaatst worden als attribuut op
het `button`-element gezet.

| Property       | Description                                                  | Type                                      | Default     |
| -------------- | ------------------------------------------------------------ | ----------------------------------------- | ----------- |
| `children`     | De label van de button                                       | `ReactNode`                               | `undefined` |
| `disabled`     | De button inactief maken                                     | `boolean`                                 | `undefined` |
| `hint`         | Een optionele hint over de uitkomst van de actie             | `"positive"` \| `"negative"`              | `undefined` |
| `htmlDisabled` | De button inactief maken met het native `disabled` attribuut | `boolean`                                 | `undefined` |
| `iconEnd`      | Het icoon voor het label                                     | `ReactNode`                               | `undefined` |
| `iconStart`    | Het icoon achter het label                                   | `ReactNode`                               | `undefined` |
| `label`        | De label van de button                                       | `ReactNode`                               | `undefined` |
| `pressed`      | Zorg voor een ingedrukte state van de button                 | `boolean`                                 | `undefined` |
| `purpose`      | Een optioneel doel van de button                             | `"primary"` \| `"seconday"` \| `"subtle"` | `undefined` |

### `disabled`

Om een button inactief te maken, kun je de `disabled` prop gebruiken. Dit zorgt
er voor dat het `aria-disabled="true"` attribuut op de button komt te staan.
Het native `disabled` attribuut wordt hier _niet_ gebruikt, omdat dat er voor
zorgt dat de button niet meer focusbaar is (ook niet met `tabindex="0"`).

Om er voor te zorgen dat de button ook niet meer reageert op clicks, zal de
`onClick` handler gebruikt moeten worden.

### `htmlDisabled`

Mocht je écht gebruik moeten maken van het `disabled` attribuut, dan kun je dat
met `htmlDisabled` doen. Let er op dat dit toegankelijkheids problemen met zich
mee brengt.
