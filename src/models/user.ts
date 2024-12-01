export interface User {
    id: number;
    name: string;
    surname: string;
    email: string;
}

export interface RegistrationFormData extends Omit<User, 'id'> {
    password: string,
    confirmPassword: string,
}

export interface UserRegistrationResponse extends User {
    access_token: string;
}