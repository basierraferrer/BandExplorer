import { useEffect, useMemo, useState } from "react";
import type { Band } from "../types";

export const useFetchBands = ()=>{
  const [bandsData, setBandsData] = useState<Band[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchBandInfo = async (bandId: string) => {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/mocks/${bandId}`);
      return await res.json();
    };
    const fetchData = async () => {
      const result = await fetch(`${import.meta.env.VITE_SERVER_URL}/mocks/bands`);

      if (result.ok) {
        const data = await result.json();
        const bandsInfo = await Promise.all(data.map(async (band: Band) => ({
          ...band,
          ...await fetchBandInfo(band.id)
        })))
        setBandsData(bandsInfo);
      }

      setIsLoading(false);
    }
    fetchData();
  }, []);

  const categories = useMemo(() => {
    const mapper = new Map<string, string>();
    if (bandsData.length) {
      mapper.set('all', 'all');
      bandsData.forEach(({ genre }) => mapper.set(genre, genre));
    }
    return Array.from(mapper.values());
  }, [bandsData])

  return { bandsData, isLoading, categories };
}