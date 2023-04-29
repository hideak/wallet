export class UserEditPasswordEnableData {
    password: string;
    passwordConfirmation: string;

    private constructor(userEditPasswordEnableData: UserEditPasswordEnableData) {
        this.password = userEditPasswordEnableData.password;
        this.passwordConfirmation = userEditPasswordEnableData.passwordConfirmation;
    }

    static empty(): UserEditPasswordEnableData {
        return new UserEditPasswordEnableData({
            password: '',
            passwordConfirmation: ''
        });
    }
}