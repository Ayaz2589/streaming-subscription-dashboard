import { useEffect } from "react";
import { Dashboard, User, Movies, SingleUser } from "../";
import { Routes, Route, useNavigate } from "react-router-dom";

import { SectionRoutes } from "../SideNav/ResponsiveDrawer";

const ContentContainer = ({ currentSection }: { currentSection: string }) => {
  useEffect(() => navigate(currentSection), [currentSection]);
  const navigate = useNavigate();
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
