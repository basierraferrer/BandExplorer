import { useMemo, useState } from "react";
import type { Band } from "../types";

export const useFilterBands = (bandsData:Band[])=>{
  const [filterSelected, setFilterSelected] = useState('all');
  const [searchValue, setSearchValue] = useState('');

  const changeFilter = (filter: string) => {
    setFilterSelected(filter)
  }

  const onSearchChange = (value:string)=>{
    setSearchValue(value);
  }

    // Filter bands based on search value and selected filter
    const filteredBands = useMemo(() => {
      let filtered = bandsData;
  
      // Filter by search value (band name, album, or genre)
      if (searchValue.trim()) {
        const searchLower = searchValue.toLowerCase();
        filtered = filtered.filter(band =>
          band.band_name.toLowerCase().includes(searchLower) ||
          band.album.toLowerCase().includes(searchLower) ||
          band.genre.toLowerCase().includes(searchLower)
        );
      }
  
      // Filter by selected genre
      if (filterSelected !== 'all') {
        const genreLower = filterSelected.toLowerCase();
        filtered = filtered.filter(band =>
          band.genre.toLowerCase() === genreLower
        );
      }
  
      return filtered;
    }, [bandsData, searchValue, filterSelected]);

    return {filteredBands, searchValue, changeFilter, filterSelected, onChangeSearch: onSearchChange}
}