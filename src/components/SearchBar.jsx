import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCity } from "../redux/actions";
import styles from "./styles/SearchBar.module.css";

// Uso local state para el campo de búsqueda
// Utilizo useDispatch para enviar una action al reducer, que luego retornará un nuevo estado

export default function SearchBar() {
  let [value, setValue] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <form
      className={styles.searchBar}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(getCity(value));
        setValue("");
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e)}
        placeholder="Ciudad..."
      />
      <input type="submit" />
    </form>
  );
}
