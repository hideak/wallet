export class UserEditPasswordData {
    password: string;
    passwordConfirmation: string;
    previousPassword: string;

    private constructor(userEditPasswordData: UserEditPasswordData) {
        this.password = userEditPasswordData.password;
        this.passwordConfirmation = userEditPasswordData.passwordConfirmation;
        this.previousPassword = userEditPasswordData.previousPassword;
    }

    static empty(): UserEditPasswordData {
        return new UserEditPasswordData({
            password: '',
            passwordConfirmation: '',
            previousPassword: '',
        });
    }
}