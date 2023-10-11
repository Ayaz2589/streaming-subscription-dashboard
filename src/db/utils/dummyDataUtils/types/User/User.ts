export default interface User {
  billingAddress: {
    value: string;
    city: string;
    coordinates: string;
    postalCode: string;
    state: string;
  };
  personal_information: {
    firstName: string;
    lastName: string;
    fullName: string;
    gender: string;
    birthDate: string;
  };
  system: {
    ipAddress: string;
    macAddress: string;
    userAgent: string;
  };
  bankInformation: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  email: string;
  phone: string;
  username: string;
  avatar: string;
  id: number;
}
