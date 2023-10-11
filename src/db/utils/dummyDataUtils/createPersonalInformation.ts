import { createUser } from "./index";
import { User, UserAPIRequest } from "./types";

const createPersonalInformation = async () => {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const { users } = await response.json();
    if (users?.length) {
      const formattedUserObject: User = users.map((user: UserAPIRequest) =>
        createUser(user)
      );
      return formattedUserObject;
    }
  } catch (error) {
    console.log(error);
  }
};

export default createPersonalInformation;
