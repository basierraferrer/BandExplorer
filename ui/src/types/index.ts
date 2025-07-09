/**
 * Represents a music band with its main properties.
 * @typedef {Object} Band
 * @property {string} id - Unique identifier for the band.
 * @property {string} band_name - Name of the band.
 * @property {string} genre - Genre of the band.
 * @property {string} album - Album name.
 * @property {string} description - Description of the band.
 */
export type Band = {
  id: string;
  band_name: string;
  genre: string;
  album: string;
  description:string;
};