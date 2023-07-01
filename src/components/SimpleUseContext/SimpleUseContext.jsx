import { useEffect, useState } from "react";
import Search from "./Search";
import List from "./List";
import styles from "./styles.module.scss";

import { createContext } from "react";

const url = "https://jsonplaceholder.typicode.com/users";
const UserContext = createContext(null);

export default function SimpleUseContext() {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (searchText) {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  }, [users, searchText]);

  useEffect(function () {
    const fetchFn = async function () {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
    };
    fetchFn();
  }, []);
  return (
    <UserContext.Provider
      value={{ users: filteredUsers, setUsers, searchText, setSearchText }}
    >
      <div className={styles.simpleUseContextDemo}>
        <Search />
        <List data={users} />
      </div>
    </UserContext.Provider>
  );
}

export { UserContext };
