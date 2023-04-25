import { UserNewForm } from "~/models/user/user-new-form.model";

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

    static fromUserNewForm(userNewForm: UserNewForm, hashedPassword: string): User {
        return new User({
            name: userNewForm.name,
            email: userNewForm.email,
            password: hashedPassword
        });
    }
}
