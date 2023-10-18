import { useLocation } from "react-router-dom";

const SingleUser = () => {
  const location = useLocation();
  const { selectedUser } = location.state;
  console.log(selectedUser);
  return <div>Hello</div>;
};

export default SingleUser;
