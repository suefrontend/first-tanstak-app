import Search from "./components/Search";
import { useQuery } from "@tanstack/react-query";
import UserList from "./components/UserList";
import axios from "axios";

async function fetchPosts() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log("res", res);
  return res.data;
}

function App() {
  const { data, error, isError, isLoading } = useQuery(["users"], fetchPosts);

  console.log("data", data);

  return (
    <div className="container">
      <Search />
      {data && <UserList usersData={data} />}
      {/* {data.map((users, id) => {
        return (
          <li className="container" key={id}>
            {users.name}
          </li>
        );
      })} */}
    </div>
  );
}

export default App;
