import UserItem from "./UserItem";

function UserList({ usersData }) {
  console.log(usersData);
  const renderedList = usersData.map((user) => {
    return <UserItem user={user} />;
  });

  return <div>{renderedList}</div>;
}

export default UserList;
