export class User {
    id: number;
    firstName: string;
    lastName: string;
    university: string;
    username: string;
    password: string;
    constructor(id = 0, firstName = "", lastName = "", university = "", username = "", password = "") {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.university = university;
        this.username = username;
        this.password = password;
    }
}
