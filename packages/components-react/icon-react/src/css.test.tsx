import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Icon } from './css';

const SvgIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"></svg>;

afterEach(() => {
  cleanup();
});

describe('Icon (css import)', () => {
  it('injects a <style> block into the document', () => {
    render(
      <Icon>
        <SvgIcon />
      </Icon>,
    );
    const style = global.document.querySelector('style');

    expect(style).toBeInTheDocument();
  });
});
