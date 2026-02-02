import React from "react";
import { useSearchParams } from "react-router-dom";

function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "all";

  const setFilter = (value) => setSearchParams({ filter: value });

  return (
    <div>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <p>Current filter from URL: {filter}</p>
    </div>
  );
}

export default ProductsPage;
