import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';
import { describe, it, expect, vi } from 'vitest';

describe('Search', () => {
  it('renders the input with the provided value', () => {
    render(<Search searchValue="rock" onSearchChange={() => { }} />);
    const input = screen.getByPlaceholderText('Search');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('rock');
  });

  it('calls onSearchChange when the input value changes', () => {
    const handleChange = vi.fn();
    render(<Search searchValue="" onSearchChange={handleChange} />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'pop' } });
    expect(handleChange).toHaveBeenCalledWith('pop');
  });
}); 