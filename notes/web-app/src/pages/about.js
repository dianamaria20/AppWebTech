import React, { useState } from "react";

function FormExample() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
    // send formData to the server or do something else with it here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <br />
	  <label>
        Date post:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </label>
      <br />
	  <label>
        Photo:
        <input
          type="image"
          name="photo"
          value={formData.photo}
          onChange={handleChange}
        />
      </label>
      <br />
	  <p><label for="w3review">Note:</label></p>
  <textarea id="note" name="note" rows="5" cols="30">Write your note!</textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormExample;
