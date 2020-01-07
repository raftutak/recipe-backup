import React from "react";

const Form = props => (
  <div>
    <section id="search">
      <h2>Wyszukiwarka</h2>
      <form className="search-form" onSubmit={props.getRecipe}>
        <input
          id="main-search"
          type="search"
          name="recipeName"
          placeholder="Wpisz szukaną frazę ..."
        />
        <button type="submit">Szukaj</button>
      </form>
      <br />
      <select>
        <option value="#">Kategoria 1</option>
        <option value="#">Kategoria 2</option>
        <option value="#">Kategoria 3</option>
        <option value="#">Kategoria 4</option>
        <option value="#">Kategoria 5</option>
      </select>
      <label>
        <input type="radio" value="test" />
        Test
      </label>
      <label>
        <input type="radio" value="test" />
        Test
      </label>
      <label>
        <input type="radio" value="test" />
        Test
      </label>
    </section>
  </div>
);

export default Form;
