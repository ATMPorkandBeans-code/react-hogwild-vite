import { useEffect, useState, React } from "react";
import Nav from "./Nav";
import HogList from "./hogList";
import HogForm from "./hogForm";
import hogs from "../porkers_data";
import styles from "../styles/app.module.css";

function App() {
  const [sort, setSort] = useState("name");
  const [editHogs, setEdit] = useState(hogs);

  function addHog(newHog) {
    setEdit((prevItems) => [...prevItems, newHog]);

    console.log(editHogs);
  }

  function hideHog(hogToHide) {
    setEdit((prevItems) => prevItems.filter((h) => h.name !== hogToHide.name));
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
    <div className={styles.appContainer}>
      <Nav />
      <div className={styles.content}>
        <HogForm addHog={addHog} />
        <div className={styles.headerSection}>
          <h1>Hog List</h1>
          <div className={styles.sortSection}>
            <label htmlFor="my-dropdown">Sort by: </label>
            <select
              id="my-dropdown"
              onChange={(e) => setSort(e.target.value)}
              className={styles.sortDropdown}
            >
              <option value="name">Name (A-Z)</option>
              <option value="weight">Weight(Low to High)</option>
            </select>
          </div>
        </div>
        <HogList hogs={editHogs} hideHog={hideHog} />
      </div>
    </div>
  );
}

export default App;
