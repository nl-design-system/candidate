import type { Meta, StoryObj } from '@storybook/react-vite';
import '../../components-css/button-css/src/button.scss';
import packageJSON from '../../components-react/button-react/package.json';
import { Button } from '../../components-react/button-react/src/button';

const meta = {
  args: { label: 'Klik mij!' },
  parameters: {
    externalLinks: [
      {
        name: 'Open op NL Design System',
        url: 'https://nldesignsystem.nl/button',
      },
      {
        name: 'Open op GitHub',
        url: packageJSON.homepage,
      },
    ],
  },
  component: Button,
  title: 'Componenten/Button/attributen',
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AriaLabel: Story = {
  args: {
    'aria-label': 'Klik mij via aria-label',
  },
  parameters: {
    docs: {
      description: {
        story: 'De toegankelijke naam van de button is `Klik mij via aria-label` inplaats van `Klik mij!`',
      },
    },
  },
};

export const AriaLabelledBy: Story = {
  render: (props) => (
    <>
      <p id="label">button label</p>
      <Button {...props} aria-labelledby="label" />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'De toegankelijke naam van de button is `button label` inplaats van `Klik mij!`',
      },
    },
  },
};

export const AriaDisabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'De button is disabled via `aria-disabled`',
      },
    },
  },
};

export const HtmlDisabled: Story = {
  args: {
    htmlDisabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'De button is disabled via `disabled`',
      },
    },
  },
};

export const Name: Story = {
  args: {
    name: 'button name',
    // eslint-disable-next-line
    onClick: (event) => alert('Name: ' + event.target.name),
  },
  parameters: {
    docs: {
      description: {
        story: 'Als er op de button geklikt wordt toont er een popup die de `name` weergeeft (`button name`)',
      },
    },
  },
};

export const Value: Story = {
  args: {
    value: 'button value',
    // eslint-disable-next-line
    onClick: (event) => alert('Name: ' + event.target.value),
  },
  parameters: {
    docs: {
      description: {
        story: 'Als er op de button geklikt wordt toont er een popup die de `value` weergeeft (`button value`)',
      },
    },
  },
};

export const Autofocus: Story = {
  args: {
    autoFocus: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Deze button krijgt automatisch focus, best te zien in de story pagina',
      },
    },
  },
};

export const CommandFor: Story = {
  render: () => (
    <>
      <dialog id="dialog">
        Sluit mij <Button label="Sluiten" command="close" commandfor="dialog" />
      </dialog>
      <Button label="Open dialog" command="show-modal" commandfor="dialog" />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Deze button opent een modal via de `command` en `commandfor` attributes',
      },
    },
  },
};

export const Dir: Story = {
  args: {
    dir: 'rtl',
  },
  parameters: {
    docs: {
      description: {
        story: 'Deze heeft een `dir="rtl"` attribute. Het uitroepteken staat daardoor voor de tekst',
      },
    },
  },
};

export const Form: Story = {
  args: {
    type: 'submit',
    form: 'theform',
    formAction: 'http://localhost:3000',
    formEncType: 'text/plain',
    formNoValidate: true,
  },
  render: (props) => (
    <>
      <form id="theform">
        <input name="with-value" value="the value #" required />
        <input name="without-value" required />
      </form>
      <Button {...props} />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'De form word gesubmit door de button, zonder validatie. Als action wordt localhost:3000 geopend.',
      },
    },
  },
};

export const Lang: Story = {
  args: {
    lang: 'fr',
    label: 'Cliquez ici',
  },
  parameters: {
    docs: {
      description: {
        story: 'De `lang="fr"` attribute zorgt voor een franse uitspraak in een screenreader',
      },
    },
  },
};

export const Tabindex: Story = {
  args: {
    tabIndex: -1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Deze button is niet focusbaar omdat er een `tabindex="-1"` gebruikt is',
      },
    },
  },
};
