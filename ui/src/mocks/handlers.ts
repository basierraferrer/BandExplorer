import { http, HttpResponse } from 'msw'

const mockBands = [
  {
    id: '001',
    band_name: 'The Velvet Echo',
    album: 'Whispers in the Wind',
    genre: 'rock',
    description: 'A band description',
  },
  {
    id: '002',
    band_name: 'Silver Strings',
    album: 'Resonance',
    genre: 'country',
    description: 'Country band',
  },
  {
    id: '003',
    band_name: 'Crimson Groove',
    album: 'Scarlet Rhythms',
    genre: 'pop',
    description: 'Pop band',
  },
];

export const handlers = [
  // List of bands
  http.get(`${import.meta.env.VITE_SERVER_URL}/mocks/bands`, () => {
    return HttpResponse.json(mockBands);
  }),
  // Individual band details
  http.get<{id:string}>(`${import.meta.env.VITE_SERVER_URL}/mocks/:id`, ({params}) => {
    const { id } = params;
    const band = mockBands.find(b => b.id === id);
    return HttpResponse.json(band || {});
  }),
];