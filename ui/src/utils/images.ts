/**
 * Returns the URL for a band's image based on its ID.
 * @param {string} id - The band ID.
 * @returns {string} The image URL.
 */
export const getImageURL= (id:string)=>{
  return new URL(`../assets/sources/im${id}.png`,import.meta.url).href;
}