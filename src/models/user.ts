export interface User {
    id: number;
    name: string;
    surname: string;
    email: string;
    description?: string;
}

export interface RegistrationFormData extends Omit<User, 'id'> {
    password: string,
    confirmPassword: string,
}

export interface LoginFormData {
    email: string,
    password: string,
}

export type ProfileFormData = Omit<User, 'id' | 'email'>

export interface UserRegistrationResponse extends User {
    access_token: string;
}