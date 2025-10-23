import { useState, React } from "react";
import HogCard from "./hogCard";
import styles from "../styles/hogList.module.css";

function HogList({ hogs }) {
  const [displayGreased, setDisplayGreased] = useState(false);

  function handleGreasedClick() {
    setDisplayGreased((previousState) => !previousState);
  }

  const hogsToDisplay = hogs.filter((hog) => {
    if (!displayGreased) return true;

    return hog.greased;
  });

  return (
    <div>
      <input
        type="checkbox"
        id="greased-Checkbox"
        onClick={handleGreasedClick}
      ></input>
      <label for="greased-hog-display">Greased Pigs Only?</label>
      <div className={styles.hogList}>
        {hogsToDisplay.map((hog) => (
          <HogCard hog={hog} />
        ))}
      </div>
    </div>
  );
}

export default HogList;
