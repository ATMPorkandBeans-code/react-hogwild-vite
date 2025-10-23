import { useEffect, useState, React } from "react";
import Nav from "./Nav";
import HogList from "./hogList";
import HogForm from "./hogForm";
import hogs from "../porkers_data";

function App() {
  const [sort, setSort] = useState("name");
  const [editHogs, setEdit] = useState(hogs);

  function addHog(newHog) {
    setEdit((prevItems) => [...prevItems, newHog]);

    console.log(editHogs);
  }

  useEffect(() => {
    console.log("Updated array:", editHogs);
  }, [editHogs]);

  if (sort === "name") {
    editHogs.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
  if (sort === "weight") {
    editHogs.sort((a, b) => a.weight - b.weight);
  }

  return (
    <div className="App">
      <Nav />
      <HogForm addHog={addHog} />
      <h1>Hog List</h1>
      <label htmlFor="my-dropdown">Sort by: </label>
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="name">Name (A-Z)</option>
        <option value="weight">Weight(Low to High)</option>
      </select>
      <HogList hogs={editHogs} />
    </div>
  );
}

export default App;
