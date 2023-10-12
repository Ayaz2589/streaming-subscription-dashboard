import { Streaming } from "./types";

const mobileDevices = [
  "iPhone 15",
  "iPhone 15 Pro",
  "iPhone 15 Pro Max",
  "Samsung Galaxy S15",
  "Samsung Galaxy S15 Ultra",
];

const streamingDevices = [
  "Apple TV",
  "Google Chromecast",
  "Amazon Fire TV",
  "Roku",
  "Xbox",
  "Playstation",
  "Nintendo Switch",
  "Smart TV",
];

const streamingQualities = ["4K", "1080p", "720p"];

const streamingPlans = ["Basic", "Standard", "Premium"];

const streamingLanguages = ["English", "Spanish", "French", "German"];

const getRandomDateWithinLast5Years = (): Date => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const minYear = currentYear - 5;
  const randomYear = Math.floor(Math.random() * 5) + minYear;

  const randomMonth = Math.floor(Math.random() * 12) + 1;
  const randomDay = Math.floor(Math.random() * 28) + 1;

  const randomDate = new Date(randomYear, randomMonth - 1, randomDay);

  return randomDate;
};

function getRandomLastLogin(date: Date): number {
  const currentDate = new Date();
  const timeDifferenceMinutes = Math.floor(
    (currentDate.getTime() - date.getTime()) / 60000
  );

  const random = Math.random();

  if (random < 0.05) {
    return 10080; // 1 Week
  } else {
    const randomMinutes =
      Math.floor(Math.random() * (timeDifferenceMinutes + 31)) - 30;

    return Math.max(0, randomMinutes);
  }
}

const randomNumber = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomBool = () => (Math.random() > 0.5 ? true : false);

const createStreamingInformtion = (): Streaming => {
  const memberSince = getRandomDateWithinLast5Years();
  const lastLogin = getRandomLastLogin(memberSince);
  const isActive = randomBool();

  const formattedStreamingObject: Streaming = {
    member_since: memberSince,
    last_login_in_minutes: lastLogin,
    streaming_plan: streamingPlans[randomNumber(0, 2)],
    is_active: isActive,
    streaming_quality: streamingQualities[randomNumber(0, 2)],
    streaming_device: [
      mobileDevices[randomNumber(0, 4)],
      streamingDevices[randomNumber(0, 7)],
    ],
    streaming_language: streamingLanguages[randomNumber(0, 3)],
    streaming_watch_history: null,
  };

  return formattedStreamingObject;
};

export default createStreamingInformtion;
