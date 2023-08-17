import { useEffect, useState } from "react";

const Fetch = () => {
  const [users, Setusers] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => Setusers(data));
  }, []);
  return (
    <div>
      <h1> User List </h1>
      <ul>
        {users.map(user => {
         return   <li key={user.id}>
            <a href={user.html_url}>{user.login}</a>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default Fetch;
