export class LoginAccessData {
    password: string;

    private constructor(loginAccessData: LoginAccessData) {
        this.password = loginAccessData.password;
    }

    static empty(): LoginAccessData {
        return new LoginAccessData({
            password: ''
        });
    }
}