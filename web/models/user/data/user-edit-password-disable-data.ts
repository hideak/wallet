export class UserEditPasswordDisableData {
    password: string;

    private constructor(userEditPasswordDisableData: UserEditPasswordDisableData) {
        this.password = userEditPasswordDisableData.password;
    }

    static empty(): UserEditPasswordDisableData {
        return new UserEditPasswordDisableData({
            password: '',
        });
    }
}