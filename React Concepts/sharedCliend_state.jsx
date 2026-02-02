import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();
export function FilterProvider({ children }) {
  const [filter, setFilter] = useState("all"); // shared client state
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
export function FilterControls() {
  const { filter, setFilter } = useContext(FilterContext);
  return (
    <div>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <p>Current filter: {filter}</p>
    </div>
  );
}
