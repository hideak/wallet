export class UserDeleteData {
    password: string;

    private constructor(userNewForm: UserDeleteData) {
        this.password = userNewForm.password;
    }

    static empty(): UserDeleteData {
        return new UserDeleteData({
            password: ''
        });
    }
}