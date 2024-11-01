import { describe, it } from '@jest/globals';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import type { HeadingAppearance } from './heading';
import { Heading, headingLevels } from './heading';

const extraClassName = 'extra-classname';
const testId = 'rich-text';

headingLevels.forEach((level) => {
  describe(`At heading level ${level}`, () => {
    it('renders an element with role "heading"', () => {
      render(<Heading level={level} />);
      const heading = screen.getByRole('heading');

      expect(heading).toBeInTheDocument();
    });

    it(`renders a heading at level ${level}`, () => {
      render(<Heading level={level} />);
      const heading = screen.getByRole('heading', { level });

      expect(heading).toBeInTheDocument();
    });

    it(`renders an HTML h${level} element`, () => {
      const { container } = render(<Heading level={level} />);
      const heading = container.querySelector(`h${level}:only-child`);

      expect(heading).toBeInTheDocument();
    });

    it('renders an element with class name "nl-heading"', () => {
      const { container } = render(<Heading level={level} />);
      const heading = container.querySelector(`h${level}:only-child`);

      expect(heading).toHaveClass('nl-heading');
    });

    it(`renders an element with class names "nl-heading" and "nl-heading--level-${level}"`, () => {
      const { container } = render(<Heading level={level} />);
      const heading = container.querySelector(`h${level}:only-child`);

      expect(heading).toHaveClass('nl-heading', `nl-heading--level-${level}`);
    });

    it(`renders an element with role "heading" and name "Heading ${level}"`, () => {
      const name = `Heading ${level}`;
      render(<Heading level={level}>{name}</Heading>);
      const heading = screen.getByRole('heading', { name });

      expect(heading).toBeInTheDocument();
    });

    headingLevels.forEach((appearanceLevel) => {
      it(`renders an HTML h${level} element with class names "nl-heading" and "nl-heading--level-${appearanceLevel}"`, () => {
        const appearance = `level-${appearanceLevel}` as HeadingAppearance;
        render(<Heading level={level} appearance={appearance} />);
        const heading = screen.getByRole('heading', { level });

        expect(heading).toHaveClass('nl-heading', `nl-heading--level-${appearanceLevel}`);
      });
    });

    it(`supports hiding the HTML h${level} element visually and from the accessibility tree using the global HTML attribute "hidden"`, () => {
      expect.assertions(2);
      render(<Heading level={level} hidden />);
      const heading = screen.getByRole('heading', { level, hidden: true });

      try {
        screen.getByRole('heading', { level });
      } catch (e) {
        expect(e).toBeDefined();
      }
      expect(heading).not.toBeVisible();
    });

    it(`renders an HTML h${level} element with an extra class name "${extraClassName}"`, () => {
      render(<Heading level={level} className={extraClassName} />);
      const heading = screen.getByRole('heading');

      expect(heading).toHaveClass('nl-heading', `nl-heading--level-${level}`, extraClassName);
    });

    it('forwards React refs to the HTMLHeading heading element', () => {
      const ref = createRef<HTMLHeadingElement>();
      const { container } = render(<Heading level={level} ref={ref} />);
      const heading = container.querySelector(':only-child');

      expect(ref.current).toBe(heading);
      expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
    });

    it('renders rich text content', () => {
      render(
        <Heading level={level}>
          <strong data-testid={testId}>strong</strong>
        </Heading>,
      );
      const heading = screen.getByRole('heading', { level });
      const richText = screen.getByTestId(testId);

      expect(heading).toContainElement(richText);
    });
  });
});
