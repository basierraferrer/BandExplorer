import { render, screen } from '@testing-library/react';
import Logo from './Logo';
import { describe, it, expect } from 'vitest';

describe('Logo', () => {
  it('renders the logo image with correct alt text', () => {
    render(<Logo />);
    const img = screen.getByAltText('Main Lyric Logo');
    expect(img).toBeInTheDocument();
  });

  it('renders the MUSIC label', () => {
    render(<Logo />);
    expect(screen.getByText('MUSIC')).toBeInTheDocument();
  });
}); 