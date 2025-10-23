import { useState, React } from "react";

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
    setNewHog({name: "",
    specialty: "",
    weight: "",
    greased: false,
    "highest medal achieved": "",})
  }

  return (
    <div>
      <p>HogForm</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newHog.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Specialty:
          <input
            type="text"
            name="specialty"
            value={newHog.specialty}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Weight:
          <input
            type="text"
            name="weight"
            value={newHog.weight}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Greased?
          <input
            type="checkbox"
            name="greased"
            value={newHog.greased}
            onChange={handleCheckbox}
          />
        </label>
        <label>
          Highest Medal Achieved:
          <input
            type="text"
            name="highest medal achieved"
            value={newHog["highest medal achieved"]}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add Pig</button>
      </form>
    </div>
  );
}

export default HogForm;
