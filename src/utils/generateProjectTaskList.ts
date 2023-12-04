import { Task } from "../types";
import { generateRandomID, generateRandomDate } from ".";

const generateProjectTaskList = (numberOfItems = 10): Task[] => {
  const taskArray = [];

  const taskDescriptions = [
    "Discuss project timeline with team",
    "Review budget allocations",
    "Prepare presentation for client meeting",
    "Update website content",
    "Conduct team training session",
    "Coordinate with marketing team for campaign",
    "Attend project status meeting",
    "Review and respond to emails",
    "Brainstorm new product ideas",
    "Schedule team-building event",
  ];

  const admins = [
    "James Taylor",
    "Emily Johnson",
    "Alex Smith",
    "Olivia Brown",
  ];

  const statuses = ["in-progress", "completed", "pending"];

  for (let i = 0; i < numberOfItems; i++) {
    const randomDescription: string =
      taskDescriptions[Math.floor(Math.random() * taskDescriptions.length)];
    const randomAdmin: string =
      admins[Math.floor(Math.random() * admins.length)];
    const randomStatus: string =
      statuses[Math.floor(Math.random() * statuses.length)];

    const taskObject = {
      id: generateRandomID(),
      started: generateRandomDate(),
      task: randomDescription,
      admin: randomAdmin,
      status: randomStatus,
    };

    taskArray.push(taskObject);
  }

  return taskArray;
};

export default generateProjectTaskList;
