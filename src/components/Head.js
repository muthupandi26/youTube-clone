import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // make an api call after every key press
    // but if the difference between 2 API calls is < 200ms
    // decline the API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  {
    /**
     * key -i
     * - render the component
     * - useEffect();
     * start timer => make api call after 200ms
     *
     * key - ip
     * destroy the component (useEffect return method)
     * re-render the component
     * useEffect()
     * - start  timer => make api call after 200ms
     *
     *
     *
     *
     *
     *
     *
     *
     */
  }

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          className="h-8 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="hamburgerMenu"
          onClick={handleToggleMenu}
        />
        <img
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="youTube Image"
        />
      </div>
      <div className="col-span-10 ">
        <div>
          <input
            className="w-1/2  border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full">
            🔍
          </button>
        </div>
        <div className="fixed bg-white py-2 px-2 w-[29rem] shadow-lg rounded-lg">
          {showSuggestions && (
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="shadow-sm py-2 hover:bg-gray-100 ">
                  🔍 {s}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
