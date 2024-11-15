import { faker } from '@faker-js/faker';

export const generateMockData = () => {
  return Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(), // Corrected method for generating a full name
    email: faker.internet.email(),
    age: faker.number.int({ min: 18, max: 65 }),
  }));
};
