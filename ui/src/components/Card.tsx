import defaultImg from '../assets/sources/default.png';
import type { Band } from "../types";
import { getImageURL } from "../utils/images";

const Card = ({ id, band_name, album, description }: Band) => (
  <article key={id} className="w-full h-auto rounded-[10px] overflow-hidden bg-[var(--bg-header)]">
    <img className="w-full" src={getImageURL(id)} alt={band_name} onError={(e) => {
      e.currentTarget.onerror = null;
      e.currentTarget.src = defaultImg;
    }} />

    <div className="p-5">
      <h3 className="text-lg font-semibold text-[var(--lyric-green)]">{band_name}</h3>
      <p className="text-gray-custom mb-2.5">{album}</p>
      <p className="text-gray-custom mb-2.5">{description}</p>
    </div>
  </article>
)

export default Card;