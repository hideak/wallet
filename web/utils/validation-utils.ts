export const validatePassword = (validationData: any): string => {
    if (validationData.usePassword === false) { return ''; }
    if (validationData.password.length >= 6) { return ''; }

    return 'A senha deve possuir mais que 6 caracteres';
}

export const validatePasswordConfirmation = (validationData: any): string => {
    if (validationData.usePassword === false) { return ''; }
    if (validationData.password === validationData.passwordConfirmation) { return ''; }

    return 'As senhas devem ser iguais';
}