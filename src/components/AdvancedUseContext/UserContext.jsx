import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const UserContext = createContext();
const url = "https://jsonplaceholder.typicode.com/users";

function UserProvider({ children }) {
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
      value={{
        users,
        setUsers,
        searchText,
        setSearchText,
        filteredUsers,
        setFilteredUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUsers() {
  const context = useContext(UserContext);
  return context;
}

export { UserProvider, useUsers };
