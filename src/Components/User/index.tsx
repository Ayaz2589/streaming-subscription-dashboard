import { useState, useEffect } from "react";
import { AllUsersTable } from "..";
import { useDashboard } from "../../hooks";
import { formatUsersForTable } from "../../db/utils";
import { User } from "../../db/utils/dummyDataUtils/types";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [selectedUser, updateSelectedUser] = useState<User | null>(null);
  const { state } = useDashboard();
  const { users } = state.data;
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedUser) {
      navigate(`/users/${selectedUser.id}`);
    } else {
      navigate("/users");
    }
  }, [selectedUser, navigate]);

  const formattedUsers = formatUsersForTable(users);

  const handleUserClick = (userId: number) => {
    const selectedUser = users.find((user: User) => user.id === userId);
    updateSelectedUser(selectedUser);
  };
  return (
    <Box>
      {formattedUsers?.length ? (
        <AllUsersTable
          formatedUsers={formattedUsers}
          handleUserClick={handleUserClick}
        />
      ) : null}
    </Box>
  );
};

export default Users;
