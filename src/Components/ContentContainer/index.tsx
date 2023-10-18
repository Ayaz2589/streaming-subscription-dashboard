import { useEffect } from "react";
import { Dashboard, User, Movies, SingleUser } from "../";
import { Routes, Route, useNavigate } from "react-router-dom";

enum SectionRoutes {
  Dashboard = "/",
  Users = "/users",
  Movies = "/movies",
}

const ContentContainer = ({ currentSection }: { currentSection: string }) => {
  const navigate = useNavigate();
  useEffect(() => navigate(currentSection), [currentSection]);
  return (
    <Routes>
      <Route path={SectionRoutes.Dashboard} element={<Dashboard />} />
      <Route path={SectionRoutes.Users}>
        <Route index element={<User />} />
        <Route path=":id" element={<SingleUser />} />
      </Route>
      <Route path={SectionRoutes.Movies} element={<Movies />} />
    </Routes>
  );
};

export default ContentContainer;
