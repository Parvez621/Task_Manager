import { FaSearch } from "react-icons/fa";

function SearchBar({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="relative">
      <FaSearch
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-slate-500
        "
      />

      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        className="
          w-full

          bg-slate-800
          border
          border-slate-700

          rounded-2xl

          pl-12
          pr-4
          py-3

          text-white

          placeholder:text-slate-500

          transition-all
          duration-200

          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
        "
      />
    </div>
  );
}

export default SearchBar;