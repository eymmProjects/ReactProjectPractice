import React from "react";

export const AddTask = () => {
  return (
    <section className="addTask">
      <form action="">
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="add task"
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};