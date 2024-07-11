export interface Company {
  name: string;
}

export interface User {
  id: number;
  name: string;
  //   lastName: string;
  email: string;
  phone: string;
  company: Company;
}

export interface Users {
  users: User;
}
