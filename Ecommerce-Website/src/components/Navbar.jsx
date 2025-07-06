import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Link } from "react-router";

const Navbar = () => {
  const [searchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get("text") || "");
  let navigate = useNavigate();

  const handleSearch = () => {
    navigate(`search?text=${searchText}`);
  };
  return (
    <nav className="flex px-6 py-4 justify-between bg-gray-400 items-center">
      <Link to="/" className="text-lg font-semibold">My App</Link>
      <div className="flex items-center">
        <input
          value={searchText}
          className="px-2 py-1 border border-amber-800 rounded-lg mr-2"
          placeholder="Search..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={handleSearch}
          className="px-2 py-1 border border-amber-800 rounded-lg bg-amber-700 text-white"
        >
          Search
        </button>
      </div>
      <div className="h-10 w-10 bg-amber-700 rounded-full"></div>
    </nav>
  );
};

export { Navbar };
