export class UserNewForm {
    name: string;
    email: string;
    usePassword: boolean;
    password: string;
    passwordConfirmation: string;

    private constructor(userNewForm: UserNewForm) {
        this.name = userNewForm.name;
        this.email = userNewForm.email;
        this.usePassword = userNewForm.usePassword;
        this.password = userNewForm.password;
        this.passwordConfirmation = userNewForm.passwordConfirmation;
    }

    static fromBlank(): UserNewForm {
        return new UserNewForm({
            name: '',
            email: '',
            usePassword: false,
            password: '',
            passwordConfirmation: ''
        });
    }
}