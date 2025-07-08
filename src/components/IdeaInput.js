import React, { useState } from "react";
import styles from "./IdeaInput.module.css";

export function IdeaInput({ onAdd }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setValue("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        placeholder="Enter your project idea…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className={styles.button}>
        Add Idea
      </button>
    </form>
  );
} 