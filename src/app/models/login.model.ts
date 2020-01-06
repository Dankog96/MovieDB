export class LoginModel {
  email:	string;
  password: string;
  returnSecureToken: boolean;

  constructor(email: string, password: string) {
    email = this.email,
    password = this.password;
  }
}
