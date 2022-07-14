import { useEffect, useState } from "react";
import { SearchBar } from "./Component/SearchBar";
import "./styles.css";
import countries from "./utils/countries";

export default function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query === "") {
      setSuggestions([]);
    } else {
      let newListOfSuggestions = countries
        .filter((item) =>
          item.country.toLowerCase().indexOf(query) !== -1 ? true : false
        )
        .map((item) => item.country);
      setSuggestions(newListOfSuggestions);
    }
    setTimeout(() => setLoading(false), 1000);
  }, [query]);

  return (
    <div className="App">
      <h1>Search Bar</h1>
      <div>Query is: {query}</div>
      <SearchBar
        loading={loading}
        setLoading={setLoading}
        suggestions={suggestions}
        onChange={(val) => setQuery(val)}
      />
    </div>
  );
}
