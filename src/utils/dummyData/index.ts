import { LineItem, BarItem, DashboardItem } from "../../types";

export const dashboardDummyData: DashboardItem[] = [
  {
    title: "Earnings",
    value: "$340.50",
  },
  {
    title: "Spend this month",
    value: "$645.89",
  },
  {
    title: "Sales",
    value: "$786.00",
  },
  {
    title: "Your Balance",
    value: "$1,000.00",
  },
  {
    title: "Client Total",
    value: "$4,586.25",
  },
  {
    title: "Project Total",
    value: "$3,786.45",
  },
];

export const lineChartDummyData: LineItem[] = [
  {
    name: "Q1",
    sales: 75.25,
    earnings: 30.25,
  },
  {
    name: "Q2",
    sales: 100.12,
    earnings: 40.25,
  },
  {
    name: "Q3",
    sales: 275.8,
    earnings: 150.25,
  },
  {
    name: "Q4",
    sales: 334.83,
    earnings: 74.75,
  },
];

export const barChartDummyData: BarItem[] = [
  {
    name: "Q1",
    project: 800.0,
    client: 1000.0,
  },
  {
    name: "Q2",
    project: 1000.0,
    client: 1200.0,
  },
  {
    name: "Q3",
    project: 1200.0,
    client: 1500.0,
  },
  {
    name: "Q4",
    project: 786.45,
    client: 886.25,
  },
];
