import { User, UserAPIRequest } from "../types/User";

const createUser = (user: UserAPIRequest): User => ({
  billingAddress: {
    value: user.address.address,
    city: user.address.city,
    coordinates: user.address.coordinates,
    postalCode: user.address.postalCode,
    state: user.address.state,
  },
  personal_information: {
    firstName: user.firstName,
    lastName: user.lastName,
    fullName: `${user.firstName} ${user.lastName}`,
    gender: user.gender,
    birthDate: user.birthDate,
  },
  system: {
    ipAddress: user.ip,
    macAddress: user.macAddress,
    userAgent: user.userAgent,
  },
  bankInformation: {
    cardExpire: user.bank.cardExpire,
    cardNumber: user.bank.cardNumber,
    cardType: user.bank.cardType,
    currency: user.bank.currency,
    iban: user.bank.iban,
  },
  email: user.email,
  phone: user.phone,
  username: user.username,
  avatar: user.image,
  id: user.id,
});

export default createUser;
