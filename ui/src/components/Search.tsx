import { LuSearch } from "react-icons/lu"

export interface SearchProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

/**
 * Search component renders a styled input for searching bands.
 * @param {SearchProps} props
 * @returns {JSX.Element}
 */
const Search = ({ searchValue, onSearchChange }: SearchProps) => {
  return (
    <div className="relative px-2 text-[var(--color)]">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <LuSearch />
      </div>
      <input
        className="bg-[var(--bg-color)] block w-full lg:w-52 rounded-sm lg:rounded-[18px] border-0 py-1.5 pl-10 placeholder:text-[var(--color)] placeholder focus:ring-2 focus:ring-inset focus:ring-[var(--lyric-green)] sm:text-sm sm:leading-6"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  )
}

export default Search;