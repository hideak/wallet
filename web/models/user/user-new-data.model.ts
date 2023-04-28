export class UserNewData {
    name: string;
    email: string;
    usePassword: boolean;
    password: string;
    passwordConfirmation: string;

    private constructor(userNewForm: UserNewData) {
        this.name = userNewForm.name;
        this.email = userNewForm.email;
        this.usePassword = userNewForm.usePassword;
        this.password = userNewForm.password;
        this.passwordConfirmation = userNewForm.passwordConfirmation;
    }

    static empty(): UserNewData {
        return new UserNewData({
            name: '',
            email: '',
            usePassword: false,
            password: '',
            passwordConfirmation: ''
        });
    }
}