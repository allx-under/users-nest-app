import { Injectable } from '@nestjs/common';

import { faker } from '@faker-js/faker';
import userId from './helpers/userId';

const users = [];

interface user {
  id: any;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: string;
}

function createRandomUser(): user {
  const name = faker.name.firstName();
  return {
    id: userId(),
    name: name,
    username: faker.internet.userName(name),
    email: faker.internet.email(name),
    phone: faker.phone.phoneNumberFormat(),
    website: faker.internet.domainName(),
    company: faker.company.name(),
  };
}

function createUsersArray(length: number): any {
  Array.from({ length }).forEach(() => {
    users.push(createRandomUser());
  });
}

createUsersArray(10);

@Injectable()
export class AppService {
  getUsers(): user[] {
    return users;
  }
}
