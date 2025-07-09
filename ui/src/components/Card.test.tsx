import { render, screen } from '@testing-library/react';
import Card from './Card';
import type { Band } from '../types';
import { describe, it, expect } from 'vitest';

const mockBand: Band = {
  id: '001',
  band_name: 'The Velvet Echo',
  album: 'Whispers in the Wind',
  genre: 'rock',
  description: 'A band description',
};

describe('Card', () => {
  it('renders the band name, album, and description', () => {
    render(<Card {...mockBand} />);
    expect(screen.getByText(/The Velvet Echo/)).toBeInTheDocument();
    expect(screen.getByText(/Whispers in the Wind/)).toBeInTheDocument();
    expect(screen.getByText(/A band description/)).toBeInTheDocument();
  });
}); 