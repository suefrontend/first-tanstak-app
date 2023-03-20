function UserItem({ user, index }) {
  return (
    <tr key={index}>
      <td className="border-b py-4 pl-4">
        {user.name.first} {user.name.last}
      </td>
      <td className="border-b py-4">{user.email}</td>
    </tr>
  );
}

export default UserItem;
