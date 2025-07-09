import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { describe, it, expect, vi, beforeEach } from 'vitest';


beforeEach(() => {
  vi.resetAllMocks();
});

describe('App', () => {
  it('renders the main layout and search bar', () => {
    render(<App />);
    expect(screen.getByText(/Welcome to Lyric Music/i)).toBeInTheDocument();
    expect(screen.getAllByPlaceholderText('Search')[0]).toBeInTheDocument();
  });

  it('loads and displays bands', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('The Velvet Echo')).toBeInTheDocument();
      expect(screen.getByText('Silver Strings')).toBeInTheDocument();
      expect(screen.getByText('Crimson Groove')).toBeInTheDocument();
    });
  });

  it('filters bands by genre/category when a category is selected', async () => {
    render(<App />);
    await waitFor(() => expect(screen.getByText('The Velvet Echo')).toBeInTheDocument());
    // Click on the 'pop' category button
    const popButton = screen.getAllByRole('button', { name: /pop/i })[0];
    fireEvent.click(popButton);
    await waitFor(() => {
      expect(screen.getByText('Crimson Groove')).toBeInTheDocument();
      expect(screen.queryByText('The Velvet Echo')).not.toBeInTheDocument();
      expect(screen.queryByText('Silver Strings')).not.toBeInTheDocument();
    });
  });

  it('filters bands by search input', async () => {
    render(<App />);
    await waitFor(() => expect(screen.getByText('The Velvet Echo')).toBeInTheDocument());
    const searchInput = screen.getAllByPlaceholderText('Search')[0];
    fireEvent.change(searchInput, { target: { value: 'Silver' } });
    await waitFor(() => {
      expect(screen.getByText('Silver Strings')).toBeInTheDocument();
      expect(screen.queryByText('The Velvet Echo')).not.toBeInTheDocument();
      expect(screen.queryByText('Crimson Groove')).not.toBeInTheDocument();
    });
  });

  it('filters bands by search input and selected category', async () => {
    render(<App />);
    await waitFor(() => expect(screen.getByText('The Velvet Echo')).toBeInTheDocument());
    // Select 'rock' category
    const rockButton = screen.getAllByRole('button', { name: /rock/i })[0];
    fireEvent.click(rockButton);
    // Now search for a band that is not in 'rock'
    const searchInput = screen.getAllByPlaceholderText('Search')[0];
    fireEvent.change(searchInput, { target: { value: 'Silver' } });
    await waitFor(() => {
      expect(screen.queryByText('Silver Strings')).not.toBeInTheDocument();
      expect(screen.queryByText('The Velvet Echo')).not.toBeInTheDocument();
      expect(screen.queryByText('Crimson Groove')).not.toBeInTheDocument();
    });
    // Now search for a band that is in 'rock'
    fireEvent.change(searchInput, { target: { value: 'Velvet' } });
    await waitFor(() => {
      expect(screen.getByText('The Velvet Echo')).toBeInTheDocument();
      expect(screen.queryByText('Silver Strings')).not.toBeInTheDocument();
      expect(screen.queryByText('Crimson Groove')).not.toBeInTheDocument();
    });
  });
}); 