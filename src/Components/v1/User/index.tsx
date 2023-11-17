import { useState, useEffect } from "react";
import { AllUsersTable, PieChart } from "..";
import { useDashboard } from "../../../hooks";
import { formatUsersForTable } from "../../../utils";
import { User } from "../../../utils/dummyDataUtils/types";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [selectedUser, updateSelectedUser] = useState<User | undefined>(
    undefined
  );
  const { state } = useDashboard();
  const { users } = state.data;
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedUser) {
      navigate(`/users/${selectedUser.id}`, { state: { selectedUser } });
    } else {
      navigate("/users");
    }
  }, [selectedUser, navigate]);

  const formattedUsers = formatUsersForTable(users);
  const activeUsers = users.filter((user: User) => user.isAccountActive).length;

  const pieChartUserData = [
    { id: 0, value: activeUsers, label: "Active" },
    { id: 1, value: users.length - activeUsers, label: "In-Active" },
  ];

  const handleUserClick = (userId: number) => {
    const selectedUser = users.find((user: User) => user.id === userId);
    updateSelectedUser(selectedUser);
  };
  return (
    <Box sx={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
      {formattedUsers?.length ? (
        <Box>
          <AllUsersTable
            formatedUsers={formattedUsers}
            handleUserClick={handleUserClick}
          />
        </Box>
      ) : null}
      {pieChartUserData?.length ? (
        <Box sx={{ display: "flex", justifyContent: "center", width: "50%" }}>
          <PieChart data={pieChartUserData} title="User Account Status" />
        </Box>
      ) : null}
    </Box>
  );
};

export default Users;
