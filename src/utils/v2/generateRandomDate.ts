const generateRandomDate = (): string => {
  const currentDate = new Date();
  const lastMonthDate = new Date();
  lastMonthDate.setMonth(currentDate.getMonth() - 1);

  const randomTime =
    Math.random() * (currentDate.getTime() - lastMonthDate.getTime()) +
    lastMonthDate.getTime();
  const randomDate = new Date(randomTime);

  const month = String(randomDate.getMonth() + 1).padStart(2, "0");
  const day = String(randomDate.getDate()).padStart(2, "0");
  const year = String(randomDate.getFullYear());

  return `${month}/${day}/${year}`;
};

export default generateRandomDate;
