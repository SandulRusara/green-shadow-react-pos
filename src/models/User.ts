export class User {
  userEmail: string;
  password: string;

  constructor(userEmail: string, password: string) {
    this.userEmail = userEmail;
    this.password = password;
  }
}
