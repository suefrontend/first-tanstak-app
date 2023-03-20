import UserItem from "./UserItem";

function UserList({ usersData }) {
  const renderedList = usersData.map((user, index) => {
    return <UserItem user={user} index={index} />;
  });

  return (
    <div>
      <table className="table-auto w-full border-collapse border">
        <thead>
          <tr>
            <th className="text-left border-b py-4 pl-4 bg-slate-100">Name</th>
            <th className="text-left border-b py-4 bg-slate-100">Email</th>
          </tr>
        </thead>
        <tbody>{renderedList}</tbody>
      </table>
    </div>
  );
}

export default UserList;
