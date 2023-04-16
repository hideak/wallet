export class User {
    id?: number;
    name: string;
    email: string;
    password: string | null;

    private constructor(user: User) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
    }
}
