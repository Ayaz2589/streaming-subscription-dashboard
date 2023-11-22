const sectionToDisplay = (currentSection: string) => {
  switch (currentSection) {
    case "/":
      return "Dashboard";
    case "/project":
      return "Project";
    case "/client":
      return "Client";
    case "/finance":
      return "Finance";
    default:
      return "Dashboard";
  }
};

export default sectionToDisplay;
