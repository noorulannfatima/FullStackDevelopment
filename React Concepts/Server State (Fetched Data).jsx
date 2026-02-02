import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function UsersList() {
  const { data, isLoading, error } = useQuery(
    ["users"], // queryKey
    () => axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res => res.data),
    {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: true,
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching users</p>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersList;
