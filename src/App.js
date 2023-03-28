import Search from "./components/Search";
import { useQuery } from "@tanstack/react-query";
import UserList from "./components/UserList";
import { useState } from "react";
import { fetchUsers } from "./api/userApi";

function App() {
  const { data, error, isError, isLoading } = useQuery(["users"], fetchUsers);

  const [term, setTerm] = useState("");

  const filteredUsers = data?.filter((user) => {
    if (term !== "") {
      return (
        user.name.first.toLowerCase().includes(term.toLocaleLowerCase()) ||
        user.name.last.toLowerCase().includes(term.toLowerCase())
      );
    }
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center py-8">
        My First Tanstak Query App - User Name Filter
      </h1>
      <Search term={term} setTerm={setTerm} />
      <UserList
        usersData={
          !filteredUsers || (filteredUsers.length === 0 && term === "")
            ? data
            : filteredUsers
        }
      />
    </div>
  );
}

export default App;
