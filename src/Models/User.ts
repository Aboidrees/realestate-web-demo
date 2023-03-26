export class User {
  id: number;
  user: number;
  firstName: string;
  secondName: string;
  thirdName: string;
  forthName: string;
  nationalID: string;
  phone: string;
  state: string;
  city: string;
  email: string;

  constructor(user: any) {
    this.id = user.id;
    this.user = user.user;
    this.firstName = user.firstName;
    this.secondName = user.secondName;
    this.thirdName = user.thirdName;
    this.forthName = user.forthName;
    this.nationalID = user.nationalID;
    this.phone = user.phone;
    this.state = user.state;
    this.city = user.city;
    this.email = user.email;
  }
}
