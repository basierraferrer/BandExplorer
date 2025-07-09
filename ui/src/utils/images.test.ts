import { getImageURL } from './images';
import { describe, it, expect } from 'vitest';

describe('getImageURL', () => {
  it('returns the correct image URL for a given band id', () => {
    const id = '001';
    const url = getImageURL(id);
    expect(url).toContain(`im${id}.png`);
  });
}); 