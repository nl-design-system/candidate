import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { Paragraph } from './paragraph';

const text = 'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen.';
const extraClassName = 'extra-classname';
const testId = 'rich-text';

afterEach(() => {
  cleanup();
});

describe('Paragraph', () => {
  describe('default paragraph', () => {
    it('renders an element with role "paragraph"', () => {
      render(<Paragraph>{text}</Paragraph>);
      const paragraph = screen.getByRole('paragraph');

      expect(paragraph).toBeInTheDocument();
    });

    it('renders an HTML p element', () => {
      const { container } = render(<Paragraph>{text}</Paragraph>);
      const paragraph = container.querySelector('p:only-child');

      expect(paragraph).toBeInTheDocument();
    });

    it('renders a block level element', () => {
      render(<Paragraph>{text}</Paragraph>);
      const paragraph = screen.getByRole('paragraph');

      expect(paragraph).toHaveStyle({ display: 'block' });
    });

    it('renders a visible paragraph element', () => {
      render(<Paragraph>{text}</Paragraph>);
      const paragraph = screen.getByRole('paragraph');

      expect(paragraph).toBeVisible();
    });

    it(`supports hiding the HTML p element visually and from the accessibility tree using the global HTML attribute "hidden"`, ({
      expect,
    }) => {
      expect.assertions(2);
      render(<Paragraph hidden>{text}</Paragraph>);
      const paragraph = screen.getByRole('paragraph', { hidden: true });

      try {
        screen.getByRole('paragraph');
      } catch (e) {
        expect(e).toBeDefined();
      }
      expect(paragraph).not.toBeVisible();
    });

    it('by default renders an element with class name "nl-paragraph" and without class name "nl-paragraph--lead"', () => {
      render(<Paragraph>{text}</Paragraph>);
      const paragraph = screen.getByRole('paragraph');

      expect(paragraph).toHaveClass('nl-paragraph');
      expect(paragraph).not.toHaveClass('nl-paragraph--lead');
    });

    it(`renders an element with an extra class name "${extraClassName}"`, () => {
      render(<Paragraph className={extraClassName}>{text}</Paragraph>);
      const paragraph = screen.getByRole('paragraph');

      expect(paragraph).toHaveClass('nl-paragraph', extraClassName);
    });

    it(`renders an element with text "${text}"`, () => {
      render(<Paragraph>{text}</Paragraph>);
      const paragraph = screen.getByText(text);

      expect(paragraph).toBeInTheDocument();
    });

    it('forwards React refs to the HTMLParagraphElement', () => {
      const ref = createRef<HTMLParagraphElement>();
      render(<Paragraph ref={ref}>{text}</Paragraph>);
      const paragraph = screen.getByRole('paragraph');

      expect(ref.current).toBe(paragraph);
      expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
    });

    it('renders rich text content', () => {
      render(
        <Paragraph>
          <strong data-testid={testId}>{text}</strong>
        </Paragraph>,
      );
      const paragraph = screen.getByRole('paragraph');
      const richText = screen.getByTestId(testId);

      expect(paragraph).toContainElement(richText);
    });
  });
  describe('lead paragraph', () => {
    it('renders an element with role "paragraph"', () => {
      render(<Paragraph purpose="lead">{text}</Paragraph>);
      const paragraph = screen.getByRole('paragraph');

      expect(paragraph).toBeInTheDocument();
    });

    it('renders an HTML p element that contains an HTML b element', () => {
      const { container } = render(<Paragraph purpose="lead">{text}</Paragraph>);
      const paragraph = container.querySelector('p:only-child');
      const b = container.querySelector<HTMLElement>('b:only-child');

      expect(paragraph).toBeInTheDocument();
      expect(paragraph).toContainElement(b);
    });

    it('renders an HTML b element that contains the contents', () => {
      const { container } = render(
        <Paragraph purpose="lead">
          <span data-testid={testId}>{text}</span>
        </Paragraph>,
      );
      const b = container.querySelector('b');
      const contents = screen.getByTestId(testId);

      expect(b).toContainElement(contents);
    });

    it('renders a block level element', () => {
      render(<Paragraph purpose="lead">{text}</Paragraph>);
      const paragraph = screen.getByRole('paragraph');

      expect(paragraph).toHaveStyle({ display: 'block' });
    });

    it('renders a visible paragraph element', () => {
      render(<Paragraph purpose="lead">{text}</Paragraph>);
      const paragraph = screen.getByRole('paragraph');

      expect(paragraph).toBeVisible();
    });

    it(`supports hiding the HTML p element visually and from the accessibility tree using the global HTML attribute "hidden"`, ({
      expect,
    }) => {
      expect.assertions(2);
      render(
        <Paragraph purpose="lead" hidden>
          {text}
        </Paragraph>,
      );
      const paragraph = screen.getByRole('paragraph', { hidden: true });

      try {
        screen.getByRole('paragraph');
      } catch (e) {
        expect(e).toBeDefined();
      }
      expect(paragraph).not.toBeVisible();
    });

    it('renders an element with class names "nl-paragraph" and "nl-paragraph--lead"', () => {
      render(<Paragraph purpose="lead">{text}</Paragraph>);
      const paragraph = screen.getByRole('paragraph');

      expect(paragraph).toHaveClass('nl-paragraph', 'nl-paragraph--lead');
    });

    it(`renders an element with an extra class name "${extraClassName}"`, () => {
      render(
        <Paragraph purpose="lead" className={extraClassName}>
          {text}
        </Paragraph>,
      );
      const paragraph = screen.getByRole('paragraph');

      expect(paragraph).toHaveClass('nl-paragraph', 'nl-paragraph--lead', extraClassName);
    });

    it('renders an HTML b element with class name "nl-paragraph__lead"', () => {
      const { container } = render(<Paragraph purpose="lead">{text}</Paragraph>);
      const b = container.querySelector('b');

      expect(b).toHaveClass('nl-paragraph__lead');
    });

    it('renders an element with class names "nl-paragraph" and "nl-paragraph--lead" that contains an element with class name "nl-paragraph__lead"', () => {
      render(<Paragraph purpose="lead">{text}</Paragraph>);
      const paragraph = screen.getByRole('paragraph');
      const b = paragraph.querySelector<HTMLElement>(':only-child');

      expect(paragraph).toContainElement(b);
      expect(b).toHaveClass('nl-paragraph__lead');
    });

    it(`renders an element with text "${text}"`, () => {
      render(<Paragraph purpose="lead">{text}</Paragraph>);
      const paragraph = screen.getByText(text);

      expect(paragraph).toBeInTheDocument();
    });

    it('forwards React refs to the HTMLParagraphElement', () => {
      const ref = createRef<HTMLParagraphElement>();
      render(
        <Paragraph purpose="lead" ref={ref}>
          {text}
        </Paragraph>,
      );
      const paragraph = screen.getByRole('paragraph');

      expect(ref.current).toBe(paragraph);
      expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
    });

    it('renders rich text content', () => {
      render(
        <Paragraph purpose="lead">
          <strong data-testid={testId}>{text}</strong>
        </Paragraph>,
      );
      const paragraph = screen.getByRole('paragraph');
      const richText = screen.getByTestId(testId);

      expect(paragraph).toContainElement(richText);
    });
  });
});
