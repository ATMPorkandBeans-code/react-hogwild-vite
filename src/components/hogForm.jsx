import { useState, React } from "react";
import styles from "../styles/hogForm.module.css";

function HogForm({ addHog }) {
  const [newHog, setNewHog] = useState({
    name: "",
    specialty: "",
    weight: "",
    greased: false,
    "highest medal achieved": "",
  });

  function handleChange(event) {
    setNewHog({ ...newHog, [event.target.name]: event.target.value });
  }

  function handleCheckbox(event) {
    const { name, checked } = event.target;
    setNewHog((prevSettings) => ({
      ...prevSettings,
      [name]: checked,
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    addHog(newHog);
    setNewHog({
      name: "",
      specialty: "",
      weight: "",
      greased: false,
      "highest medal achieved": "",
    });
  }

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Add a New Hog</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name-input">Name:</label>
          <input
            id="name-input"
            type="text"
            name="name"
            value={newHog.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="specialty-input">Specialty:</label>
          <input
            id="specialty-input"
            type="text"
            name="specialty"
            value={newHog.specialty}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="weight-input">Weight:</label>
          <input
            id="weight-input"
            type="text"
            name="weight"
            value={newHog.weight}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroupCheckbox}>
          <label htmlFor="greased-input">Greased?</label>
          <input
            id="greased-input"
            type="checkbox"
            name="greased"
            checked={newHog.greased}
            onChange={handleCheckbox}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="medal-input">Highest Medal Achieved:</label>
          <input
            id="medal-input"
            type="text"
            name="highest medal achieved"
            value={newHog["highest medal achieved"]}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Add Hog
        </button>
      </form>
    </div>
  );
}

export default HogForm;
