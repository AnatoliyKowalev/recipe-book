export interface User {
  id: string;
  email: string;
  roles: UserRole[];
  first_name: string;
  last_name: string;
}

export enum UserRole {
  admin = "admin",
}
