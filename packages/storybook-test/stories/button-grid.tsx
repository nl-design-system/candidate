import { Button, HINTS, PURPOSES } from '@nl-design-system-candidate/button-react';
import type { ButtonHint, ButtonProps, ButtonPurpose } from '@nl-design-system-candidate/button-react';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import clsx from 'clsx';

/**
 * This component is a temporary component. To use for demo purposes only
 */

export type ButtonGridState = undefined | 'hover' | 'active' | 'focus-visible';

const VARIANTS: ButtonProps[] = [
  {
    label: 'Example',
  },
  {
    label: 'Previous Page',
    iconStart: <IconArrowLeft />,
  },
  {
    label: 'Next Page',
    iconEnd: <IconArrowRight />,
  },
  {
    lang: 'ar',
    dir: 'rtl',
    label: 'الصفحة السابقة',
    iconStart: <IconArrowRight />,
  },
  {
    lang: 'ar',
    dir: 'rtl',
    label: 'الصفحة السابقة',
  },
  {
    lang: 'zh-CN',
    label: '下一页',
  },
];

const axes = {
  purpose: [undefined, ...PURPOSES] as (undefined | ButtonPurpose)[],
  hint: [undefined, ...HINTS] as (undefined | ButtonHint)[],
  disabled: [false, true],
  pressed: [false, true],
  state: [undefined, 'hover', 'active', 'focus-visible'] as ButtonGridState[],
  // type: ['button', 'a', 'div', 'input[type=button]', 'input[type=submit]', 'input[type=reset]'],
  type: ['button'],
};

interface ButtonGridRow {
  purpose: undefined | ButtonPurpose;
  hint: undefined | ButtonHint;
  disabled: boolean;
  pressed: boolean;
  state: ButtonGridState;
  type: string;
}

const AXIS_ENTRIES = Object.entries(axes) as [keyof ButtonGridRow, unknown[]][];

const ROWS = AXIS_ENTRIES.reduce<Partial<ButtonGridRow>[]>(
  (rows, [key, values]) => rows.flatMap((row) => values.map((value) => ({ ...row, [key]: value }))),
  [{}],
).filter((row): row is ButtonGridRow => !(row.hint && !row.purpose));

export interface ButtonGridProps {
  args: ButtonProps;
  getClassName?: (state: ButtonGridState) => string | undefined;
}

const defaultGetClassName = (state: ButtonGridState) => (state ? `nl-button--${state}-test` : undefined);

export const ButtonGrid = ({ args, getClassName = defaultGetClassName }: ButtonGridProps) => (
  <table>
    <thead>
      <tr>
        {Object.keys(axes).map((axis) => (
          <th key={axis} scope="column">
            {axis}
          </th>
        ))}
        <th>example</th>
      </tr>
    </thead>
    <tbody>
      {ROWS.map((row) => (
        <tr key={Object.values(row).join('/')}>
          <td>{row.purpose}</td>
          <td>{row.hint}</td>
          <td>{String(row.disabled)}</td>
          <td>{String(row.pressed)}</td>
          <td>{row.state}</td>
          <td>{row.type}</td>
          <td>
            <div style={{ display: 'flex', alignItems: 'flex-start', columnGap: '4px' }}>
              {VARIANTS.map((variantArgs, index) => (
                <Button
                  key={index}
                  {...args}
                  {...variantArgs}
                  className={clsx(getClassName(row.state))}
                  purpose={row.purpose}
                  hint={row.hint}
                  disabled={row.disabled}
                  pressed={row.pressed}
                />
              ))}
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
