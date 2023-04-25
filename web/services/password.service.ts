import bcrypt from "bcryptjs";

export class PasswordService {
    static saltRounds = 10;

    async hash(password: string): Promise<string> {
        return await bcrypt.hash(password, PasswordService.saltRounds);
    }

    async compare(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash);
    }
}

export const passwordService = new PasswordService();